import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';
import { fileURLToPath } from 'node:url';

const managerDir = path.dirname(fileURLToPath(import.meta.url));
const managerPublicDir = path.join(managerDir, 'public');
const defaultProjectRoot = path.resolve(managerDir, '..');
const projectRoot = path.resolve(
  process.env.STOOPIDCARTOONS_PROJECT_ROOT ?? defaultProjectRoot,
);
const releasesDir = path.join(projectRoot, 'content', 'releases');
const projectPublicDir = path.join(projectRoot, 'public');
const host = process.env.HOST ?? '127.0.0.1';
const port = Number(process.env.PORT ?? 4327);

const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'sr', 'hr', 'nl', 'pl', 'ro'];
const kinds = ['app', 'game'];
const accents = ['red', 'blue', 'green', 'orange'];
const screenshotOrientations = ['portrait', 'landscape'];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function sendError(res, statusCode, message, details = undefined) {
  sendJson(res, statusCode, {
    error: message,
    ...(details ? { details } : {}),
  });
}

async function serveFile(res, filePath) {
  try {
    const content = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();

    res.writeHead(200, {
      'content-type': mimeTypes[extension] ?? 'application/octet-stream',
    });
    res.end(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendError(res, 404, 'File not found');
      return;
    }

    throw error;
  }
}

function normalizeSlug(value) {
  return String(value ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeString(value) {
  return String(value ?? '').trim();
}

function normalizeNullableString(value) {
  const normalized = normalizeString(value);
  return normalized || null;
}

function normalizeBoolean(value) {
  return Boolean(value);
}

function normalizePositiveInteger(value, fallback = 1) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function normalizeRelativeAssetPath(value) {
  const normalized = normalizeString(value).replaceAll('\\', '/').replace(/^\/+/, '');

  if (!normalized || normalized.includes('..')) {
    return null;
  }

  return normalized;
}

function normalizeStringArray(value, fallback = []) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  return value
    .map((item) => normalizeString(item))
    .filter(Boolean);
}

function normalizeFeatureBullet(value) {
  return {
    title: normalizeString(value?.title),
  };
}

function normalizeScreenshotRequirement(value) {
  return {
    title: normalizeString(value?.title),
    description: normalizeString(value?.description),
    imagePath: normalizeRelativeAssetPath(value?.imagePath),
  };
}

function normalizeFaqItem(value) {
  return {
    question: normalizeString(value?.question),
    answer: normalizeString(value?.answer),
  };
}

function normalizeList(value, mapper, fallbackFactory) {
  if (!Array.isArray(value) || value.length === 0) {
    return [fallbackFactory()];
  }

  const normalized = value.map(mapper);
  return normalized.length > 0 ? normalized : [fallbackFactory()];
}

function normalizeTranslation(value) {
  const longDescription = normalizeList(
    value?.longDescription,
    (item) => normalizeString(item),
    () => '',
  );
  const summary = normalizeString(value?.summary);

  return {
    name: normalizeString(value?.name),
    summary,
    longDescription,
    bottomCtaDescription:
      normalizeString(value?.bottomCtaDescription) ||
      longDescription[longDescription.length - 1] ||
      summary,
    category: normalizeString(value?.category),
    platforms: normalizeStringArray(value?.platforms, ['Android']),
    tags: normalizeStringArray(value?.tags),
    metaTitle: normalizeString(value?.metaTitle),
    metaDescription: normalizeString(value?.metaDescription),
    featureBullets: normalizeList(
      value?.featureBullets,
      normalizeFeatureBullet,
      () => ({ title: '' }),
    ),
    screenshotRequirements: normalizeList(
      value?.screenshotRequirements,
      normalizeScreenshotRequirement,
      () => ({ title: '', description: '', imagePath: null }),
    ),
    faqs: normalizeList(
      value?.faqs,
      normalizeFaqItem,
      () => ({ question: '', answer: '' }),
    ),
  };
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function createEmptyTranslation() {
  return {
    name: '',
    summary: '',
    longDescription: [''],
    bottomCtaDescription: '',
    category: '',
    platforms: ['Android'],
    tags: [],
    metaTitle: '',
    metaDescription: '',
    featureBullets: [{ title: '' }],
    screenshotRequirements: [{ title: '', description: '', imagePath: null }],
    faqs: [{ question: '', answer: '' }],
  };
}

function normalizeDocument(value) {
  const kind = kinds.includes(value?.kind) ? value.kind : 'app';
  const icon = normalizeRelativeAssetPath(value?.icon) ?? '';
  const translations = Object.fromEntries(
    locales.map((locale) => [
      locale,
      normalizeTranslation(value?.translations?.[locale] ?? createEmptyTranslation()),
    ]),
  );

  for (const locale of locales) {
    const translation = translations[locale];

    if (!translation.metaTitle && translation.name) {
      translation.metaTitle = `${translation.name} | StoopidCartoons`;
    }

    if (!translation.metaDescription && translation.summary) {
      translation.metaDescription = translation.summary;
    }
  }

  const relatedSlugs = uniqueStrings(
    normalizeStringArray(value?.relatedSlugs).map((item) => normalizeSlug(item)),
  );

  return {
    slug: normalizeSlug(value?.slug),
    sortOrder: normalizePositiveInteger(value?.sortOrder, 1),
    kind,
    featured: normalizeBoolean(value?.featured),
    accent: accents.includes(value?.accent) ? value.accent : 'red',
    icon,
    googlePlayUrl: normalizeNullableString(value?.googlePlayUrl),
    websiteUrl: normalizeNullableString(value?.websiteUrl),
    schemaApplicationCategory:
      normalizeString(value?.schemaApplicationCategory) ||
      (kind === 'game' ? 'GameApplication' : 'MobileApplication'),
    relatedSlugs,
    screenshotOrientation: screenshotOrientations.includes(value?.screenshotOrientation)
      ? value.screenshotOrientation
      : kind === 'game'
        ? 'landscape'
        : 'portrait',
    translations,
  };
}

function validateDocument(document, { hasIconUpload }) {
  const errors = [];
  const english = document.translations.en;

  if (!slugPattern.test(document.slug)) {
    errors.push('Slug must use lowercase letters, numbers, and hyphens only.');
  }

  if (!english.name) {
    errors.push('English app name is required.');
  }

  if (!english.summary) {
    errors.push('English summary is required.');
  }

  if (!document.icon && !hasIconUpload) {
    errors.push('Add an icon path or upload an icon image.');
  }

  return errors;
}

function toSummary(document) {
  return {
    slug: document.slug,
    sortOrder: document.sortOrder,
    kind: document.kind,
    featured: document.featured,
    icon: document.icon,
    name: document.translations.en?.name || document.slug,
  };
}

async function readReleaseDocuments() {
  await fs.mkdir(releasesDir, { recursive: true });
  const entries = await fs.readdir(releasesDir);
  const documents = [];

  for (const entry of entries) {
    if (!entry.endsWith('.json')) {
      continue;
    }

    const filePath = path.join(releasesDir, entry);
    const raw = JSON.parse(await fs.readFile(filePath, 'utf8'));
    documents.push(normalizeDocument(raw));
  }

  return documents.sort(
    (left, right) =>
      left.sortOrder - right.sortOrder || left.slug.localeCompare(right.slug),
  );
}

async function readReleaseDocument(slug) {
  const filePath = path.join(releasesDir, `${slug}.json`);
  const raw = JSON.parse(await fs.readFile(filePath, 'utf8'));
  return normalizeDocument(raw);
}

function ensureInsideDirectory(baseDir, candidatePath) {
  const relative = path.relative(baseDir, candidatePath);
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

async function parseMultipartRequest(req) {
  const body =
    req.method === 'GET' || req.method === 'HEAD'
      ? undefined
      : Readable.toWeb(req);
  const request = new Request(`http://${req.headers.host ?? 'localhost'}${req.url}`, {
    method: req.method,
    headers: req.headers,
    body,
    duplex: 'half',
  });

  return request.formData();
}

function extensionFromFile(file) {
  const fromName = path.extname(file.name ?? '').toLowerCase();

  if (fromName) {
    return fromName;
  }

  if (file.type === 'image/jpeg') {
    return '.jpg';
  }

  if (file.type === 'image/webp') {
    return '.webp';
  }

  if (file.type === 'image/svg+xml') {
    return '.svg';
  }

  return '.png';
}

async function writeUploadedFile(file, targetPath) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, Buffer.from(await file.arrayBuffer()));
}

async function saveReleaseDocument(formData) {
  const rawDocument = formData.get('document');
  const rawOriginalSlug = normalizeString(formData.get('originalSlug'));
  const uploadManifest = JSON.parse(String(formData.get('uploadManifest') || '[]'));
  const document = normalizeDocument(JSON.parse(String(rawDocument || '{}')));
  const iconFile = formData.get('iconFile');
  const originalSlug = rawOriginalSlug || null;
  const hasIconUpload = iconFile && typeof iconFile.arrayBuffer === 'function' && iconFile.size > 0;
  const errors = validateDocument(document, { hasIconUpload });

  if (errors.length > 0) {
    const error = new Error('Validation failed');
    error.statusCode = 400;
    error.details = errors;
    throw error;
  }

  if (originalSlug && originalSlug !== document.slug) {
    const error = new Error('Renaming slugs is not supported yet.');
    error.statusCode = 400;
    throw error;
  }

  const targetFilePath = path.join(releasesDir, `${document.slug}.json`);

  if (!originalSlug) {
    try {
      await fs.access(targetFilePath);
      const error = new Error(`Release "${document.slug}" already exists.`);
      error.statusCode = 409;
      throw error;
    } catch (accessError) {
      if (accessError.code !== 'ENOENT') {
        throw accessError;
      }
    }
  }

  document.relatedSlugs = document.relatedSlugs.filter((slug) => slug !== document.slug);

  if (hasIconUpload) {
    const extension = extensionFromFile(iconFile);
    const relativePath = path.posix.join('apps', 'icons', `${document.slug}${extension}`);
    const targetPath = path.join(projectPublicDir, 'apps', 'icons', `${document.slug}${extension}`);

    await writeUploadedFile(iconFile, targetPath);
    document.icon = relativePath;
  }

  for (const item of uploadManifest) {
    if (item?.type !== 'screenshot') {
      continue;
    }
    const file = formData.get(item.key);

    if (!file || typeof file.arrayBuffer !== 'function' || file.size === 0) {
      continue;
    }

    const extension = extensionFromFile(file);
    const relativePath = path.posix.join(
      'apps',
      'screenshots',
      document.slug,
      `screenshot-${item.index + 1}${extension}`,
    );
    const targetPath = path.join(
      projectPublicDir,
      'apps',
      'screenshots',
      document.slug,
      `screenshot-${item.index + 1}${extension}`,
    );

    await writeUploadedFile(file, targetPath);

    for (const locale of locales) {
      const screenshot = document.translations[locale]?.screenshotRequirements?.[item.index];

      if (screenshot) {
        screenshot.imagePath = relativePath;
      }
    }
  }

  await fs.mkdir(releasesDir, { recursive: true });
  await fs.writeFile(targetFilePath, `${JSON.stringify(document, null, 2)}\n`, 'utf8');

  return document;
}

async function handleApiRequest(req, res, url) {
  if (req.method === 'GET' && url.pathname === '/api/meta') {
    sendJson(res, 200, {
      projectRoot,
      locales,
      kinds,
      accents,
      screenshotOrientations,
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/releases') {
    const documents = await readReleaseDocuments();
    sendJson(res, 200, documents.map(toSummary));
    return;
  }

  if (req.method === 'GET' && url.pathname.startsWith('/api/releases/')) {
    const slug = normalizeSlug(decodeURIComponent(url.pathname.replace('/api/releases/', '')));

    try {
      const document = await readReleaseDocument(slug);
      sendJson(res, 200, document);
    } catch (error) {
      if (error.code === 'ENOENT') {
        sendError(res, 404, 'Release not found');
        return;
      }

      throw error;
    }

    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/releases/save') {
    const formData = await parseMultipartRequest(req);
    const document = await saveReleaseDocument(formData);
    const summaries = await readReleaseDocuments();

    sendJson(res, 200, {
      message: `Saved ${document.slug}`,
      release: document,
      summaries: summaries.map(toSummary),
    });
    return;
  }

  sendError(res, 404, 'API route not found');
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);

    if (url.pathname.startsWith('/api/')) {
      await handleApiRequest(req, res, url);
      return;
    }

    if (url.pathname.startsWith('/project-assets/')) {
      const relativeAssetPath = decodeURIComponent(
        url.pathname.replace('/project-assets/', ''),
      ).replaceAll('\\', '/');
      const absoluteAssetPath = path.join(projectPublicDir, relativeAssetPath);

      if (!ensureInsideDirectory(projectPublicDir, absoluteAssetPath)) {
        sendError(res, 403, 'Forbidden asset path');
        return;
      }

      await serveFile(res, absoluteAssetPath);
      return;
    }

    const relativePath =
      url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\/+/, '');
    const absolutePath = path.join(managerPublicDir, relativePath);

    if (!ensureInsideDirectory(managerPublicDir, absolutePath)) {
      sendError(res, 403, 'Forbidden path');
      return;
    }

    await serveFile(res, absolutePath);
  } catch (error) {
    console.error(error);
    sendError(
      res,
      error.statusCode ?? 500,
      error.message ?? 'Unexpected server error',
      error.details,
    );
  }
});

server.listen(port, host, () => {
  console.log(`App Details Manager running at http://${host}:${port}`);
  console.log(`Target project: ${projectRoot}`);
});

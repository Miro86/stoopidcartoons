const state = {
  meta: null,
  releases: [],
  currentDoc: null,
  currentSlug: null,
  currentLocale: 'en',
  status: null,
  saving: false,
};

const app = document.querySelector('#app');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", '&#39;');
}

function assetUrl(relativePath) {
  if (!relativePath) {
    return '';
  }

  return `/project-assets/${relativePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')}`;
}

function splitCsv(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatCsv(value) {
  return Array.isArray(value) ? value.join(', ') : '';
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

function createEmptyDocument() {
  return {
    slug: '',
    sortOrder: state.releases.length + 1,
    kind: 'app',
    featured: true,
    accent: 'red',
    icon: '',
    googlePlayUrl: '',
    websiteUrl: '',
    schemaApplicationCategory: 'MobileApplication',
    relatedSlugs: [],
    screenshotOrientation: 'portrait',
    translations: Object.fromEntries(
      state.meta.locales.map((locale) => [locale, createEmptyTranslation()]),
    ),
  };
}

function setStatus(type, message) {
  state.status = message ? { type, message } : null;
  render();
}

async function request(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const details =
      Array.isArray(data.details) && data.details.length > 0
        ? ` ${data.details.join(' ')}`
        : '';
    throw new Error(`${data.error ?? 'Request failed.'}${details}`);
  }

  return data;
}

async function loadMeta() {
  state.meta = await request('/api/meta');
}

async function loadReleases() {
  state.releases = await request('/api/releases');
}

async function loadRelease(slug) {
  state.currentDoc = await request(`/api/releases/${encodeURIComponent(slug)}`);
  state.currentSlug = slug;
  state.status = null;
  render();
}

function getAtPath(root, path) {
  return path.split('.').reduce((value, segment) => value?.[segment], root);
}

function setAtPath(root, path, value) {
  const segments = path.split('.');
  let target = root;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    target = target[segment];
  }

  target[segments.at(-1)] = value;
}

function addArrayItem(path, template) {
  const list = getAtPath(state.currentDoc, path);
  list.push(template);
  render();
}

function removeArrayItem(path) {
  const segments = path.split('.');
  const index = Number(segments.pop());
  const arrayPath = segments.join('.');
  const list = getAtPath(state.currentDoc, arrayPath);

  list.splice(index, 1);

  if (list.length === 0) {
    if (arrayPath.endsWith('longDescription')) {
      list.push('');
    } else if (arrayPath.endsWith('featureBullets')) {
      list.push({ title: '' });
    } else if (arrayPath.endsWith('screenshotRequirements')) {
      list.push({ title: '', description: '', imagePath: null });
    } else if (arrayPath.endsWith('faqs')) {
      list.push({ question: '', answer: '' });
    }
  }

  render();
}

function renderListItems(path, items, fields, title) {
  return `
    <div class="card">
      <div class="card-head">
        <h3>${title}</h3>
        <button class="mini-button" data-add-array="${path}" data-template="${fields.template}">Add item</button>
      </div>
      <div class="list-stack">
        ${items
          .map(
            (item, index) => `
              <div class="list-item">
                <div class="row-actions">
                  <strong>${title} ${index + 1}</strong>
                  <button class="mini-button" data-remove-path="${path}.${index}">Remove</button>
                </div>
                ${fields.render(item, index)}
              </div>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderParagraphs(path, paragraphs) {
  return renderListItems(
    path,
    paragraphs,
    {
      template: 'paragraph',
      render: (_paragraph, index) => `
        <div class="field">
          <label>Paragraph</label>
          <textarea data-path="${path}.${index}">${escapeHtml(
            paragraphs[index] ?? '',
          )}</textarea>
        </div>
      `,
    },
    'Long Description',
  );
}

function renderFeatureBullets(path, bullets) {
  return renderListItems(
    path,
    bullets,
    {
      template: 'feature',
      render: (bullet, index) => `
        <div class="field">
          <label>Title</label>
          <input data-path="${path}.${index}.title" value="${escapeAttribute(
            bullet.title,
          )}" />
        </div>
      `,
    },
    'Feature Bullets',
  );
}

function renderScreenshots(path, screenshots) {
  return renderListItems(
    path,
    screenshots,
    {
      template: 'screenshot',
      render: (shot, index) => `
        <div class="screenshot-grid">
          <div class="grid-two">
            <div class="field">
              <label>Title</label>
              <input data-path="${path}.${index}.title" value="${escapeAttribute(
                shot.title,
              )}" />
            </div>
            <div class="field">
              <label>Shared Image Path</label>
              <input
                data-path="${path}.${index}.imagePath"
                data-nullable="true"
                value="${escapeAttribute(shot.imagePath ?? '')}"
              />
            </div>
            <div class="field">
              <label>Description</label>
              <textarea data-path="${path}.${index}.description">${escapeHtml(
                shot.description,
              )}</textarea>
            </div>
            <div class="field">
              <label>Replace Shared Image</label>
              <input
                type="file"
                accept="image/*"
                data-upload-type="screenshot"
                data-upload-index="${index}"
              />
              <p class="field-hint">Optional. Uploading saves one shared screenshot for all languages as screenshot-${index + 1}.</p>
            </div>
          </div>
          <div class="screenshot-preview">
            <img src="${assetUrl(shot.imagePath) || 'https://placehold.co/720x1280'}" alt="" />
          </div>
        </div>
      `,
    },
    'Screenshots',
  );
}

function renderFaqs(path, faqs) {
  return renderListItems(
    path,
    faqs,
    {
      template: 'faq',
      render: (faq, index) => `
        <div class="field">
          <label>Question</label>
          <input data-path="${path}.${index}.question" value="${escapeAttribute(
            faq.question,
          )}" />
        </div>
        <div class="field">
          <label>Answer</label>
          <textarea data-path="${path}.${index}.answer">${escapeHtml(
            faq.answer,
          )}</textarea>
        </div>
      `,
    },
    'FAQs',
  );
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="eyebrow">Standalone Manager</span>
        <h1>Release details, faster.</h1>
        <p>Edit app details, translations, icons, and screenshots in one pass, then save directly into the Astro project.</p>
      </div>

      <p class="project-path">Target project: ${escapeHtml(state.meta.projectRoot)}</p>

      <div class="sidebar-actions">
        <button class="button" id="new-release-button">New release</button>
      </div>

      <div class="releases">
        ${state.releases
          .map((release) => {
            const active = release.slug === state.currentSlug ? 'active' : '';
            return `
              <button class="release-button ${active}" data-release-slug="${release.slug}">
                <img class="release-icon" src="${assetUrl(release.icon)}" alt="" />
                <span class="release-info">
                  <span class="release-title">${escapeHtml(release.name)}</span>
                  <span class="release-meta">${escapeHtml(
                    `${release.kind} • order ${release.sortOrder}`,
                  )}</span>
                </span>
              </button>
            `;
          })
          .join('')}
      </div>
    </aside>
  `;
}

function renderEditor() {
  if (!state.currentDoc) {
    return `
      <section class="main-panel">
        <div class="empty-state">
          <div>
            <h2>Select a release</h2>
            <p>Pick an app from the left, or create a new one to start filling in its details.</p>
          </div>
        </div>
      </section>
    `;
  }

  const release = state.currentDoc;
  const locale = state.currentLocale;
  const translation = release.translations[locale];

  return `
    <section class="main-panel">
      <div class="editor-header">
        <div>
          <span class="eyebrow">Editing release</span>
          <h2>${escapeHtml(translation.name || release.slug || 'New release')}</h2>
          <p class="helper-copy">Slug is editable while creating a new release. Existing release slugs stay locked to avoid broken links and asset paths.</p>
        </div>
        <div class="editor-actions">
          <button class="button" id="save-button" ${state.saving ? 'disabled' : ''}>${
            state.saving ? 'Saving...' : 'Save to project'
          }</button>
        </div>
      </div>

      ${
        state.status
          ? `<div class="status ${state.status.type}">${escapeHtml(state.status.message)}</div>`
          : ''
      }

      <div class="form-grid">
        <div class="card">
          <h3>Release setup</h3>
          <div class="grid-three">
            <div class="field">
              <label>Slug</label>
              <input data-path="slug" value="${escapeAttribute(release.slug)}" ${
                state.currentSlug ? 'disabled' : ''
              } />
            </div>
            <div class="field">
              <label>Sort Order</label>
              <input type="number" min="1" data-path="sortOrder" value="${escapeAttribute(
                release.sortOrder,
              )}" />
            </div>
            <div class="checkbox-row">
              <input type="checkbox" data-path="featured" ${
                release.featured ? 'checked' : ''
              } />
              <span class="field-title">Featured release</span>
            </div>
          </div>
          <div class="grid-three">
            <div class="field">
              <label>Kind</label>
              <select data-path="kind">
                ${state.meta.kinds
                  .map(
                    (item) =>
                      `<option value="${item}" ${
                        release.kind === item ? 'selected' : ''
                      }>${item}</option>`,
                  )
                  .join('')}
              </select>
            </div>
            <div class="field">
              <label>Accent</label>
              <select data-path="accent">
                ${state.meta.accents
                  .map(
                    (item) =>
                      `<option value="${item}" ${
                        release.accent === item ? 'selected' : ''
                      }>${item}</option>`,
                  )
                  .join('')}
              </select>
            </div>
            <div class="field">
              <label>Screenshot Orientation</label>
              <select data-path="screenshotOrientation">
                ${state.meta.screenshotOrientations
                  .map(
                    (item) =>
                      `<option value="${item}" ${
                        release.screenshotOrientation === item ? 'selected' : ''
                      }>${item}</option>`,
                  )
                  .join('')}
              </select>
            </div>
          </div>
          <div class="grid-two">
            <div class="field">
              <label>Schema Application Category</label>
              <input
                data-path="schemaApplicationCategory"
                value="${escapeAttribute(release.schemaApplicationCategory)}"
              />
            </div>
            <div class="field">
              <label>Related Slugs</label>
              <input
                data-path="relatedSlugs"
                data-format="csv"
                value="${escapeAttribute(formatCsv(release.relatedSlugs))}"
              />
            </div>
          </div>
          <div class="grid-two">
            <div class="field">
              <label>Google Play URL</label>
              <input
                data-path="googlePlayUrl"
                data-nullable="true"
                value="${escapeAttribute(release.googlePlayUrl ?? '')}"
              />
            </div>
            <div class="field">
              <label>Website URL</label>
              <input
                data-path="websiteUrl"
                data-nullable="true"
                value="${escapeAttribute(release.websiteUrl ?? '')}"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Assets</h3>
          <div class="asset-preview">
            <img src="${assetUrl(release.icon) || 'https://placehold.co/256x256'}" alt="" />
            <div class="field" style="flex: 1;">
              <label>Icon Path</label>
              <input data-path="icon" value="${escapeAttribute(release.icon)}" />
              <label>Replace Icon</label>
              <input type="file" id="icon-file-input" accept="image/*" />
              <p class="field-hint">Upload once and the manager will copy the icon into public/apps/icons for you.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Translations</h3>
          <div class="locale-tabs">
            ${state.meta.locales
              .map(
                (item) => `
                  <button class="locale-tab ${
                    state.currentLocale === item ? 'active' : ''
                  }" data-locale="${item}">
                    ${item.toUpperCase()}
                  </button>
                `,
              )
              .join('')}
          </div>

          <div class="grid-two">
            <div class="field">
              <label>Name</label>
              <input data-path="translations.${locale}.name" value="${escapeAttribute(
                translation.name,
              )}" />
            </div>
            <div class="field">
              <label>Category</label>
              <input data-path="translations.${locale}.category" value="${escapeAttribute(
                translation.category,
              )}" />
            </div>
          </div>

          <div class="field">
            <label>Summary</label>
            <textarea data-path="translations.${locale}.summary">${escapeHtml(
              translation.summary,
            )}</textarea>
          </div>

          <div class="field">
            <label>Bottom CTA Description</label>
            <textarea data-path="translations.${locale}.bottomCtaDescription">${escapeHtml(
              translation.bottomCtaDescription,
            )}</textarea>
          </div>

          <div class="grid-two">
            <div class="field">
              <label>Platforms</label>
              <input
                data-path="translations.${locale}.platforms"
                data-format="csv"
                value="${escapeAttribute(formatCsv(translation.platforms))}"
              />
            </div>
            <div class="field">
              <label>Tags</label>
              <input
                data-path="translations.${locale}.tags"
                data-format="csv"
                value="${escapeAttribute(formatCsv(translation.tags))}"
              />
            </div>
          </div>

          <div class="grid-two">
            <div class="field">
              <label>Meta Title</label>
              <input data-path="translations.${locale}.metaTitle" value="${escapeAttribute(
                translation.metaTitle,
              )}" />
            </div>
            <div class="field">
              <label>Meta Description</label>
              <textarea data-path="translations.${locale}.metaDescription">${escapeHtml(
                translation.metaDescription,
              )}</textarea>
            </div>
          </div>
        </div>

        ${renderParagraphs(
          `translations.${locale}.longDescription`,
          translation.longDescription,
        )}
        ${renderFeatureBullets(
          `translations.${locale}.featureBullets`,
          translation.featureBullets,
        )}
        ${renderScreenshots(
          `translations.${locale}.screenshotRequirements`,
          translation.screenshotRequirements,
        )}
        ${renderFaqs(`translations.${locale}.faqs`, translation.faqs)}
      </div>
    </section>
  `;
}

function render() {
  if (!state.meta) {
    app.innerHTML = '<div class="empty-state"><div><h2>Loading manager…</h2></div></div>';
    return;
  }

  app.innerHTML = `
    <div class="shell">
      ${renderSidebar()}
      ${renderEditor()}
    </div>
  `;

  bindEvents();
}

function getTemplate(template) {
  if (template === 'paragraph') {
    return '';
  }

  if (template === 'feature') {
    return { title: '' };
  }

  if (template === 'screenshot') {
    return { title: '', description: '', imagePath: null };
  }

  if (template === 'faq') {
    return { question: '', answer: '' };
  }

  return {};
}

function bindFieldEvents() {
  document.querySelectorAll('[data-path]').forEach((element) => {
    if (element.disabled) {
      return;
    }

    const eventName =
      element.type === 'checkbox' || element.tagName === 'SELECT' ? 'change' : 'input';

    element.addEventListener(eventName, () => {
      const path = element.dataset.path;
      let value;

      if (element.type === 'checkbox') {
        value = element.checked;
      } else if (element.dataset.format === 'csv') {
        value = splitCsv(element.value);
      } else if (element.type === 'number') {
        value = Number.parseInt(element.value || '1', 10) || 1;
      } else if (element.dataset.nullable === 'true') {
        value = element.value.trim() || null;
      } else {
        value = element.value;
      }

      setAtPath(state.currentDoc, path, value);
    });
  });
}

function bindEvents() {
  bindFieldEvents();

  document.querySelectorAll('[data-release-slug]').forEach((button) => {
    button.addEventListener('click', async () => {
      await loadRelease(button.dataset.releaseSlug);
    });
  });

  document.querySelector('#new-release-button')?.addEventListener('click', () => {
    state.currentDoc = createEmptyDocument();
    state.currentSlug = null;
    state.currentLocale = 'en';
    state.status = null;
    render();
  });

  document.querySelectorAll('[data-locale]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentLocale = button.dataset.locale;
      render();
    });
  });

  document.querySelectorAll('[data-add-array]').forEach((button) => {
    button.addEventListener('click', () => {
      addArrayItem(button.dataset.addArray, getTemplate(button.dataset.template));
    });
  });

  document.querySelectorAll('[data-remove-path]').forEach((button) => {
    button.addEventListener('click', () => {
      removeArrayItem(button.dataset.removePath);
    });
  });

  document.querySelector('#save-button')?.addEventListener('click', async () => {
    await saveCurrentRelease();
  });
}

async function saveCurrentRelease() {
  if (!state.currentDoc) {
    return;
  }

  const formData = new FormData();
  const uploadManifest = [];
  const iconFile = document.querySelector('#icon-file-input')?.files?.[0] ?? null;
  const screenshotUploads = Array.from(
    document.querySelectorAll('[data-upload-type="screenshot"]'),
  )
    .map((input) => ({
      file: input.files?.[0] ?? null,
      index: Number.parseInt(input.dataset.uploadIndex, 10),
    }))
    .filter((item) => item.file && Number.isInteger(item.index));

  state.saving = true;
  render();

  try {

    formData.append('document', JSON.stringify(state.currentDoc));
    formData.append('originalSlug', state.currentSlug ?? '');

    if (iconFile) {
      formData.append('iconFile', iconFile);
    }

    screenshotUploads.forEach((item) => {
      const key = `screenshot-${item.index}`;
      uploadManifest.push({
        type: 'screenshot',
        key,
        index: item.index,
      });
      formData.append(key, item.file);
    });

    formData.append('uploadManifest', JSON.stringify(uploadManifest));

    const response = await request('/api/releases/save', {
      method: 'POST',
      body: formData,
    });

    state.currentDoc = response.release;
    state.currentSlug = response.release.slug;
    state.releases = response.summaries;
    setStatus('success', response.message);
  } catch (error) {
    setStatus('error', error.message);
  } finally {
    state.saving = false;
    render();
  }
}

async function init() {
  try {
    await loadMeta();
    await loadReleases();

    if (state.releases[0]) {
      await loadRelease(state.releases[0].slug);
    } else {
      state.currentDoc = createEmptyDocument();
      render();
    }
  } catch (error) {
    app.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>Manager failed to load</h2>
          <p>${escapeHtml(error.message)}</p>
        </div>
      </div>
    `;
  }
}

init();

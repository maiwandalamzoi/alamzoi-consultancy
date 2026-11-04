const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('HTML IDs are unique and internal links resolve', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'duplicate ID found');
  const refs = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
  for (const ref of refs) assert.ok(ids.includes(ref), `broken anchor #${ref}`);
});

test('one catalogue contains the seven agreed services and quotation CTAs', () => {
  const section = html.match(/<section[^>]+id="services"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section);
  assert.equal((section.match(/class="card service"/g) || []).length, 7);
  for (const key of ['svc1_title','svc2_title','svc3_title','svc4_title','svc5_title','svc6_title','svc7_title']) assert.ok(section.includes(`data-i18n="${key}"`));
  assert.equal((html.match(/id="services"/g) || []).length, 1);
});

test('English and Dutch dictionaries cover visible translation keys', () => {
  const script = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
  const match = script.match(/const I18N = (\{[\s\S]*?\n\});\s*function renderSectorMethod/);
  const dictionaries = vm.runInNewContext(`(${match[1]})`);
  const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  for (const lang of ['en','nl']) for (const key of keys) assert.ok(Object.hasOwn(dictionaries[lang], key), `${lang} missing ${key}`);
});

test('quotation form includes required client/project fields and mailto serialization', () => {
  const form = html.match(/<form[^>]+id="enquiryForm"[\s\S]*?<\/form>/)?.[0];
  assert.ok(form);
  for (const field of ['sector','topic','location','area','deliverables','timeline','budget','problem','name','organisation','email','phone']) assert.ok(form.includes(`name="${field}"`), `missing ${field}`);
  const submit = html.slice(html.indexOf("document.querySelector('#enquiryForm').addEventListener"));
  for (const field of ['sector','location','area','deliverables','timeline','budget','problem','name','org','email']) assert.ok(submit.includes(field));
  assert.ok(submit.includes('mailto:${CONTACT_EMAIL}'));
  assert.ok(submit.includes('encodeURIComponent'));
});

test('inline JavaScript parses and map polygon calculation is present', () => {
  const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).filter(s => s.trim());
  for (const script of scripts) new vm.Script(script);
  assert.ok(html.includes('6378137'));
  assert.ok(html.includes('approximate geometry'));
});

test('three GIS demonstrations have unique detail views and map/quotation connections', () => {
  for (const id of ['demo1-detail','demo2-detail','demo3-detail']) {
    assert.equal((html.match(new RegExp(`id="${id}"`, 'g')) || []).length, 1);
    assert.ok(html.includes(`href="#${id}"`), `missing project link for ${id}`);
    assert.ok(html.includes(`id="${id}" class="demo-detail"`), `missing project view for ${id}`);
  }
  for (const topic of ['agritech','municipal','energy']) assert.ok(html.includes(`data-demo-sector="${topic}"`));
  for (const key of ['demo1_objective','demo1_area','demo1_method','demo1_deliver','demo1_limits','demo2_objective','demo2_area','demo2_method','demo2_deliver','demo2_limits','demo3_objective','demo3_area','demo3_method','demo3_deliver','demo3_limits']) assert.ok(html.includes(`data-i18n="${key}"`));
  assert.ok(html.includes('Sentinel-2 L2A'));
  assert.ok(html.includes('no satellite raster has been processed'));
});

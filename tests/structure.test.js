const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('la página expone navegación y contenido sin depender de JavaScript', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(html, /<main[^>]+id="contenido"/);
  assert.match(html, /<section[^>]+id="actividades"/);
  assert.match(html, /<section[^>]+id="participar"/);
  assert.match(html, /<details>/);
  assert.doesNotMatch(html, /<script\b/i);
});

test('la hoja de estilos evita desbordamientos y conserva foco visible', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'style.css'), 'utf8');
  assert.match(css, /box-sizing:\s*border-box/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\s*\(max-width:/);
});

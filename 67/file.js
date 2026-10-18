// app.js - fetches recipes.json, renders list, shows details when hash changes

// Utility to escape text for safe insertion
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function(m){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

let recipes = [];

async function loadRecipes() {
  try {
    const res = await fetch('recipes.json');
    if (!res.ok) throw new Error('Failed to load recipes.json: ' + res.status);
    recipes = await res.json();
    renderList();
    showDetailFromHash();
  } catch (err) {
    document.getElementById('list-container').textContent = 'Error loading recipes: ' + err.message;
  }
}

function renderList() {
  const container = document.getElementById('list-container');
  if (!recipes.length) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }
  document.getElementById('count').textContent = recipes.length + ' total';
  const html = '<ul>' + recipes.map(r =>
    `<li><a class="recipe-link" href="#${encodeURIComponent(r.id)}">${escapeHtml(r.title)}</a></li>`
  ).join('') + '</ul>';
  container.innerHTML = html;
}

function showDetailFromHash() {
  const id = decodeURIComponent(location.hash.replace(/^#/, ''));
  const detail = document.getElementById('detail');
  if (!id) {
    detail.innerHTML = '<p>Select a recipe from the list to view it here.</p>';
    return;
  }
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) {
    detail.innerHTML = '<p>Recipe not found.</p>';
    return;
  }
  detail.innerHTML = `
    <a class="back" href="#">&larr; Back to list</a>
    <h2 tabindex="-1">${escapeHtml(recipe.title)}</h2>
    ${recipe.yield ? `<p><strong>Yield:</strong> ${escapeHtml(recipe.yield)}</p>` : ''}
    <h3>Ingredients</h3>
    <ul>${(recipe.ingredients || []).map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
    <h3>Directions</h3>
    <ol>${(recipe.steps || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    ${recipe.notes ? `<h4>Notes</h4><p>${escapeHtml(recipe.notes)}</p>` : ''}
  `;
  // Move focus to heading for keyboard users / screen readers
  const h2 = detail.querySelector('h2');
  if (h2) h2.focus();
}

window.addEventListener('hashchange', showDetailFromHash, false);
window.addEventListener('DOMContentLoaded', loadRecipes, false);
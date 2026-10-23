const name1 = document.querySelector('#name');
const picture = document.querySelector('#picture');
const ingredients = document.querySelector('#ingredients');


name1.textContent = recipe.name;
picture.src = recipe.picture;
ingredients.textContent = recipe.ingredients.join(', ');

try{fetch('recipes.json');
const response = await fetch('recipes.json');
if(! response.ok){
    throw new Error(`${response.status} - ${response.statusText}`);
}
const recipes = await response.json();
console.log(recipes);
const allrecipes = document.querySelector('#recipes');
recipes.forEach(recipe => {
    allrecipes.innerHTML += `<option>${recipe.name}</option>`;
});
allrecipes.addEventListener('change',async function(){
    try{
        await fetch('${allrecipes.value}.json');
    } catch(e){
        console.error('Error fetching recipe details:', e);
    }
    const recipe = await response.json();
    console.log(recipe);
}

}
catch(e){
    console.error('Error fetching recipes:', e);
}




let count = 1;
const theButton = document.getElementById("Button1");


document.body.addEventListener("click", (event) => {
    const clicked = event.target.closest('button');
    if(!clicked) return;
    {  count++;
  const button = document.createElement('button');
  document.body.appendChild(button);
  button.textContent = count;}})





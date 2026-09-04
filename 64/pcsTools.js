function getElement(selector) {
  return document.querySelector(selector);
}

function setCss(element, property, value) {
  // element.style.property = value;
  element.style[property] = value;
}

function getCss(element, property) {
  // return element.style[property];
  return getComputedStyle(element)[property];
}

function on(element, eventType, callback) {
  element.addEventListener(eventType, callback);
}

function click(element, callback) {
  on(element, 'click', callback);
}

function hide(element){
  setCss(element, 'display', 'none');
}
function show(element){
  setCss(element, 'display', 'block');
}
function sparkle(element,time,interval){
    async function flashLine() { 
    const el = document.getElementById('line'); 
    await delay(time); 
    const original = getComputedStyle(el).color; 
    el.style.color = 'red'; 
    await delay(interval); 
    el.style.color = original; 
}

/*
const pcsTools = {
  getElement,
  /*setCss,
  getCss,* /
  css: function (element, property, value) {
    console.log(arguments);

    if (arguments.length < 3) {
      return getCss(element, property);
    } else {
      setCss(element, property, value);
    }
  },
  on,
  click
};

export default pcsTools;
*/

export default function (selector) {
  const element = getElement(selector);

  return {
    css: function (property, value) {
      console.log(arguments);

      if (arguments.length < 2) {
        return getCss(element, property);
      } else {
        setCss(element, property, value);
      }
    },
    on: (eventType, callback) => on(element, eventType, callback),
    click: callback => click(element, callback)
  };
}
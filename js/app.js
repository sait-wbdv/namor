import { phraser } from './phraser.js';
import { colour } from './colour.js';


// Toggle for adjectives
let adj; 
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('adjectives') == 'true') {
  adj = true;
} else {
  adj = false;
}

var container = document.querySelector('.phrase');

container.innerHTML = phraser.generate(2, adj);
colour.setRandomHue();

container.addEventListener('click', function(){
  this.innerHTML = phraser.generate(2, adj);
  colour.setRandomHue();
});

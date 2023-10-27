import { phraser } from './phraser.mjs';
import { colour } from './colour.mjs';


// Toggle for adjectives
let adj; 
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('adjectives') == 'true') {
  adj = true;
} else {
  adj = false;
}

const container = document.querySelector('.phrase');

container.innerHTML = phraser.generate(2, adj);
colour.setRandomHue();

container.addEventListener('click', function(){
  this.innerHTML = phraser.generate(2, adj);
  colour.setRandomHue();
});

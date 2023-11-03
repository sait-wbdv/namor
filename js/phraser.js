import { nouns } from './nouns.mjs';
import { adjectives } from './adjectives.mjs';

// TODO: Add support for multiple adjectives: 
// Multiple adjectives: https://www.gingersoftware.com/content/grammar-rules/adjectives/order-of-adjectives/

export const phraser = {
  generate: function(wordCount = 2, adjective = false) {

    let phrase = [];
    for (let i = 0; i < wordCount; i++) {
      phrase.push(nouns[(Math.floor(Math.random() * Math.floor(nouns.length)))]);
    }

    if (adjective) {
      return `<div>${adjectives[(Math.floor(Math.random() * Math.floor(adjectives.length)))]}</div> <h1>${phrase.join(' ')}</h1>`;
    } else {
      return `<h1>${phrase.join(' ')}</h1>`; 
    }
  }
}

export const colour = {
  setRandomHue:  function() {
    const newHue = Math.floor(Math.random() * Math.floor(360));
    document.querySelector(':root').style.setProperty('--hue',newHue);
    const hue = document.getElementById('hue');
    if (hue instanceof Element) {
      hue.value = newHue;
    } 
  }
}

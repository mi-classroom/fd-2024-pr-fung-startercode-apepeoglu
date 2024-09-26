import { initworkList } from './modules/generateContent.js';
import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
  initworkList();
  slideshow();
});
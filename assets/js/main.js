import { initworkList } from './modules/generateContent.js';
import { slideshow } from './modules/slideshow.js';
import { showMoreWork } from './modules/showMoreWork.js';
import { createImages } from './modules/generateImgForFinishedWork.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
  initworkList();
  showMoreWork();
  slideshow();
});
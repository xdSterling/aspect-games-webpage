// scripts.js

var page = 0;

window.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    page -= 1;
    PageManager();
  } else if (event.deltaY < 0) {
    page += 1;
    PageManager();
  }
});

function PageManager() {
  if (page == -1) {
    document.querySelector('.welcome').classList.add('fadeOut'); 
    //wait for animation completed then do below
    document.querySelector('.welcome').innerHTML='hello world';

  }
}
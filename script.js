
  let slideImages = document.querySelectorAll('.slides img');
  console.log('Images:', slideImages);

  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');

  let dots = document.querySelectorAll('.dot');
  console.log('Dots:', dots);

  var counter = 0;

  next.addEventListener('click', slideNext);
  function slideNext(){
    console.log('Next clicked');
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
      counter = 0;
    }
    else{
      counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
  }

  prev.addEventListener('click', slidePrev);
  function slidePrev(){
    console.log('Prev clicked');
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
      counter = slideImages.length-1;
    }
    else{
      counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
  }

  let autoSlideInterval;
  function autoSliding(){
    autoSlideInterval = setInterval(timer, 3000);
    function timer(){
      slideNext();
      indicators();
    }
  }
  autoSliding();

  const container = document.querySelector('.slide-container');
  container.addEventListener('mouseover', function(){
    clearInterval(autoSlideInterval);
  });

  container.addEventListener('mouseout', autoSliding);

  function indicators(){
    console.log('Updating indicators');
    for(let i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
  }

  function switchImage(currentImage){
    console.log('Switch image clicked');
    currentImage.classList.add('active');
    var imageId = parseInt(currentImage.getAttribute('attr'));
    if(imageId > counter){
      slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = imageId;
      slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
      return;
    }
    else{
      slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = imageId;
      slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';    
    }
    indicators();
  }

document.addEventListener('DOMContentLoaded', () => {
  showCategory('upcoming');
});

document.addEventListener('DOMContentLoaded', () => {
  showCategory('upcoming'); // Show upcoming by default
});

function showCategory(category) {
  const items = document.querySelectorAll('.todolist-item');

  items.forEach(item => {
    if (item.getAttribute('data-category') === category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  document.querySelector('.upcoming-text').classList.toggle('active', category === 'upcoming');
  document.querySelector('.outdated-text').classList.toggle('active', category === 'outdated');

  document.querySelector('.separator1').classList.toggle('active', category === 'upcoming');
  document.querySelector('.separator2').classList.toggle('active', category === 'outdated');
}



document.getElementById("profileImg").addEventListener("click", function() {
  var profileMenu = document.getElementById("profileMenu");
  if (profileMenu.style.display === "block") {
    profileMenu.style.display = "none";
  } else {
    profileMenu.style.display = "block";
  }
});

// Optionally, close the menu if clicked outside
window.addEventListener("click", function(event) {
  var profileMenu = document.getElementById("profileMenu");
  if (!event.target.matches('#profileImg') && !profileMenu.contains(event.target)) {
    profileMenu.style.display = "none";
  }
});
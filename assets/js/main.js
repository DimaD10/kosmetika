
// Promise1 slider
new Swiper('.slider1', {
  navigation: {
    nextEl: '.slider1-button-next',
    prevEl: '.slider1-button-prev'
  },
  pagination: {
    el: '.slider1-pagination',
    type: 'fraction',
  },
});

// Promise2 slider
new Swiper('.slider2', {
  navigation: {
    nextEl: '.slider2-button-next',
    prevEl: '.slider2-button-prev'
  },
  pagination: {
    el: '.slider2-pagination',
    type: 'fraction',
  },
});

// Promise3 slider
new Swiper('.slider3', {
  navigation: {
    nextEl: '.slider3-button-next',
    prevEl: '.slider3-button-prev'
  },
  pagination: {
    el: '.slider3-pagination',
    type: 'fraction',
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }
});

// Promise4 slider
new Swiper('.slider4', {
  navigation: {
    nextEl: '.slider4-button-next',
    prevEl: '.slider4-button-prev'
  },
  pagination: {
    el: '.slider4-pagination',
    type: 'fraction',
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }
});




window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);


function checkScroll() {
    let scrollPos = window.scrollY;
    
    console.log(scrollPos);
}


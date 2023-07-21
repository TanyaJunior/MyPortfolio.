import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.info'),
    smooth: true, // Enable smooth scrolling
  });
});
const scroll = new LocomotiveScroll({
  el: document.querySelector('.info'),
  smooth: true,
  smoothMobile: false, // Disable smooth scrolling on mobile devices
  multiplier: 0.5, // Adjust the sensitivity of scroll speed
  // Add more options as needed
});
AOS.init();

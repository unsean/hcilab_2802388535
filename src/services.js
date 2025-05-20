// services.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Learn More toggles
  document.querySelectorAll('.learn-more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-target');
          const details = document.getElementById(targetId);
          if (!details) return;

          const isHidden = details.hasAttribute('hidden');
          if (isHidden) {
              details.removeAttribute('hidden');
              // restore label + icon
              btn.innerHTML = '<span>Show Less</span><i class="ri-arrow-right-line"></i>';
          } else {
              details.setAttribute('hidden', '');
              btn.innerHTML = '<span>Learn More</span><i class="ri-arrow-right-line"></i>';
          }
      });
  });

  // 2) Mobile Nav Toggle
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav');
  if (burger && nav) {
      burger.addEventListener('click', () => {
          nav.classList.toggle('open');
      });
  }
});

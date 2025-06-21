// const hamburger = document.getElementById("hamburger");
// const navlinks = document.getElementById("navlinks");

// hamburger.addEventListener("click", ()=>{
//     navlinks.classList.toggle("navlinks-active");
// })



  const hamburger = document.getElementById('hamburger');
  const navlinks = document.getElementById('navlinks');
  const socialLinks = document.querySelector('.social-links');

  hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    socialLinks.classList.toggle('active');
  });


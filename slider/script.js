// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     document.querySelector('.card.active')?.classList.remove('active');
//     card.classList.add('active');
//     card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
//   });
// });




// const phones = document.querySelectorAll(".phone");
// const slides = document.querySelectorAll(".content-slide");

// phones.forEach((phone) => {
//   phone.addEventListener("click", () => {
//     document.querySelector(".phone.center")?.classList.remove("center");
//     phone.classList.add("center");

//     const index = phone.getAttribute("data-index");
//     document.querySelector(".content-slide.active")?.classList.remove("active");
//     document.querySelector(`.content-slide[data-index='${index}']`)?.classList.add("active");
//   });
// });


const phones = document.querySelectorAll(".phone");

    phones.forEach((phone) => {
      phone.addEventListener("click", () => {
        const centerPhone = document.querySelector(".phone.center");
        if (phone === centerPhone) return;

        // Swap content and background
        const tempContent = phone.querySelector(".content-slide").outerHTML;
        const tempBG = phone.style.backgroundImage;

        const centerContent = centerPhone.querySelector(".content-slide").outerHTML;
        const centerBG = centerPhone.style.backgroundImage;

        phone.innerHTML = centerContent;
        phone.style.backgroundImage = centerBG;

        centerPhone.innerHTML = tempContent;
        centerPhone.style.backgroundImage = tempBG;

        centerPhone.classList.remove("center");
        phone.classList.add("center");
      });
    });

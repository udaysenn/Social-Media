const previewImg = document.getElementById("mobilePreview");
  const cards = document.querySelectorAll(".cards .card img");

  cards.forEach((img) => {
    img.addEventListener("click", () => {
      previewImg.src = img.src;
    });
  });


  const phones = [...document.querySelectorAll('.phone')];
let centerIndex = 2;
let phoneOrder = [0, 1, 2, 3, 4]; // indexes of phones logically

function updateClasses() {
  phoneOrder.forEach((originalIndex, visualIndex) => {
    const phone = phones[originalIndex];

    phone.classList.remove('far-left', 'left', 'center', 'right', 'far-right', 'inactive');

    const diff = visualIndex - centerIndex;

    if (diff === -2) {
      phone.classList.add('far-left');
    } else if (diff === -1) {
      phone.classList.add('left');
    } else if (diff === 0) {
      phone.classList.add('center');
    } else if (diff === 1) {
      phone.classList.add('right');
    } else if (diff === 2) {
      phone.classList.add('far-right');
    } else {
      phone.classList.add('inactive');
    }
  });
}

phones.forEach((phone, originalIndex) => {
  phone.addEventListener('click', () => {
    const clickedVisualIndex = phoneOrder.indexOf(originalIndex);
    if (clickedVisualIndex === centerIndex) return;

    // Swap positions in the logical order array
    const temp = phoneOrder[centerIndex];
    phoneOrder[centerIndex] = phoneOrder[clickedVisualIndex];
    phoneOrder[clickedVisualIndex] = temp;

    updateClasses();
  });
});

// Initial setup
updateClasses();

  


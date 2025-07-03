const previewImg = document.getElementById("mobilePreview");
  const cards = document.querySelectorAll(".cards .card img");

  cards.forEach((img) => {
    img.addEventListener("click", () => {
      previewImg.src = img.src;
    });
  });


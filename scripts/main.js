
function showSpeakerDetails(element) {
    const name = element.getAttribute("data-name");
    const title = element.getAttribute("data-title");
    const company = element.getAttribute("data-company");
    const description = element.getAttribute("data-description");
    const imageSrc = element.querySelector("img").src;
  
    document.getElementById("selectedSpeakerName").textContent = name;
    document.getElementById("selectedSpeakerTitle").textContent = title;
    document.getElementById("selectedSpeakerCompany").textContent = company;
    document.getElementById("selectedSpeakerDescription").textContent = description;
    document.getElementById("selectedSpeakerImage").src = imageSrc;
  
  
    document.getElementById("selectedSpeaker").style.display = "flex";
    document.getElementById("modalOverlay").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("selectedSpeaker").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
  }
  

  document.querySelectorAll(".speaker-card").forEach(card => {
    card.addEventListener("click", () => showSpeakerDetails(card));
  });
  
 
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", closeModal);
  

  const leftButton = document.querySelector('.carousel-control.left');
  const rightButton = document.querySelector('.carousel-control.right');
  const speakersSlider = document.querySelector('.speakers-slider');
  
  function scrollCarousel(direction) {
    const cardWidth = document.querySelector('.speaker-card').offsetWidth + 16;
    speakersSlider.scrollBy({
      left: direction * cardWidth * 3,
      behavior: 'smooth'
    });
  }
  
  
  leftButton.addEventListener('click', () => scrollCarousel(-1));
  rightButton.addEventListener('click', () => scrollCarousel(1));
  
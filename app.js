function showPrices(vehicleType, button) {
  // Remove the 'selected' class from all vehicle buttons
  var vehicleButtons = document.querySelectorAll(".vehicle-btn");
  vehicleButtons.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  // Add the 'selected' class to the clicked vehicle button
  button.classList.add("selected");

  var packages = document.querySelectorAll(".package");

  packages.forEach(function (package) {
    var price = package.querySelector(".price");

    // Update prices based on selected vehicle type and package
    switch (vehicleType) {
      case "sedan":
        switch (package.id) {
          case "outside-detailing":
            price.textContent = "$80";
            break;
          case "interior-detailing":
            price.textContent = "$125";
            break;
          case "gold-detailing":
            price.textContent = "$170";
            break;
          case "platinum-detailing":
            price.textContent = "$250";
            break;
          default:
            break;
        }
        break;
      case "suv":
        switch (package.id) {
          case "outside-detailing":
            price.textContent = "$100";
            break;
          case "interior-detailing":
            price.textContent = "$150";
            break;
          case "gold-detailing":
            price.textContent = "$220";
            break;
          case "platinum-detailing":
            price.textContent = "$310";
            break;
          default:
            break;
        }
        break;
      case "truck":
        switch (package.id) {
          case "outside-detailing":
            price.textContent = "$120";
            break;
          case "interior-detailing":
            price.textContent = "$200";
            break;
          case "gold-detailing":
            price.textContent = "$270";
            break;
          case "platinum-detailing":
            price.textContent = "$370";
            break;
          default:
            break;
        }
        break;
      case "van":
        switch (package.id) {
          case "outside-detailing":
            price.textContent = "$120";
            break;
          case "interior-detailing":
            price.textContent = "$150";
            break;
          case "gold-detailing":
            price.textContent = "$270";
            break;
          case "platinum-detailing":
            price.textContent = "$370";
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  });
}

// Combined array of video sources
var videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "BENZ.mp4",
  "e31594b37af940e6acd9137f3c0bcf65.mp4",
  // Add more video sources as needed
];
var currentVideoIndex = 0; // Index of the currently displayed video

// Function to display the previous video
function prevVideo() {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1; // Wrap around to the last video
  }
  updateVideo();
}

// Function to display the next video
function nextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0; // Wrap around to the first video
  }
  updateVideo();
}

// Function to update the video source
function updateVideo() {
  var videoPlayer = document.getElementById("video-player");
  videoPlayer.src = videos[currentVideoIndex];
  videoPlayer.load(); // Load the new video source
}

function toggleAnswer(element) {
  // Find the closest parent `.question` to the clicked button
  const questionItem = element.closest(".question");
  // Toggle the `.open` class on the `.answer` child of this question
  const answer = questionItem.querySelector(".answer");
  answer.classList.toggle("open");

  // Optional: Rotate the arrow based on the open state
  if (answer.classList.contains("open")) {
    element.style.transform = "rotate(90deg)"; // Or adjust to your desired "open" rotation
  } else {
    element.style.transform = "rotate(0)"; // Or adjust to your desired "closed" rotation
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const galleryRow = document.querySelector(".gallery-row");
  const nextButton = document.getElementById("next-button");
  let currentIndex = 0; // Keep track of the current index to know which set of items to show.

  nextButton.addEventListener("click", () => {
    // Assuming each .gallery-item has equal width including margins/padding
    const scrollAmount =
      document.querySelector(".gallery-item").clientWidth * 3; // Width of three items

    currentIndex += 3; // Increase index to move to the next set of items
    const totalItems = document.querySelectorAll(".gallery-item").length;

    if (currentIndex >= totalItems) {
      currentIndex = 0; // Reset to start if we've reached the end
    }

    // Apply the transformation to scroll
    galleryRow.style.transform = `translateX(-${
      (currentIndex / 3) * scrollAmount
    }px)`;
  });
});

menuItems.forEach((item) => {
  // Using includes() for a looser match - useful if your project structure has subdirectories
  if (currentPath.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

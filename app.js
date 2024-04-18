document.addEventListener("DOMContentLoaded", function () {
  // Get the dropdown elements
  var yearSelect = document.getElementById("year");
  var makeSelect = document.getElementById("make");
  var modelSelect = document.getElementById("model");

  // Function to enable or disable a dropdown
  function toggleDropdown(dropdown, shouldEnable) {
    dropdown.disabled = !shouldEnable;
    if (!shouldEnable) {
      // Reset the dropdown if disabling
      dropdown.selectedIndex = 0;
    }
  }

  // Initialize all dropdowns to disabled except 'year'
  toggleDropdown(makeSelect, false);
  toggleDropdown(modelSelect, false);

  // Event listener for the 'year' dropdown changes
  yearSelect.addEventListener("change", function () {
    var isYearSelected = yearSelect.value !== ""; // Check if a year is selected
    toggleDropdown(makeSelect, isYearSelected); // Enable 'make' if a year is selected
  });

  // Event listener for the 'make' dropdown changes
  makeSelect.addEventListener("change", function () {
    var isMakeSelected = makeSelect.value !== ""; // Check if a make is selected
    toggleDropdown(modelSelect, isMakeSelected); // Enable 'model' if a make is selected
    if (isMakeSelected) {
      updateModels(); // Call updateModels to fill the 'model' dropdown
    }
  });

  // Function to update 'model' options based on selected 'make'
  function updateModels() {
    // Object containing models and their types for each make
    var modelsByMake = {
      Acura: { MDX: "SUV", RDX: "SUV", TLX: "Sedan", ILX: "Sedan" },
      Alfa_Romeo: {
        Giulia: "Sedan",
        Stelvio: "SUV",
        Tonale: "SUV",
      },
      Audi: {
        A1: "Sedan",
        A3: "Sedan",
        A4: "Sedan",
        "A4 Allroad": "SUV",
        A5: "Sedan",
        A6: "Sedan",
        "A6 Allroad": "SUV",
        A7: "Sedan",
        A8: "Sedan",
        Q2: "SUV",
        Q3: "SUV",
        "Q4 e-tron": "SUV",
        Q5: "SUV",
        "Q5 Sportback": "SUV",
        Q7: "SUV7",
        Q8: "SUV",
        "e-tron": "SUV",
        "e-tron GT": "Sedan",
        TT: "Sedan",
        "TT RS": "Sedan",
        R8: "Sedan",
        RS3: "Sedan",
        "RS4 Avant": "Sedan",
        RS5: "Sedan",
        "RS6 Avant": "Sedan",
        RS7: "Sedan",
        "RS Q3": "SUV",
        "RS Q8": "SUV",
        S3: "Sedan",
        S4: "Sedan",
        S5: "Sedan",
        S6: "Sedan",
        S7: "Sedan",
        S8: "Sedan",
        SQ2: "SUV",
        SQ5: "SUV",
        SQ7: "SUV7",
        SQ8: "SUV",
        TTS: "Sedan",
        V10: "Sedan",
      },
      Aston_Martin: {
        DBX: "SUV",
        DB11: "Sedan",
        "DB11 AMR": "Sedan",
        "DB11 Volante": "Sedan",
        "DBS Superleggera": "Sedan",
        "DBS Superleggera Volante": "Sedan",
        Vantage: "Sedan",
        "Vantage Roadster": "Sedan",
        Valhalla: "Sedan",
        Vanquish: "Sedan",
        "Vanquish S": "Sedan",
        "Vanquish Volante": "Sedan",
        "Vanquish Zagato": "Sedan",
        "Vanquish Zagato Volante": "Sedan",
        "Vanquish Zagato Shooting Brake": "Sedan",
        "Vanquish Zagato Speedster": "Sedan",
        Rapide: "Sedan",
        Valkyrie: "Sedan",
      },
      BMW: {
        "1 Series": "Sedan",
        "2 Series": "Sedan",
        "3 Series": "Sedan",
        "4 Series": "Sedan",
        "5 Series": "Sedan",
        "6 Series": "Sedan",
        "7 Series": "Sedan",
        "8 Series": "Sedan",
        Z4: "Sedan",
        X1: "SUV",
        X2: "SUV",
        X3: "SUV",
        X4: "SUV",
        X5: "SUV",
        X6: "SUV",
        X7: "SUV7",
        i3: "Sedan",
        i4: "Sedan",
        iX: "SUV",
      },
      Buick: {
        Encore: "SUV",
        "Encore GX": "SUV",
        Envision: "SUV",
        Enclave: "SUV7",
      },
      Cadillac: {
        CT4: "Sedan",
        CT5: "Sedan",
        CTS: "Sedan",
        ATS: "Sedan",
        XLR: "Sedan",
        STX: "Sedan",
        DTS: "Sedan",
        DeVille: "Sedan",
        Seville: "Sedan",
        Fleetwood: "Sedan",
        Brougham: "Sedan",
        Eldorado: "Sedan",
        Catera: "Sedan",
        Escalade: "SUV7",
        "Escalade ESV": "SUV7",
        "Escalade EXT": "SUV",
        SRX: "SUV",
        XT5: "SUV",
        XT4: "SUV",
        XT6: "SUV7",
        Lyriq: "SUV",
        XTS: "Sedan",
      },
      Chevrolet: {
        Aveo: "Sedan",
        Cruze: "Sedan",
        Malibu: "Sedan",
        Impala: "Sedan",
        Camaro: "Sedan",
        Corvette: "Sedan",
        Spark: "Sedan",
        Sonic: "Sedan",
        Bolt: "Sedan",
        Volt: "Sedan",
        Equinox: "SUV",
        Traverse: "SUV7",
        Tahoe: "SUV7",
        Suburban: "SUV7",
        Trax: "SUV",
        Trailblazer: "SUV",
        Blazer: "SUV",
        Colorado: "Truck",
        Silverado: "Truck",
        "Silverado HD": "Truck",
      },
      Chrysler: {
        300: "Sedan",
        Pacifica: "SUV7",
        Voyager: "SUV7",
        Aspen: "SUV",
        Sebring: "Sedan",
        "Town & Country": "SUV7",
        "PT Cruiser": "Sedan",
      },
      Dodge: {
        Charger: "Sedan",
        Challenger: "Sedan",
        Durango: "SUV",
        Journey: "SUV",
        "Grand Caravan": "SUV7",
        Dart: "Sedan",
        Avenger: "Sedan",
        Nitro: "SUV",
        Ram: "Truck",
      },
      Fiat: {
        500: "Sedan",
        "500X": "SUV",
        "500L": "SUV",
        Panda: "SUV",
        Tipo: "Sedan",
      },
      Fisker: {
        Karma: "Sedan",
        Ocean: "SUV",
      },
      Ford: {
        Fiesta: "Sedan",
        Focus: "Sedan",
        Fusion: "Sedan",
        Taurus: "Sedan",
        Mustang: "Sedan",
        GT: "Sedan",
        EcoSport: "SUV",
        Escape: "SUV",
        Edge: "SUV",
        Explorer: "SUV7",
        Expedition: "SUV7",
        Bronco: "SUV",
        "Bronco Sport": "SUV",
        Ranger: "Truck",
        "F-150": "Truck",
        "F-250": "Truck",
        "F-350": "Truck",
        "Transit Connect": "SUV",
      },
      Genesis: {
        G70: "Sedan",
        G80: "Sedan",
        G90: "Sedan",
        GV70: "SUV",
        GV80: "SUV",
      },
      GMC: {
        Terrain: "SUV",
        Acadia: "SUV7",
        Yukon: "SUV7",
        "Yukon XL": "SUV7",
        Canyon: "Truck",
        Sierra: "Truck",
        "Sierra HD": "Truck",
      },
      Honda: {
        Civic: "Sedan",
        Accord: "Sedan",
        Insight: "Sedan",
        Clarity: "Sedan",
        Fit: "Sedan",
        "CR-V": "SUV",
        "HR-V": "SUV",
        Passport: "SUV",
        Pilot: "SUV7",
        Odyssey: "SUV7",
        Ridgeline: "Truck",
      },
      Hyundai: {
        Accent: "Sedan",
        Elantra: "Sedan",
        Sonata: "Sedan",
        Veloster: "Sedan",
        Ioniq: "Sedan",
        Kona: "SUV",
        Tucson: "SUV",
        "Santa Fe": "SUV",
        Palisade: "SUV7",
        Venue: "SUV",
        Nexo: "SUV",
      },
      Infiniti: {
        Q50: "Sedan",
        Q60: "Sedan",
        QX50: "SUV",
        QX60: "SUV7",
        QX80: "SUV7",
      },
      Jaguar: {
        XE: "Sedan",
        XF: "Sedan",
        XJ: "Sedan",
        "F-Type": "Sedan",
        "E-Pace": "SUV",
        "F-Pace": "SUV",
        "I-Pace": "SUV",
      },
      Jeep: {
        Wrangler: "SUV",
        "Grand Cherokee": "SUV7",
        Compass: "SUV",
        Renegade: "SUV",
        Cherokee: "SUV",
        Gladiator: "Truck",
      },
      Kia: {
        Rio: "Sedan",
        Forte: "Sedan",
        Optima: "Sedan",
        Stinger: "Sedan",
        Sorento: "SUV7",
        Sportage: "SUV",
        Telluride: "SUV7",
        Soul: "SUV",
        Niro: "SUV",
      },
      LandRover: {
        Discovery: "SUV7",
        "Discovery Sport": "SUV",
        "Range Rover": "SUV",
        "Range Rover Sport": "SUV",
        "Range Rover Evoque": "SUV",
        "Range Rover Velar": "SUV",
      },
      Lexus: {
        IS: "Sedan",
        ES: "Sedan",
        GS: "Sedan",
        LS: "Sedan",
        RC: "Sedan",
        LC: "Sedan",
        UX: "SUV",
        NX: "SUV",
        RX: "SUV",
        GX: "SUV7",
        LX: "SUV7",
      },
      Lincoln: {
        Continental: "Sedan",
        MKZ: "Sedan",
        Corsair: "SUV",
        Nautilus: "SUV",
        Aviator: "SUV7",
        Navigator: "SUV7",
      },
      Mazda: {
        Mazda3: "Sedan",
        Mazda6: "Sedan",
        "CX-3": "SUV",
        "CX-30": "SUV",
        "CX-5": "SUV",
        "CX-9": "SUV7",
      },
      MercedesBenz: {
        "C-Class": "Sedan",
        "E-Class": "Sedan",
        "S-Class": "Sedan",
        CLA: "Sedan",
        GLA: "SUV",
        GLB: "SUV",
        GLC: "SUV",
        GLE: "SUV7",
        GLS: "SUV7",
        "G-Class": "SUV",
      },
      Mini: {
        Cooper: "Sedan",
        "Cooper Clubman": "Sedan",
        "Cooper Countryman": "SUV",
      },
      Mitsubishi: {
        Mirage: "Sedan",
        Lancer: "Sedan",
        Outlander: "SUV7",
        "Outlander Sport": "SUV",
        "Eclipse Cross": "SUV",
      },
      Nissan: {
        Altima: "Sedan",
        Maxima: "Sedan",
        Versa: "Sedan",
        Leaf: "Sedan",
        Juke: "SUV",
        Rogue: "SUV",
        Murano: "SUV",
        Pathfinder: "SUV7",
        Armada: "SUV7",
        Frontier: "Truck",
        Titan: "Truck",
      },
      Polestar: { 1: "Sedan", 2: "Sedan" },
      Porsche: {
        911: "Sedan",
        Panamera: "Sedan",
        Cayman: "Sedan",
        Boxster: "Sedan",
        Macan: "SUV",
        Cayenne: "SUV",
      },
      Ram: { 1500: "Truck", 2500: "Truck", 3500: "Truck" },
      Rivian: { R1T: "Truck", R1S: "SUV" },
      Subaru: {
        Impreza: "Sedan",
        Legacy: "Sedan",
        BRZ: "Sedan",
        Crosstrek: "SUV",
        Forester: "SUV",
        Outback: "SUV",
        Ascent: "SUV7",
      },
      Tesla: {
        "Model S": "Sedan",
        "Model 3": "Sedan",
        "Model X": "SUV7",
        "Model Y": "SUV",
      },
      Toyota: {
        Yaris: "Sedan",
        Corolla: "Sedan",
        Camry: "Sedan",
        Prius: "Sedan",
        Avalon: "Sedan",
        Mirai: "Sedan",
        86: "Sedan",
        Supra: "Sedan",
        "C-HR": "SUV",
        RAV4: "SUV",
        Highlander: "SUV7",
        "4Runner": "SUV",
        Sequoia: "SUV7",
        "Land Cruiser": "SUV7",
        Sienna: "SUV7",
        Tacoma: "Truck",
        Tundra: "Truck",
      },
      Volkswagen: {
        Golf: "Sedan",
        "Golf GTI": "Sedan",
        "Golf R": "Sedan",
        Polo: "Sedan",
        Jetta: "Sedan",
        Passat: "Sedan",
        Arteon: "Sedan",
        Tiguan: "SUV",
        Atlas: "SUV7",
        Touareg: "SUV",
        "ID.4": "SUV",
        Beetle: "Sedan",
      },
      Volvo: {
        S60: "Sedan",
        S90: "Sedan",
        V60: "Sedan",
        V90: "Sedan",
        XC40: "SUV",
        XC60: "SUV",
        XC90: "SUV7",
        C40: "SUV",
      },
      // ... other makes and their models
    };

    var makeSelect = document.getElementById("make");
    var modelSelect = document.getElementById("model");

    // Clear existing options
    modelSelect.innerHTML = "";

    // Add a placeholder option
    var defaultOption = document.createElement("option");
    defaultOption.textContent = "Select model";
    defaultOption.value = "";
    modelSelect.appendChild(defaultOption);

    // Append new options
    if (makeSelect.value) {
      var models = modelsByMake[makeSelect.value] || {}; // Get the models object or an empty object if the make is not found
      for (var model in models) {
        var option = document.createElement("option");
        option.textContent = model;
        option.value = model;
        // Set a data attribute for the vehicle type
        option.dataset.type = models[model];
        modelSelect.appendChild(option);
      }
    }
    var modelSelect = document.getElementById("model");
    modelSelect.addEventListener("change", function () {
      var selectedOption = modelSelect.options[modelSelect.selectedIndex];
      var vehicleType = selectedOption.dataset.type;
      updatePrices(vehicleType); // Call the function to update prices
    });
  }
});

function updatePrices(vehicleType) {
  var packages = document.querySelectorAll(".package");

  packages.forEach(function (packageElement) {
    var price = packageElement.querySelector(".price");

    // Determine price based on vehicle type
    var newPrice;
    switch (vehicleType) {
      case "Sedan":
        newPrice = determinePrice(packageElement.id, "sedan");
        break;
      case "SUV":
        newPrice = determinePrice(packageElement.id, "suv");
        break;
      // Add more cases for other vehicle types if needed
      default:
        newPrice = "Varies"; // Default text if no matching type found
        break;
    }

    // Update price text
    price.textContent = newPrice;
  });
}

function determinePrice(packageId, vehicleType) {
  // Define prices for each package and vehicle type
  var prices = {
    sedan: {
      "outside-detailing": "$70",
      "interior-detailing": "$125",
      "gold-detailing": "$170",
      "platinum-detailing": "$250",
    },
    suv: {
      "outside-detailing": "$100",
      "interior-detailing": "$150",
      "gold-detailing": "$220",
      "platinum-detailing": "$310",
    },
    suv7: {
      "outside-detailing": "$100",
      "interior-detailing": "$200",
      "gold-detailing": "$270",
      "platinum-detailing": "$399",
    },
    truck: {
      "outside-detailing": "$100",
      "interior-detailing": "$200",
      "gold-detailing": "$270",
      "platinum-detailing": "$399",
    },
    // Add more vehicle types and their corresponding prices if needed
  };

  // Return the price based on package ID and vehicle type
  return prices[vehicleType][packageId] || "Varies"; // 'Varies' is a fallback
}

// Call this function when a make is selected to initially set up the model dropdown and disable it
document.getElementById("make").addEventListener("change", function () {
  updateModels();
  // Initially set model dropdown to disabled until a make is selected
  document.getElementById("model").disabled = true;
});

// Call this function when the year is selected to enable the make dropdown
document.getElementById("year").addEventListener("change", function () {
  document.getElementById("make").disabled = this.value === "";
});

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

document.addEventListener("DOMContentLoaded", () => {
  // Get current URL path
  let path = window.location.pathname;
  path = path.replace(/\/$/, "").substring(path.lastIndexOf("/") + 1);

  // Loop through menu items and set active class
  document.querySelectorAll(".menu-item").forEach((item) => {
    if (
      item.getAttribute("href") === path ||
      (item.getAttribute("href") === "index.html" && path === "")
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

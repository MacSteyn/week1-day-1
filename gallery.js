/* ================================
   PART 1: CONTACT FORM DROPDOWN
   ================================ */

// Select menu
const inquiryType = document.getElementById("inquiryType");

// Input sections
const supportBox = document.getElementById("supportBox");
const salesBox = document.getElementById("salesBox");
const feedbackBox = document.getElementById("feedbackBox");

// Hide all boxes function
function hideAllBoxes() {
    supportBox.style.display = "none";
    salesBox.style.display = "none";
    feedbackBox.style.display = "none";
}

// Event listener for dropdown
if (inquiryType) {
    inquiryType.addEventListener("change", function () {
        hideAllBoxes();

        if (this.value === "support") {
            supportBox.style.display = "block";
        } else if (this.value === "sales") {
            salesBox.style.display = "block";
        } else if (this.value === "feedback") {
            feedbackBox.style.display = "block";
        }
    });
}


/* ================================
   PART 2: IMAGE GALLERY SCRIPT
   ================================ */

var photos = [];
var fileNames = [];
var imageList = [];

var captionTexts = [
    "Majestic Cliffside View",
    "Sunset Over the Cliff Edge",
    "The Rocky Outcrop",
    "Cliff's Edge Adventure",
    "Waves Crashing Below",
    "Overlooking the Vast Ocean"
];

var descTexts = [
    "A beautiful snowy landscape with pine trees.",
    "Sunlight glistening on fresh snow.",
    "A cozy cabin in a snowy forest.",
    "Majestic mountains covered in snow.",
    "A serene frozen lake at sunset.",
    "Skiers enjoying the slopes."
];

var closeText = "Click This To Close";

var openList = "<li id='photo";
var closeList = "</li>";
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>";
var openDescTag = "<p class='description'>";
var closeDescTag = "</p>";

for (var i = 0; i < 6; i++) {
    fileNames.push("winterland" + (i + 1));
    photos.push("<img src='images/" + fileNames[i] + ".jpg' alt='Winterland Image'>");

    var image =
        openList + (i + 1) + "'>" +
        photos[i] +
        openCaptionTag + captionTexts[i] + closeCaptionTag +
        openDescTag + descTexts[i] + closeDescTag +
        closeList;

    imageList.push(image);
}

// Load gallery if album exists
var album = document.getElementById("album");
if (album) {
    album.innerHTML = imageList.join("");
}

var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var closeInfoBox = document.getElementById("closeInfoBox");

if (closeInfoBox) {
    closeInfoBox.innerHTML = closeText;
}

var descriptions = document.querySelectorAll(".description");

descriptions.forEach(function (desc, index) {
    desc.addEventListener("click", function () {
        infoHeading.textContent = captionTexts[index];
        infoText.textContent = descTexts[index];
        infoBox.style.visibility = "visible";
    });
});

if (closeInfoBox) {
    closeInfoBox.addEventListener("click", function (e) {
        e.preventDefault();
        infoBox.style.visibility = "hidden";
    });
}


/* ================================
   PREFERRED CONTACT METHOD LOGIC
   ================================ */

var contactMethod = document.getElementById("contact");
var emailBox = document.getElementById("emailBox");
var phoneBox = document.getElementById("phoneBox");

function hideContactBoxes() {
    emailBox.style.display = "none";
    phoneBox.style.display = "none";
}

if (contactMethod) {
    contactMethod.addEventListener("change", function () {
        hideContactBoxes();

        if (this.value === "email") {
            emailBox.style.display = "block";
        } else if (this.value === "phone") {
            phoneBox.style.display = "block";
        }
    });
}


/* ============================================
   PART 3: LIGHTBOX FEATURE (ADDED FOR LAB TASK)
   ============================================ */

$(document).ready(function () {

    // When any gallery image is clicked
    $("#album li img").click(function () {

        // Clone the clicked image (assignment requirement)
        let copyImage = $(this).clone();

        // Clear previous content and insert the cloned image
        $(".box").empty().append(copyImage);

        // Show the backdrop and box (method chaining)
        $(".backdrop, .box").css("display", "block");
    });

    // Clicking the backdrop closes the lightbox
    $(".backdrop").click(function () {
        $(".backdrop, .box").css("display", "none");
    });

    // Close button inside the box (ADDED)
    $(".closeBtn").click(function () {
        $(".backdrop, .box").css("display", "none");
    });

});
       
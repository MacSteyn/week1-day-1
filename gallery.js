

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

document.getElementById("album").innerHTML = imageList.join("");

var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var closeInfoBox = document.getElementById("closeInfoBox");

closeInfoBox.innerHTML = closeText;

var descriptions = document.querySelectorAll(".description");

descriptions.forEach(function (desc, index) {
    desc.addEventListener("click", function () {
        infoHeading.textContent = captionTexts[index];
        infoText.textContent = descTexts[index];
        infoBox.style.visibility = "visible";
    });
});

closeInfoBox.addEventListener("click", function (e) {
    e.preventDefault();
    infoBox.style.visibility = "hidden";
});

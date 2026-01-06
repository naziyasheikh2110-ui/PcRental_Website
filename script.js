const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", ()=> {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

const popup = document.getElementById("locationPopup");

window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    () => console.log("Location enabled"),
    () => popup.style.display = "flex"
  );
};

function requestLocation(){
  navigator.geolocation.getCurrentPosition(
    () => popup.style.display = "none",
    () => alert("Location still disabled. Please enable it from settings.")
  );
}

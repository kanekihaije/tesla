const items = document.querySelectorAll(".item");
const Vehicles = document.querySelector(".Vehicles");
const Energy = document.querySelector(".Energy");
const Charging = document.querySelector(".Charging");
const Discover = document.querySelector(".Discover");
const Shop = document.querySelector(".Shop");
// console.log(items);
items[0].addEventListener("mouseenter", () => {
  Vehicles.style.height = "430px";
});
Vehicles.addEventListener("mouseleave", () => {
  Vehicles.style.height = "0px";
});
items[1].addEventListener("mouseenter", () => {
 Energy.style.height = "430px";
});
Energy.addEventListener("mouseleave", () => {
  Energy.style.height = "0px";
});
items[2].addEventListener("mouseenter", () => {
  Charging.style.height = "430px";
});
Charging.addEventListener("mouseleave", () => {
  Charging.style.height = "0px";
});
///////////////////////////////////////////////////////
items[3].addEventListener("mouseenter", () => {
  Discover.style.height = "430px";
});
Discover.addEventListener("mouseleave", () => {
  Discover.style.height = "0px";
});
items[4].addEventListener("mouseenter", () => {
  Shop.style.height = "430px";
});
Shop.addEventListener("mouseleave", () => {
  Shop.style.height = "0px";
});

































































































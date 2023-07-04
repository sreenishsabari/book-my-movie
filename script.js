let seat_list = document.querySelectorAll(
  ".seat-container .row .seat:not(.occupied)"
); // --> it returns a node list of seats which are not selected....

const seatCountEle = document.querySelector(".seat-count");
const priceEle = document.querySelector(".total-price");
const selectMovieEle = document.querySelector(".type-movie");

// global var
let totalvalue = 0;
let seatCount = 0;
let price = 0;

// function

const priceCalculation = function () {
  totalvalue = seatCount * price;
  seatCountEle.innerText = seatCount;
  priceEle.innerText = totalvalue;
};

// eventlistener
selectMovieEle.addEventListener("change", (event) => {
  console.log("value", event.target.value);
  price = Number(event.target.value);
  priceCalculation();
});

for (let i = 0; i < seat_list.length; i++) {
  seat_list[i].addEventListener("click", () => {
    if (seat_list[i].className === "seat") {
      seat_list[i].classList.add("selected");
    } else if (seat_list[i].className === "seat selected") {
      seat_list[i].classList.remove("selected");
    }
    seatCount = document.querySelectorAll(".row .seat.selected").length;
    priceCalculation();
  });
}

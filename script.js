$(`#hamburger`).click(function (e) {
  e.preventDefault();
  $(`#smallsizegridoptions`).addClass(`active`);
});
$(`#jesuschrist`).click(function (e) {
  e.preventDefault();
  $(`#smallsizegridoptions`).removeClass(`active`);
});

const input = document.querySelectorAll(".JsRed");

function validateForm() {
  for (let i = 0; input.length > i; i++) {
    console.log(input);
    if (input[i].value === "") {
      $(input[i]).css("border", "1px solid #f0145a");
      $(input[i]).attr(":placeholder", "color: #f0145a");
    } else {
    }
  }
}

const AllNames = document.querySelectorAll(`.unactiveName`);
const AllDesc = document.querySelectorAll(`.unactiveDescription`);

for (let i = 0; AllNames.length > i; i++) {
  AllNames[i].setAttribute(`data-id`, i);
}

$(`.unactiveName`).click(function (e) {
  e.preventDefault();
  $(AllNames).removeClass(`activeName`);
  $(AllDesc).removeClass(`activeDescription`);

  const That = this;
  $(That).addClass(`activeName`);
  const Target = Number($(That).data(`id`));
  $(AllDesc[Target]).addClass(`activeDescription`);
});

$(`#Slider`).slick({
  arrows: false,
  dots: true,
  dotsClass: `dotsinslider`,
});

function scrollToElem(elem) {
  event.preventDefault();
  const target = document.querySelector(elem.hash);
  window.scrollTo({
    top: target.offsetTop,
    behavior: "smooth",
  });
}

//этот участок я взял что бы было как нужно так как знаний на это пока у меня нету точно

let isDragging = false;
let startPosition = 0;
let startScrollLeft = 0;
let startScrollTop = 0;

document
  .querySelector("#GeneralNames")
  .addEventListener("mousedown", function (event) {
    isDragging = true;
    startPosition = event.clientX;
    startScrollLeft = this.scrollLeft;
    startScrollTop = this.scrollTop;
  });

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    let deltaX = event.clientX - startPosition;

    document.querySelector("#GeneralNames").scrollLeft =
      startScrollLeft - deltaX;
  }
});

document.addEventListener("mouseup", function (event) {
  isDragging = false;
});

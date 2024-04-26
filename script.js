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

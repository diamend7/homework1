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

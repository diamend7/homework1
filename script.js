const product = document.getElementsByClassName(`product`);
productid = $(product).attr(`id`);

$(".product").mouseenter(function () {
  let targetId = $(this).data("target");
  $(".product").css(`backgroundColor`, `rgb(55, 167, 231)`);
  $(this).css(`backgroundColor`, `rgb(50, 175, 233)`);
  $(`.listitems`).removeClass("displayblock");
  $("#" + targetId).addClass("displayblock");
});

$(".listitems").mouseleave(function () {
  let targetId = $(this).data("target");
  $(".product").css(`backgroundColor`, `rgb(55, 167, 231)`);
  $(this).css(`backgroundColor`, `rgb(50, 175, 233)`);
  $(`.listitems`).removeClass("displayblock");
});
$(`.productsList`).mouseleave(function () {
  $(`.listitems`).removeClass("displayblock");
  $(".product").css(`backgroundColor`, `rgb(55, 167, 231)`);
  console.log(`yee`);
});

let topvalue = 80;
const listItems = document.querySelectorAll(`.listitems`);
console.log(listItems.length);
for (let i = 1; i < listItems.length; i++) {
  $(listItems[i]).css(`top`, topvalue + `px`);
  topvalue += 78;
}

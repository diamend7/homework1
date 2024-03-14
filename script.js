$(`#product1, .productsList_under `).mouseenter(function () {
  $(`.productsList_under`).addClass(`displayblock`);
  $(`#product1`).css(`backgroundColor`, `rgb(50, 175, 233)`);
});
$(`#product1, .productsList_under`).mouseleave(function () {
  $(`.productsList_under`).removeClass(`displayblock`);
  $(`#product1`).css(`backgroundColor`, `rgb(55, 167, 231)`);
});

$(`#product2, .productsList_under2 `).mouseenter(function () {
  $(`.productsList_under2`).addClass(`displayblock`);
  $(`#product2`).css(`backgroundColor`, `rgb(50, 175, 233)`);
});
$(`#product2, .productsList_under2`).mouseleave(function () {
  $(`.productsList_under2`).removeClass(`displayblock`);
  $(`#product2`).css(`backgroundColor`, `rgb(55, 167, 231)`);
});

let listlenght = document.getElementsByClassName(`productsList_under`);

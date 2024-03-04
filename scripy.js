$(`#nav-home`).addClass(`activebutton`);
$(`#tab-home`).addClass(`activepar`);

$(`.nav-link`).click(function (e) {
  e.preventDefault();
  const thisbutton = this;
  const databutton = $(thisbutton).data(`target`);
  console.log(databutton);

  $(".nav-link").removeClass("activebutton");
  $(".tab-pane").removeClass("activepar");

  $(databutton).addClass(`activepar`);
  $(thisbutton).addClass(`activebutton`);

  $(".tab-pane").removeClass("activebutton");
});

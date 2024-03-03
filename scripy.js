$(`#nav-home`).addClass(`activebutton`);
$(`#tab-home`).addClass(`activepar`);

$(`.nav-link`).click(function (e) {
  e.preventDefault();
  const thisbutton = e.target;
  const databutton = $(thisbutton).data(`target`);

  const previousButton = $(".nav-link.activebutton");
  if (previousButton) {
    previousButton.removeClass("activebutton");
  }
  console.log(databutton);

  $(databutton).addClass(`activebutton`);

  if (databutton == `#nav-home`) {
    const previousPar = $(".tab-pane.activepar");
    if (previousPar) {
      previousPar.removeClass("activepar");
    }

    $(`#tab-home`).addClass(`activepar`);
  }
  if (databutton == `#nav-profile`) {
    const previousPar = $(".tab-pane.activepar");
    if (previousPar) {
      previousPar.removeClass("activepar");
    }

    $(`#tab-profile`).addClass(`activepar`);
  }
  if (databutton == `#nav-contact`) {
    const previousPar = $(".tab-pane.activepar");
    if (previousPar) {
      previousPar.removeClass("activepar");
    }

    $(`#tab-contact`).addClass(`activepar`);
  }
  if (databutton == `#nav-delivery`) {
    const previousPar = $(".tab-pane.activepar");
    if (previousPar) {
      previousPar.removeClass("activepar");
    }

    $(`#tab-delivery`).addClass(`activepar`);
  }
});

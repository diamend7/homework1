const form = document.getElementById(`timerForm`);
const count = document.getElementById(`timerCount`);
const result = document.getElementById(`result`);

let timeoutId;

$(`#reset, #stop, #resume`).css({
  visibility: `hidden`,
});

form.addEventListener(`submit`, () => {
  $(`#start`).css({
    visibility: `hidden`,
  });
  $(`#reset, #stop`).css({
    visibility: `visible`,
  });
  event.preventDefault();
  let countValue = count.valueAsNumber;

  clearInterval(timeoutId);
  timeoutId = setInterval(() => {
    if (countValue >= 0) {
      const hours = Math.floor(countValue / 3600);
      const minutes = Math.floor((countValue % 3600) / 60);
      const seconds = countValue % 60;

      result.innerHTML = `${hours}:${minutes}:${seconds}`;
      console.log(countValue);
      countValue--;
    } else {
      clearInterval(timeoutId);
      $(`#start`).css({
        visibility: `visible`,
      });
      $(`#reset, #stop, #resume`).css({
        visibility: `hidden`,
      });
    }
  }, 1000);

  $(`#reset`).click(function (e) {
    e.preventDefault();
    clearInterval(timeoutId);
    result.innerHTML = `0:0:0`;
    count.valueAsNumber = ``;
    $(`#start`).css({
      visibility: `visible`,
    });
    $(`#reset, #stop, #resume`).css({
      visibility: `hidden`,
    });
  });

  $(`#stop`).click(function (e) {
    e.preventDefault();
    clearInterval(timeoutId);
    const savetimer = countValue;
    const hours2 = Math.floor(savetimer / 3600);
    const minutes2 = Math.floor((savetimer % 3600) / 60);
    const seconds2 = savetimer % 60;
    result.innerHTML = `${hours2}:${minutes2}:${seconds2}`;
    $(`#resume`).css({
      visibility: `visible`,
    });
    $(`#stop`).css({
      visibility: `hidden`,
    });
    $(`#resume`).click(function (e) {
      e.preventDefault();
      clearInterval(timeoutId);
      countValue = savetimer;
      timeoutId = setInterval(() => {
        if (countValue >= 0) {
          const hours = Math.floor(countValue / 3600);
          const minutes = Math.floor((countValue % 3600) / 60);
          const seconds = countValue % 60;

          result.innerHTML = `${hours}:${minutes}:${seconds}`;
          console.log(countValue);
          countValue--;
        } else {
          clearInterval(timeoutId);
          $(`#start`).css({
            visibility: `visible`,
          });
          $(`#reset, #stop, #resume`).css({
            visibility: `hidden`,
          });
        }
      }, 1000);

      $(`#resume`).css({
        visibility: `hidden`,
      });
      $(`#stop`).css({
        visibility: `visible`,
      });
    });
  });
});

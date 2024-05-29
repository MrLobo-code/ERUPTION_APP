import Swal from "sweetalert2";

export function AutocloseAlert(text) {
  let timerInterval;
  Swal.fire({
    title: text,
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const remainingTime = Swal.getTimerLeft();
        if (remainingTime !== null) {
          const contentElement = document.querySelector('.swal2-content');
          if (contentElement) {
            contentElement.innerText = `This alert will close in ${Math.ceil(remainingTime / 1000)} seconds.`;
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      
    }
  });
}

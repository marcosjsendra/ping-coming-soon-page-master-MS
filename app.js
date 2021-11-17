document.querySelector("#input_btn").addEventListener("click", e => {
  e.preventDefault();
  if (
    document
      .querySelector("#email_input")
      .value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    document.querySelector("#email_input").classList.add("green_border");
    document.querySelector(".email_good").classList.add("notification_show");
    setTimeout(() => {
      document.querySelector("#email_input").classList.remove("green_border");
      document
        .querySelector(".email_good")
        .classList.remove("notification_show");
    }, 3000);
  } else {
    document.querySelector("#email_input").classList.add("red_border");
    document.querySelector(".email_error").classList.add("notification_show");
    setTimeout(() => {
      document.querySelector("#email_input").classList.remove("red_border");
      document
        .querySelector(".email_error")
        .classList.remove("notification_show");
    }, 3000);
  }
});

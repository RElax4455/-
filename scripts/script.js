$(function () {
  document.getElementById("burger").onclick = function () {
    document.getElementById("menu").classList.add("open");
  };

  document.querySelectorAll("#menu *").forEach((item) => {
    item.onclick = () => {
      document.getElementById("menu").classList.remove("open");
    };
  });

  $(".test-popup-link").magnificPopup({
    type: "image",
  });

  const next = $("#next");
  const card = $(".card-deactive");

  next.click(function () {
    card.toggle("slow");
    card.css("display", "flex");
  });

  const slider = $(".slider");

  slider.slick({
    centerMode: true,
    centerPadding: "50%",
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    infinite: true,
    dots: true,
    speed: 500,
    prevArrow: $("#prev-arrow"),
    nextArrow: $("#next-arrow"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  let buttonSubmit = $(".form__button");
  const loader = $("#loader");

  buttonSubmit.click(function () {
    const form = $("#form");
    const name = $("#name");
    const phone = $("#phone");
    const inputError = $(".input-consultation");
    const thanks = $("#thanks");
    let hasError = false;

    inputError.css("border-color", "#FFFFFF");

    $(".error-input-consultation").hide();

    if (!name.val()) {
      name.next().show();
      name.css("border-color", "red");
      hasError = true;
    }

    if (!phone.val()) {
      phone.next().show();
      phone.css("border-color", "red");
      hasError = true;
    }

    if (!hasError) {
      loader.css("display", "flex");
      $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: { name: name.val(), tel: phone.val() },
      }).done(function (message) {
        loader.hide();
        if (message.success) {
          form.hide();
          thanks.css("display", "block");
        } else {
          alert(
            "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ."
          );
        }
      });
    }
  });

  let buttonOpenPopup = $("#button-popup");
  let buttonClosePopup = $(".popup__button");
  let buttonSubmitPopup = $("#submit-popup");
  const popup = $("#popup");

  buttonOpenPopup.click(function () {
    popup.css("display", "flex");
  });

  buttonClosePopup.click(function () {
    popup.css("display", "none");
  });

  buttonSubmitPopup.click(function () {
    const form = $("#form-popup");
    const name = $("#name-popup");
    const phone = $("#phone-popup");
    const inputError = $(".input-popup");
    const thanks = $("#thanks-popup");
    let hasError = false;

    inputError.css("border-color", "#FFFFFF");

    $(".error-input-popup").hide();

    if (!name.val()) {
      name.next().show();
      name.css("border-color", "red");
      hasError = true;
    }
    if (!phone.val()) {
      phone.next().show();
      phone.css("border-color", "red");
      hasError = true;
    }

    if (!hasError) {
      loader.css("display", "flex");
      $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: { name: name.val(), tel: phone.val() },
      }).done(function (message) {
        loader.hide();
        if (message.success) {
          form.hide();
          thanks.css("display", "block");
        } else {
          alert(
            "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ."
          );
        }
      });
    }
  });
});

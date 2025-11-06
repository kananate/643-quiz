document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });
  
  
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#home').fadeIn();
    }
    else {
      $('#home').fadeOut();
    }
  });
  
  
  $(document).ready(function () {
    $("#home").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });
  
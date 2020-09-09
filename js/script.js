AOS.init();
let counter = 0;
$(document).ready(function () {
  $(window).on("wheel,", function (event) {
    // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
    if (event.originalEvent.deltaY < 0) {
      // wheeled up
      counter--;
      counter = counter < 0 ? 0 : counter;
      if (!counter) {
        $(".section0 >img").removeClass("transformedBanner");
        $(".creditcardimage").removeClass("shiftcreditcard");
      }
    } else {
      // wheeled down
      counter++;
      if (counter == 1) {
        $(".section0 >img").addClass("transformedBanner");
        $(".creditcardimage").addClass("shiftcreditcard");
      }
    }
  });
  $(window).keydown(function (event) {
    if (event.keyCode == 38) {
      counter--;
      counter = counter < 0 ? 0 : counter;
      if (!counter) {
        $(".section0 >img").removeClass("transformedBanner");
        $(".creditcardimage").removeClass("shiftcreditcard");
      }
    }
    if (event.keyCode == 40) {
      counter++;
      if (counter == 1) {
        $(".section0 >img").addClass("transformedBanner");
        $(".creditcardimage").addClass("shiftcreditcard");
      }
    }
  });
  // Transition effect for navbar
  // $(window).scroll(function () {
  //   // if scroll starts

  //   // checks if window is scrolled more than 500px, adds/removes solid class
  //   if ($(this).scrollTop() > 300) {
  //     // $(".navbar").addClass("solid");
  //   } else {
  //     // $(".navbar").removeClass("solid");
  //   }
  // });
});

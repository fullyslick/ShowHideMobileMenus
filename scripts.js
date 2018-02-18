jQuery(document).ready(function($) {

  // Get the mobile buttons
  const mobileButtons = $('.mobile-button');

  // Get the menus that should be hidden or shown on mobile version
  const mobileMenus = mobileButtons.siblings('.mobile-menu');

  // The breakpoint at wich mobile version starts. Make sure it is equal to the media query in CSS.
  var mobileBreakPoint = 650;

  // The function that shows-hides mobile menus
  // @button displays the menu
  // @menu that should be displayed
  function showHideMenu(button, menu) {
    $(button).toggleClass("clicked");
    $(menu).slideToggle(); /* shows or hides the menu */
  }

  // Listener for change of the window size
  function windowResize(button, menu) {
    // Get the width of the window and assign it to a  variable
    var width = $(window).width();

    // Determine if it is desktop or mobile size
    if (width > mobileBreakPoint) {

      // On desktop show all menus
      for (var i = 0; i < menu.length; i++) {
        $(menu[i]).css("display", "block");
      }
    } else {
      // On mobile if a button was clicked display the corresponding menu
      for (var i = 0; i < menu.length; i++) {

        if ($(button[i]).hasClass("clicked")) {

          $(menu[i]).css("display", "block");
        }
        // If it was not clicked hide the corresponding menu
        else {
          $(menu[i]).css("display", "none");
        }
      }
    }
  }

  // Listen for a click on mobile-button and display or hide menu
  mobileButtons.click(function() {
    showHideMenu($(this), $(this).siblings('.mobile-menu'));
  });

  // Listener for chanage of the window size
  $(window).resize(function() {
    // Shows or hides menus depeneding on desktop or mobile version
    windowResize(mobileButtons, mobileMenus);
  });
});

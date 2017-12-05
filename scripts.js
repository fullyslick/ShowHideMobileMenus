jQuery(document).ready(function($) {

  // The function that shows-hides mobile menus
  // The arguments are the button that was clicked to display the menu & the menu that should be displayed
  function showHideMenu(button, menu) {
    $(button).toggleClass("clicked"); /*  make the button look like clicked by adding a class */
    $(menu).slideToggle(); /* shows or hides the menu */
  }

  // The function that wis called when the size of the window is changed
  function windowResize(button, menu) {
    var width = $(window).width(); // Get the width of the windiw and assign it to a  variable

    // If the width is higher then mobile responsive design in CSS ( in this case 650px )
    if (width > 650) {
      // Display the menus that on mobile version are set to "display: none" inline in the HTML by default
      // This is THE FIX of screen rotation
      $(menu).css("display", "block");
    } else {

      // If the screen width is smaller than mobile responsive
      // then this means that we are back to the mobile version or we are in mobile version
      // So check if the given button was clicked
      if ($(button).hasClass("clicked")) {

        // If it the button was clicked display the corresponding menu
        $(menu).css("display", "block");
      }
      // If it was not clicked hide the corresponding menu
      else {
        $(menu).css("display", "none");
      }
    }
  }

  // Naviagtion Menu
  // Get the "show hide button" of navigation menu
  // Get the "navigation menu"
  var navButton = $("#showMenuButton");
  var navMenu = $('.submenu');

  // On click of navigation button call the function "showHideMenu"
  // Arguments - the button that was clicked, the menu that should be dispalyed
  navButton.click(function() {
    showHideMenu(navButton, navMenu);
  });

  // Sidebar Menu
  // Get the "show hide button of sidebar menu"
  // Get the "sidebar menu"
  var sidebarButton = $("#showSidebarButton");
  var sidebarMenu = $('.sidebar-submenu');

  // On click of sidebar button call the function "showHideMenu"
  // Arguments - the button that was clicked, the menu that should be dispalyed
  sidebarButton.click(function() {
    showHideMenu(sidebarButton, sidebarMenu);
  });

  // Listener for changing the window size
  // When window is resized call the functions bellow ( it is the same function with different arguments - one for the navigation menu, one for the sidebar)
  // Arguments - the button that was clicked, the menu that should be dispalyed
  $(window).resize(function() {

    // Call it for the navigation menu
    windowResize(navButton, navMenu);

    // Call it for the sidebar
    windowResize(sidebarButton, sidebarMenu);
  });


});

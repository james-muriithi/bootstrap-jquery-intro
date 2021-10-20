//change button text
// $("button.btn").text("Hello world");

// change button html
// $("button.btn").html("<span class='text-success'>hello world</span>");

// add class to element
$("button.btn").addClass("my-class other-class");

// remove class
$("button.btn").removeClass("my-class");

// add id
$("button.btn").attr("id", "my-id");

// to get an element id
console.log($("button.btn").attr("id"));

// remove id
$("button.btn").attr("id", "");

// add disabled attribute
// $("button.btn").attr("disabled", "disabled");

// change css
// getElementById().style.fontSize = 12px
// just one style
// $("button.btn").css("fontSize", "30px");

// multiple styles
// $("button.btn").css({
//   fontSize: "30px",
//   color: "#ccc",
// });

// executes when the page is ready
$(function () {
  $("#register-form").on("submit", function (event) {
    event.preventDefault();

    // form validation
    // const firstName = $("input.first-name").val();

    // // add invaliud class to input
    // if (!firstName) {
    //   $("input.first-name").addClass("is-invalid");
    //   return;
    // }

    // find all inputs and loop
    let formIsValid = true;

    $("#register-form input").each(function (index, element) {
      const inputValue = $(this).val();

      if (!inputValue) {
        formIsValid = false;
        $(this).addClass("is-invalid");
      }
      
    });

    if (formIsValid) {
      // disable button
      $("button.btn").attr("disabled", "disabled").text("Loading...");

      // simulate posting data and enable
      setTimeout(function () {
        // enable the submit button
        $("button.btn").attr("disabled", false).text("Submit");
        //   reset the form
        $("#register-form")[0].reset();
      }, 3000);
    }
  });

  // remove is invalid class when user starts typing
  $("input").on("keydown", function () {
    $(this).removeClass("is-invalid");
  });
});

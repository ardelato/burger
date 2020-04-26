// Waiting until the DOM is fully loaded
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger: $(".create-form [name=burger]").val().trim(),
    };

    console.log("Making Post Request");

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("New Burger Added");
      location.reload();
    });
  });
});

console.log("LOADED BURGERS");

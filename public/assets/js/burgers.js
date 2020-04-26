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

  $(".eat_burger").on("click", function () {
    console.log("Buger ID: " + $(this).attr("data-burgerID"));

    var burgerID = {
      id: $(this).attr("data-burgerID"),
    };
    $.ajax("/api/burgers/update", {
      type: "POST",
      data: burgerID,
    }).then(function () {
      console.log("Burger Updated");
      location.reload();
    });
  });
});

console.log("LOADED BURGERS");

$(function () {
  $("#add-burger").on("submit", function (event) {
    event.preventDefault();

    let addBurger = {
      burger_name: $("#add-burger [name=burger]").val().trim()

    }
    console.log("add new burger", addBurger)

    // Send the POST requestl
    $.post("/api/burgers", addBurger, function (data) {
      console.log('burger added', data);
      // Reload the page to update burger list
      location.reload();
    })

  });

});

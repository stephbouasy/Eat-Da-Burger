$(function () {
    $(".change-bite").on("click", function (event) {
        var id = $(this).data("id");
        var newBite = $(this).data("newbite");

        var newBiteState = {
            Bite: newBite
        };

        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newBiteState
        }).then(
            function () {
                console.log("changed sleep to", newBite);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            bite: $("[name=bite]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var todevour = $(this).data("todevour");

        var devourState= {
            devour: todevour
        };
        
        $.ajax("/api/burgers"+ id, {
            type: "PUT",
            data: devourState
        }).then(function() {
            console.log("Status as "+todevour);

            location.reload();
        });
    });

    $(".newburger").on("click", function(event) {
        event.preventDefault();

        var addburger = {
            burger_name: $("#bur").val().trim(),
            devour: false
        }.then(function() {
            console.log("New burger created");

            location.reload();
        });
    });

});
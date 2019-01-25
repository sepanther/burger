// $(function() {
//     $("#burgerBtn").on("click", function() {
//         event.preventDefault();
//         var newBurger = {
//             burgerName: $("#burger").val().trim()
//         }
//         console.log(newBurger);

//             // Send the POST request.
//     $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("added new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     })

// })

$(function() {
    $(".devBtn").on("click", function() {
        burgerId = $(this).data('id');
        console.log("this is the burger ID: " + burgerId);
        update(burgerId)
    })

function update(id) {
    console.log("/api/" + id)
    $.ajax("/api/" + id, {
        type: "PUT"
    }).then(
        function() {
            console.log("devouring burger!");
            location.reload();
        }
    )
} 
})
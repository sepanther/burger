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
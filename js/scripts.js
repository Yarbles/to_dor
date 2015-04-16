var Category = {
  tasks: []
}

var Task = {
  complete: false
}

$(document).ready(function() {

  $("#add-new-category").submit(function(event) {
    event.preventDefault();
    var new_category = Object.create(Category);
    new_category.tag= $("input#new-category").val();
    $("#categories").append("<li><span class='category'>"+new_category.tag+"</li>");

    $(".category").click(function() {
      //show the add task form
      $("#add-task").hide();

      $("#add-task").show();
      $("#tasks").text("");
      $(".category").off();

      $("#category-name").text(new_category.tag);


    });
      $("#add-task").submit(function(event) {
        var new_task = Object.create(Task);
        event.preventDefault();
        new_task.tag= $("input#new-task").val();
        new_category.tasks.push(new_task);

        $("#tasks").empty();

        new_category.tasks.forEach(function(task) {
          $("#tasks").append("<li>" + task.tag + "</li>");
        });

        // $("#tasks").append("<li>"+new_task.tag +"</li>");
      });

  });




});

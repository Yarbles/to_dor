var Category = {
  tasks: []
}

var Task = {
  complete: false
}

$(document).ready(function() {
  $("form#category").submit(function(event) {
    event.preventDefault();
    var new_category = Object.create(Category);
    new_category.tag= $("input#new-category").val();
    $("#categories").append("<li>"+new_category.tag +"</li>");
  });

  $("task").submit(function() {
    var new_task = Object.create(Task);
    new_task.tag= $("input#new-task").val();
  });


});

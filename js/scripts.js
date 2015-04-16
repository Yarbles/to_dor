var Category = {
  tasks: []
}

var Task = {
  complete: false
}

$(document).ready(function() {
  $("#category").submit(function(event) {
    event.preventDefault();
    var new_category = Object.create(Category);
    new_category.tag= $("input#new-category").val();
    $("#categories").append("<li>"+new_category.tag +"</li>");
  });
  $("#add-new-task").submit(function(event) {
    event.preventDefault();
    var new_task = Object.create(Task);
    new_task.tag= $("input#new-task").val();
    $("#tasks").append("<li>"+new_task.tag +"</li>");
  });


});

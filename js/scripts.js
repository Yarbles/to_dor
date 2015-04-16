var Category = {
  tasks = []
}

var Task = {
  complete: false
}

$(document).ready(function(){
  $("#category").submit(function() {
    var new_category = Object.create(Category);
    new_category.tag= $("input#new-category").val();
  })
})

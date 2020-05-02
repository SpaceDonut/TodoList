let todos = [];

// Check off specific todods by clicking
$('ul').on('click', "li", function(){
   $(this).toggleClass("completed");
})

$("ul").on('click', "span", function (e) {
   $(this).parent().fadeOut(400, function(){
      $(this).remove();
   });
   e.stopPropagation();
});

$("input[type='text'").on("keypress", function(e){
   if(e.which === 13){
      //grabbing new todo text from input
      let todoText = $(this).val();
      todos.push(todoText);
      $(this).val("");

      $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
   }
})

$(".fa-plus").on("click", function(){
   $("input[type='text']").fadeToggle();
})

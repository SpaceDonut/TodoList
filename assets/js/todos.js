// Check off specific todods by clicking
$('li').click(function(){
   $(this).toggleClass("completed");
})

$("span").on('click', function (e) {
   $(this).parent().fadeOut(400, function(){
      $(this).remove();
   });
   e.stopPropagation();
});

$("input[type='text'").on("keypress", function(e){
   if(e.which === 13){
      //grabbing new todo text from input
      let todoText = $(this).val();
   }
})
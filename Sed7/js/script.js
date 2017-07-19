console.log("Hello");
$(".show-modal").on("click", function(event){
  event.preventDefault();
  $(".overlay").addClass("is-showing");
});

$(".modal-close").on("click", function(event){
  event.preventDefault();
  $(".overlay").removeClass("is-showing");
});

$(".overlay").on("click", function(){
  $(".overlay").removeClass("is-showing");
});

$(".modal").on("click", function(event){
  event.stopPropagation();
});

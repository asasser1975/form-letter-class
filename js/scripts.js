$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    // var verbInput= $("input#verb").val();
    // var adjectiveInput = $("input#adjective").val();


    $(".name").text(nameInput);
    $(".address").text(addressInput);
    // $(".verb").text(verbInput);
    // $(".adjective").text(adjectiveInput);


    $("#story").show();

    event.preventDefault();
  });
});

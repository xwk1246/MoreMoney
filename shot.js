$("#cost-list-nav").click(function () {
  $("#cost-list").show();
  $(".ac-list-container").hide();
});
$("#account-list-nav").click(function () {
  $("#cost-list").hide();
  $(".ac-list-container").show();
});
$("#popup-selection").click(function () {
  if (clicked == false) {
    $(".selection").show();
    $(this).text("送出");
    clicked = true;
  } else {
    $(".selection").hide();
    clicked = false;
    $(this).text("新增花費");
    local_list.push({
      date: $("#date-input").val(),
      type: $("#type-select option:selected").text(),
      value: $("#value-input").val(),
      ac: $("#ac-select option:selected").text(),
    });
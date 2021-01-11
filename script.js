var clicked = false;
$(".selection").hide();
$("#cost-list").hide();
$(".input-ac-money").hide();
if (localStorage.length == 0) {
  var local_list = new Array();
  var account1 = 0;
  var account2 = 0;
} else {
  local_list = JSON.parse(localStorage.getItem("list"));
  account1 = localStorage.getItem("ac1");
  account2 = localStorage.getItem("ac2");
}
$("#ac1").text($("#ac1").text() + account1);
$("#ac2").text($("#ac2").text() + account2);

if (local_list != null) {
  for (let i = 0; i < local_list.length; i++) {
    $("#main-table-body").append(
      "<tr>" +
        "<th scope=" +
        "row" +
        ">" +
        local_list[i].date +
        "</th>" +
        "<td>" +
        local_list[i].type +
        "</td>" +
        "<td>" +
        local_list[i].value +
        "</td>" +
        "<td>" +
        local_list[i].ac +
        "</td>"
    );
  }
}
var ac1Clicked = false;
var ac2Clicked = false;
$("#set-ac1-money").click(function () {
  if (ac1Clicked == false) {
    $("#ac1-input").show();
    $(this).text("送出");
    ac1Clicked = true;
  } else {
    account1 = $("#ac1-input").val();
    localStorage.setItem("ac1", account1);
    $("#ac1").text("餘額:" + account1);
  }
});
$("#set-ac2-money").click(function () {
  if (ac2Clicked == false) {
    $("#ac2-input").show();
    $(this).text("送出");
    ac2Clicked = true;
  } else {
    account2 = $("#ac2-input").val();
    localStorage.setItem("ac2", account2);
    $("#ac2").text("餘額:" + account2);
  }
});
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
    localStorage.setItem("list", JSON.stringify(local_list));
    $("#main-table-body").append(
      "<tr>" +
        "<th scope=" +
        "row" +
        ">" +
        $("#date-input").val() +
        "</th>" +
        "<td>" +
        $("#type-select option:selected").text() +
        "</td>" +
        "<td>" +
        $("#value-input").val() +
        "</td>" +
        "<td>" +
        $("#ac-select option:selected").text() +
        "</td>"
    );
    if ($("#ac-select option:selected").text() == "帳戶一") {
      account1 = account1 - $("#value-input").val();
      localStorage.setItem("ac1", account1);
      $("#ac1").text("餘額:" + account1);
    }
    if ($("#ac-select option:selected").text() == "帳戶二") {
      account2 = account2 - $("#value-input").val();
      localStorage.setItem("ac2", account2);
      $("#ac2").text("餘額:" + account2);
    }
  }
});

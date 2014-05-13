
$("#tv").checked(function () {
    TvShow();
});

$("#mov").checked(function () {
    TvHide();
});

$("#sndBtn").onclick(function () {
    sendBtn();
})

function TvShow(){
    $(".tvOnly").css("display", "block");
}

function TvHide() {
    $(".tvOnly").hide();
}

/*setTimeout(
  function () {
      //do something special
  }, 5000);*/

function ToggleView(num) {
    if (num == 1){
        document.getElementById("searchForm").style.display = "none";
        window.setTimeout(function () { $('.myClass').hide(); }, 2000);
        document.getElementById("requestForm").style.display = "block";
    }
    else if (num == 2){
        document.getElementById("requestForm").style.display = "none";
        document.getElementById("searchForm").style.display = "block";
    }
}

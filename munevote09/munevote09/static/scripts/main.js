//var Radio_button_01_A = document.getElementById("Radio_button_01_A");
//var Radio_button_01_B = document.getElementById("Radio_button_01_B");
//var Radio_button_02_A = document.getElementById("Radio_button_02_A");
//var Radio_button_02_B = document.getElementById("Radio_button_02_B");
//var Radio_button_03_A = document.getElementById("Radio_button_03_A");
//var Radio_button_03_B = document.getElementById("Radio_button_03_B");
//var Radio_button_04_A = document.getElementById("Radio_button_04_A");
//var Radio_button_04_B = document.getElementById("Radio_button_04_B");

//$(document).ready(function () {
//    $('#radioButton').click(function () {
//        // getter
//        var radioVal = $('input[name="radioTxt"]:checked').val();
//        alert(radioVal);
//    });

//    $('#radioButton2').click(function () {
//        // setter
//        // 선택한 부분을 세팅할 수 있다.
//        $('input[name="radioTxt"]').val(['Banana']);
//    });
//});




var jbAry = new Array();

$('#nextButton1').click(function () {
    // getter
    jbAry[0] = $('input[name="Radio_button_01"]:checked').val();
    jbAry[1] = $('input[name="Radio_button_02"]:checked').val();
    jbAry[2] = $('input[name="Radio_button_03"]:checked').val();
    jbAry[3] = $('input[name="Radio_button_04"]:checked').val();
    alert(jbAry);
});


$('#nextButton2').click(function () {
    // getter
    jbAry[4] = $('input[name="Radio_button_05"]:checked').val();
    jbAry[5] = $('input[name="Radio_button_06"]:checked').val();
    alert(jbAry);
});

$('#nextButton3').click(function () {
    // getter
    jbAry[6] = $('#Textarea_01').val();
    jbAry[7] = $('#Textarea_02').val();
    alert(jbAry);
});

$('#test').click(function () {
    var radioVal = 'hi';
    alert(radioVal);
});

function checkValue(element) {
    if (element.value == "")
        alert("내용을 입력해주세요.");
}

function clearText(txt) {
    if (txt.defaultValue == txt.value)
        txt.value = "";
}

function setChildValue(index) {
    window.location.href = "subPage.html?index=" + index;
}
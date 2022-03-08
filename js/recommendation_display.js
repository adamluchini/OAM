$(document).ready(function() {

  $("form#questions").submit(function(event) {
  var q101 = $("select#q101").val();
  var q101test = [];
      $('input[name=q101test]:checked').each(function(){
          q101test.push($(this).val());
    });
    q101test = q101test.join(" ");
  var q102 = $("select#q102").val();
  var q103 = $("select#q103").val();
  var q104 = $("select#q104").val();
  var q105 = $("select#q105").val();
  var q106 = $("select#q106").val();
  var q107 = $("select#q107").val();
  var q108 = $("select#q108").val();
  var q109 = $("select#q109").val();
  var q201 = $("select#q201").val();
  var q202 = $("select#q202").val();
  var q203 = $("select#q203").val();
  var q204 = $("select#q204").val();
  var q205 = $("select#q205").val();
  var q206 = $("select#q206").val();
  var q207 = $("select#q207").val();
  var q208 = $("select#q208").val();
  var q209 = $("select#q209").val();
  var q210 = $("select#q210").val();
  var q211 = $("select#q211").val();
  var q212 = $("select#q212").val();
  var q213 = $("select#q213").val();
  var q214 = $("select#q214").val();
  var q215 = $("select#q215").val();
  var q216 = $("select#q216").val();
  var q217 = $("select#q217").val();
  var q301 = $("select#q301").val();
  var q302 = $("select#q302").val();
  var q303 = $("select#q303").val();
  var q304 = $("select#q304").val();
  var q305 = $("select#q305").val();
  var q306 = $("select#q306").val();
  var q307 = $("select#q307").val();
  var q308 = $("select#q308").val();
  var q309 = $("select#q309").val();
  var q310 = $("select#q310").val();
  var q311 = $("select#q311").val();
  var q312 = $("select#q312").val();
  var q313 = $("select#q313").val();
  var q314 = $("select#q314").val();

var checkboxtest = 0;

if (q101test === "a101_01" || q101test === "a101_02") {
  checkboxtest ++;
}

    console.log("q101test:", (q101test));
    console.log("dropdown:", (checkboxtest));
    event.preventDefault();
   });
  });

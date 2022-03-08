$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var q101 = $("select#q101").val();
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

/* Running Variable List */
  var diy = 0;
  var dei = 0;
  var swr = 0;
  var yrblt = 0;
  var insulation = 0;
  var windows = 0;
  var etocustomer =0;
  var energy_efficiency = 0;
  var health_safety = 0;
  var pgetest = 0;
  var pactest = 0;
  var nwntest = 0;
  var hide_sliding_glass = 0;
  var ductwork = 0;

/*Big variables - Bucket customers on a larger scale. All 2009 homes will have all relevant insulation/window questions removed. */
  var hide_insulation_windows = 0;
/*Variables that do their own thing and have no impact on other variables */

/*HTML to display if multiple parameters are met */

/*Hide if question is not answered */

/*Customer interest category score*/
if (q101 === "a101_01") {
  energy_efficiency =  1
}

if (q101 === "a101_03") {
  health_safety =  1
}

/*Utility provider score*/
if (q106 === "a106_01") {
  pgetest = 1
}
if (q106 === "a106_02") {
  pactest = 1
}
if (q106 === "a106_03") {
  nwntest = 1
}

if (pgetest == 1 ){
  $("#pgetest").show();
  $("#pactest").hide();
  $("#nwntest").hide();
}

if (pactest == 1 ){
  $("#pgetest").hide();
  $("#pactest").show();
  $("#nwntest").hide();
}

if (nwntest == 1 ){
  $("#pgetest").hide();
  $("#pactest").hide();
  $("#nwntest").show();
}

/* DIY score */
  if (q105 === "a105_01") {
  diy = 2;
  }
  if (q105 === "a105_02" || q105 === "a105_03") {
  diy = 1;
  }

  if (q105 === "a105_04") {
  diy = 0 ;
  }

  if (q105 === null) {
    diy = null;
  }

/* Hides all DIY suggestions if the user says they prefer professionals. */

  if (diy == 2 ) {
  $("#diyyes").show();
  $("#diyno").hide();
  $("#diymaybe").hide();
  $("#alldiy").show();
  $("#professional_tips").hide();
  }

  if (diy == 0 ) {
  $("#diyyes").hide();
  $("#diyno").show();
  $("#diymaybe").hide();
  $("#alldiy").hide();
  $("#professional_tips").show();
  }

  if (diy == 1 ) {
  $("#diyyes").hide();
  $("#diyno").hide();
  $("#diymaybe").show();
  $("#alldiy").show();
  $("#professional_tips").hide();
  }

  if (diy == null ) {
  $("#diyyes").hide();
  $("#diyno").hide();
  $("#diymaybe").hide();
  $("#alldiy").hide();
  $("#professional_tips").hide();
  }

/* Year built score. Homes built after 2008 will have a score of 0 and the insulation and window questions are removed. */

   if (q201 === "a201_01" || q201 === "a201_02" || q201 === "a201_04") {
     hide_insulation_windows = 1;
   } else {
     hide_insulation_windows = 0;
   }

   if (hide_insulation_windows > 0) {
     $("#insulation_questions").show();
     $("#windows_questions").show();
   } else {
     $("#insulation_questions").hide();
     $("#windows_questions").hide();
     $("#insulation").hide();
     $("#diy_insulation").hide();
     $("#pro_insulation").hide();
   }
/* Windows recommendation display. Only for homes that are older than 2008 and have not re-insulated attic/wall/floor within the past 15 years.*/

  if (q208 === "a208_02") {
    hide_sliding_glass = 1;
  }

  if(hide_sliding_glass > 0){
    $("#sliding_glass_questions").hide();
  } else {
    $("#sliding_glass_questions").show();
  }

/* Insulation questions and recommendation display. Questions only display for homes that are older than 2008 and have not re-insulated attic/wall/floor within the past 15 years. All window questions will be hidden if home is newer than 2008.*/

if (q204 !== "a204_01" || q205 !== "a205_01" || q206 !== "a206_01") {
  insulation = 1;
}

  if (insulation > 0 && hide_insulation_windows > 0 && q204 != null && q205 != null && q206 != null) {
    $('#insulation').show();
  } else {
    $('#insulation').hide();
  }

if (insulation > 0 && q201 === "a201_01") {
  $("#insulation_pre_1978").show();

} else {
  $("#insulation_pre_1978").hide();
}

if (insulation > 0 && q201 === "a201_02") {
  $("#insulation_post_1978").show();
} else {
  $("#insulation_post_1978").hide();
}

if (insulation > 0 && hide_insulation_windows > 0) {
  $("#diy_insulation").show();
  $("#pro_insulation").show();
} else {
  $("#diy_insulation").hide();
  $("#pro_insulation").hide();
}

/* HVAC duct questions. Will not be asked if user indciated they have a DHP, zonal heat, fireplace, none.*/

if (q301 === "a301_03" || q301 === "a301_04" || q301 === "a301_08" || q301 === "a301_12" || q301 === "a301_13") {
  ductwork = 1;
}
if (ductwork > 0 ) {
  $('#duct_question').hide();
} else {
  $('#duct_question').show();
}

/* Final display check for insulation recommendations.*/
if (q204 == null && q205 == null && q206 == null) {
  $('#insulation').hide();
  $('#alldiy').hide();
  $('#professional_tips').hide();
}
    console.log("insulation:", (insulation));
    console.log("diy:", (diy));
    console.log("year", (q201));
    console.log("hide insulation windows:", (hide_insulation_windows));
    console.log("this is var q204:", (q204));
    console.log("this is var q211 null?:", (q206));
    event.preventDefault();
   });
  });

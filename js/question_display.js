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

/* Running Variable List. If variable is greater than 0, the element will be hidden. */
  var hide_insulation_windows = 0;
  var hide_attic_living = 0;
  var hide_sliding_glass = 0;
  var hide_ductwork = 0;
  var hide_thermostat = 0;
  var hide_secondary_heating = 0;
  var hide_secondary_cooling = 0;
  var hide_primary_cooling = 0;
  var hide_all_heating = 0;

/*Variable scores*/

/* Hide insulation and all window questions if the home is built after 2008. */
if (q201 === "a201_03") {
  hide_insulation_windows++;
}
/* Hide attic living space question if user indicates they do not have an attic to insulate. */
if (q207 === "a207_05") {
  hide_attic_living++;
}
/* Hide sliding glass door questions if user indicates they do not have any. */
if (q208 === "a208_02") {
  hide_sliding_glass++;
}
/* Hide ductwork questions if user indicates they do not have a ducted heating system. */
if (q301 === "a301_03" || q301 === "a301_04" || q301 === "a301_08" || q301 === "a301_12" || q301 === "a301_13") {
  hide_ductwork++;
}
/* Hide thermostat questions if user indicates they do not have a thermostat supported HVAC system. */
if (q301 === "a301_04" || q301 === "a301_08" || q301 === "a301_12" || q301 === "a301_13") {
  hide_thermostat++;
}
/* Hide primary and secondary heating and/or cooling system questions if user indicates they do not have secondary systems.*/
if (q303 === "a303_13") {
  hide_secondary_heating++;
}
if (q307 === "a307_01") {
  hide_secondary_cooling++;
}
if (q305 === "a305_01") {
  hide_primary_cooling++;
}

if (q301 === "a301_13") {
  hide_all_heating++;
}
/*HTML question elements to hide*/

if(hide_insulation_windows > 0) {
  $("#insulation_windows_questions").hide();
} else {
  $("#insulation_windows_questions").show();
}

if(hide_attic_living > 0 ) {
  $("#attic_question").hide();
} else {
  $("#attic_question").show();
}

if(hide_sliding_glass > 0 ) {
  $("#sliding_glass_questions").hide();
} else {
  $("#sliding_glass_questions").show();
}

if(hide_ductwork > 0 ) {
  $("#duct_questions").hide();
} else {
  $("#duct_questions").show();
}

if(hide_thermostat > 0 ) {
  $("#thermostat_questions").hide();
} else {
  $("#thermostat_questions").show();
}

if(hide_secondary_heating > 0 ) {
  $("#secondary_heating_question").hide();
} else {
  $("#secondary_heating_question").show();
}

if(hide_secondary_cooling > 0 ) {
  $("#secondary_cooling_question").hide();
} else {
  $("#secondary_cooling_question").show();
}

if(hide_primary_cooling > 0 ) {
  $("#primary_cooling_question").hide();
} else {
  $("#primary_cooling_question").show();
}

if(hide_all_heating > 0){
  $("#all_heating_questions").hide();
} else {
  $("#all_heating_questions").show();
}

    console.log("secondary heating:", (hide_secondary_heating));
    event.preventDefault();
   });
  });

$(document).ready(function() {
  $("#q201").change(function(){
    /* Question hiding logic. If certain selections are picked, the form will remove the questions as they are no longer applicable. */

    /* Hide all insulation and all window questions if the home is built after 2008. */
    if($("#q201 option:selected").val() === "a201_01" || $("#q201 option:selected").val() === "a201_02" || $("#q201 option:selected").val() === "a201_04"){
        $("#insulation_windows_questions").show();
    } else if ($("#q201 option:selected").val() === "a201_03"){
        $("#insulation_windows_questions").hide();
    }
        });

/* Hide ductwork questions if user indicates they do not have a ducted heating system. */
  $("#q301").change(function(){
    if($("#q301 option:selected").val() === "a301_03" || $("#q301 option:selected").val() === "a301_04" || $("#q301 option:selected").val() === "a301_08" || $("#q301 option:selected").val() === "a301_12" || $("#q301 option:selected").val() === "a301_13"){
        $("#duct_questions").hide();
    } else {
        $("#duct_questions").show();
    }
        });

/* Hide attic insulation question if user indicates they do not have an attic to insulate. */
  $("#q204").change(function(){
    if($("#q204 option:selected").val() === "a204_04"){
        $("#attic_question").hide();
    } else {
        $("#attic_question").show();
    }
        });

/* Hide sliding glass door questions if user indicates they do not have any. */
    $("#q208").change(function(){
      if($("#q208 option:selected").val() === "a208_02"){
          $("#sliding_glass_questions").hide();
      } else {
          $("#sliding_glass_questions").show();
      }
          });

/* Hide thermostat questions if user indicates they do not have a thermostat supported HVAC system. */
      $("#q301").change(function(){
        if($("#q301 option:selected").val() === "a301_04" || $("#q301 option:selected").val() === "a301_08" || $("#q301 option:selected").val() === "a301_12" || $("#q301 option:selected").val() === "a301_13"){
            $("#thermostat_questions").hide();
        } else {
            $("#thermostat_questions").show();
        }
            });

  /* Hide all primary heating questions (age, ductwork, thermostat) if the user indicates they do not have a primary heating system.*/
        $("#q301").change(function(){
          if($("#q301 option:selected").val() === "a301_13"){
              $("#all_heating_questions1").hide();
              $("#all_heating_questions2").hide();
          } else {
              $("#all_heating_questions1").show();
              $("#all_heating_questions2").show();
          }
              });
  /* Hide all secondary heating questions if the user indicates they do not have a secondary heating system.*/
        $("#q303").change(function(){
          if($("#q303 option:selected").val() === "a303_13"){
              $("#secondary_heating_question").hide();
          } else {
              $("#secondary_heating_question").show();
          }
              });

  /* Hide all primary and secondary cooling questions if the user does not have a cooling heating system.*/
        $("#q305").change(function(){
          if($("#q305 option:selected").val() === "a305_01"){
              $("#all_cooling_questions").hide();
          } else {
              $("#all_cooling_questions").show();
          }
              });

  /* Hide all secondary cooling questions if the user indicates they do not have a secondary heating system.*/
        $("#q307").change(function(){
          if($("#q307 option:selected").val() === "a307_01"){
              $("#secondary_cooling_question").hide();
          } else {
              $("#secondary_cooling_question").show();
          }
              });
  });

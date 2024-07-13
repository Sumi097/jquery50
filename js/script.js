
// jquery part start 
// ex 1
$("Document").ready(function(){
$('#btn_1').click(function(){
alert("wellcome");
});
});
// ex 2
$("Document").ready(function(){
    $('#btn').click(function(){
     $('#buttom1').hide();
 });
 });
 // ex 3
 $('document').ready(function(){
    $('#btn_2').on("click",function(){
        $('h6').show(1000);
    });
 });
 $('document').ready(function(){
    $('#btn_3').on('click',function(){
        $('h6').hide("slow");
    });
 });
 // ex 4
 $('document').ready(function(){
    $('#btn_4').on('click',function(){
        $('#h6one1').toggle("slow");
    });
 });

// ex 5
$('document').ready(function(){
    $('.que').on("click",function(){
        $('.ans').show("fast");
    });
 });
 // ex 5
$('document').ready(function(){
    $('#btn_5').on("click",function(){
        $('#h6one2').fadeIn("slow");
    });
 });
  // ex 6
 $('document').ready(function(){
    $('#btn_6').on("click",function(){
        $('#h6one3').fadeOut("slow");
    });
 });
// ex 7
$('document').ready(function(){
$('#btn_7').on("click",function(){
$('.img2').fadeToggle(3000);
$('.img1').fadeToggle("slow");

});
 });

// ex 8
$('document').ready(function(){
$('#btn_8').on("click",function(){
$('.img_two').fadeTo("1000", 0.9);
$('.img_one').fadeTo("3000", 0.8);
    
});
});
// ex 9
$(document).ready(function(){
$("#btn_9").click(function(){
$(".slide1").slideDown("slow");
});
});
// ex 10
$(document).ready(function(){
$("#btn_10").click(function(){
$(".slide2").slideUp("slow");
});
});
// ex 11
$(document).ready(function(){
$("#btn_11").click(function(){
$(".slide3").slideToggle("slow");
});
});
// ex 12
$(document).ready(function(){
$("#btn_12").on("click",function(){
$(".pic").animate({right: '3%'});
});
});
// ex 13
$(document).ready(function(){
$("#btn_13").click(function(){
$(".pic1").animate({   left: '250px',opacity: '0.5',});
});
});
// ex 14
$(document).ready(function(){
    $("#btn_14").click(function(){
      $(".height1").animate({
        height: 'toggle'
      });
    });
  });
// ex 15
  $(document).ready(function(){
    $("#btn_15").click(function(){
      var div = $(".height3");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '178px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
    });
  });
//   ex 16
$(document).ready(function(){
    $("#btn_16").click(function(){
      var div = $("#p_one");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '25px'}, "slow");
    });
  });
  // ex 17
$(document).ready(function(){
    $("#btn_17").click(function(){
      $(".height6").animate({ width:'toggle'} , "slow");
    });
  });
//   ex 18
$(document).ready(function(){
    $("#btn_18").click(function(){
      $("#p_two").slideDown(5000);
    });
    $("#btn_19").click(function(){
      $("#p_two").stop();
    });
  });
//   ex19
$(document).ready(function(){
$("#btn_20").click(function(){
$("#p_two2").slideToggle(5000);
});
 });
//   ex
    $(document).ready(function(){
        $("#btn_21").click(function(){
          $("#p_two21").hide("slow", function(){
            console.log("The paragraph is now hidden");
          });
        });
      });
      //   ex
      $(document).ready(function(){
        $("#btn_22").click(function(){
          $("#p_two11").hide("slow", function(){
            window.alert("The paragraph is now hidden");
          });
        });
      });
       //   ex
      $(document).ready(function(){
        $("#btn_23").click(function(){
          $("#p_two12").css("color", "blue").slideUp(2000);
          $("#p_two12").css("color", "red").slideDown(2000);
        });
      });
// ex 
$(document).ready(function(){
    $("#btn_24").click(function(){
      alert("Text: " + $("#p_two13").text());
    });
    $("#btn_25").click(function(){
      alert("HTML: " + $("#p_two13").html());
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_26").click(function(){
      alert("Value: " + $("#form1").val());
    });
  });
  // ex 

$(document).ready(function(){
  $("#btn_27").click(function(){
    $("#p_two14").text("Hello world!");
  });
});
// ex 
$(document).ready(function(){
    $("#btn_28").click(function(){
      $("#p_two15").text(function(i, origText){return "Old text: " + origText + " New text: Hello world! "; 
      });
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_29").click(function(){
      $("#p_two16").append(" <b>Appended text</b>.");
    });
  });

  //   ex 
$(document).ready(function(){
    $("#btn_30").click(function(){
      $("ol").append("<li>Stay wild, Moon child.</li>");
    });
  });
//   ex
$(document).ready(function(){
    $("#btn_31").click(function(){
      $(".img2").before("<b>Sunflower vibes only.</b>");
    });
  
  });
//   ex 
  $(document).ready(function(){
    $("#btn_32").click(function(){
      $(".img1").after("<i>Sunflower vibes only.</i>");
    });
  });
//  ex 
$(document).ready(function(){
    $("#btn_33").click(function(){
      $(".remove1").remove();
    });
  });
  //  ex 
$(document).ready(function(){
    $("#btn_34").click(function(){
      $(".empty").empty();
    });
  });

//   ex 
$(document).ready(function(){
    $("#btn_35").click(function(){
      $("p").remove(".all1");
    });
  });

//   ex
$(document).ready(function(){
  $("#btn_36").click(function(){
    $(".all11").addClass("blue");
  });
});
// ex 
$(document).ready(function(){
    $("#btn_37").click(function(){
      $(".all12").addClass("important");
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_38").click(function(){
      $("p").removeClass("blue");
    });
  });
//   ex 
  $(document).ready(function(){
    $("#btn_39").click(function(){
      $("p").removeClass("important");
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_40").click(function(){
      $(".s_one").addClass("style");
    });
  });
// ex 
$(document).ready(function(){
    $("#btn_41").click(function(){
      $(".s_one1").toggleClass("important1");
    });
  });
  // ex 
$(document).ready(function(){
    $("#btn_42").click(function(){
      $(".s_one11").toggleClass("blue1");
    });
  });
// ex 
$(document).ready(function(){
    $("#btn_43").click(function(){
      $(".s_one12").css("background-color", "yellow");
    });
  });
// ex 
$(document).ready(function(){
    $("#btn_44").click(function(){
      alert("Background color = " + $(".s_one121").css("background-color"));
    });
  });
// ex 
$(document).ready(function(){
    $("#btn_45").click(function(){
      $(".s_one124").css({"background-color": "green", "font-size": "200%"});
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_46").dblclick(function(){
      alert("The paragraph was double-clicked.");
    });
  });
//   ex 
$(document).ready(function(){
    $("#btn_47").mousedown(function(){
        $('.h_one').after("<p style='color:purple;'>Live, laugh, and soak up the sun..</p>");
      });
});
// ex 
$(document).ready(function(){
  
    $("#btn_48").mousedown(function(){
      $(this).after("<p style='color:red;'>Lorem ipsum dolor sit amet.</p>");
    });
  });
//   ex 
$(document).ready(function(){
    $(".h_one1").mouseenter(function(){
      $(".h_one1").css("background-color", "yellow");
    });
  });
  //   ex 
$(document).ready(function(){
    $(".h_one11").mouseenter(function(){
      $(".h_one11").css("font-size", "40px");
    });
    $(".h_one11").mouseleave(function(){
        $(".h_one11").css("font-size", "20px");
      });
  });
//   ex 
$(document).ready(function(){
    $("#input3").select(function(){
      alert("Text marked!");
    });
  });
  //   ex 
  $(document).ready(function(){
    $(".form11").submit(function(){
      alert("Submitted");
    });
  });
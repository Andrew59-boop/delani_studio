
  //  $("#work4 img").hover(function() {
  //    $(".work4").toggle()

  //  })

  //  $("#work3 img").hover(function() {
  //   $(".work3").toggle()

  // })
  // $("#work2 img").hover(function() {
  //   $(".work2").toggle()

  // })
  // $("#work1 img").hover(function() {
  //   $(".work1").toggle()

  // })
  // $("#work5 img").hover(function() {
  //   $(".work5").toggle()

  // })
  // $("#work6 img").hover(function() {
  //   $(".work6").toggle()

  // })
  // $("#work7 img").hover(function() {
  //   $(".work7").toggle()

  // })
  // $("#work8 img").hover(function() {
  //   $(".work8").toggle()

  // })

  $(document).ready(function(){
    $('#work4').hover(function(){
      $('#test1').fadeIn("slow");
      $("#test1").show();
    }).mouseout(function(){
      $("#test1").hide();
    });
  });
  $(document).ready(function(){
    $('#work3').hover(function(){
      $('#test2').fadeIn("slow");
      $("#test2").show();
    }).mouseout(function(){
      $("#test2").hide();
    });
  });
  $(document).ready(function(){
    $('#work2').hover(function(){
      $('#test3').fadeIn("slow");
      $("#test3").show();
    }).mouseout(function(){
      $("#test3").hide();
    });
  });
  $(document).ready(function(){
    $('#work1').hover(function(){
      $('#test4').fadeIn("slow");
      $("#test4").show();
    }).mouseout(function(){
      $("#test4").hide();
    });
  });
  $(document).ready(function(){
    $('#work5').hover(function(){
      $('#test5').fadeIn("slow");
      $("#test5").show();
    }).mouseout(function(){
      $("#test5").hide();
    });
  });
  $(document).ready(function(){
    $('#work6').hover(function(){
      $('#test6').fadeIn("slow");
      $("#test6").show();
    }).mouseout(function(){
      $("#test6").hide();
    });
  });
  $(document).ready(function(){
    $('#work7').hover(function(){
      $('#test7').fadeIn("slow");
      $("#test7").show();
    }).mouseout(function(){
      $("#test7").hide();
    });
  });
  $(document).ready(function(){
    $('#work8').hover(function(){
      $('#test8').fadeIn("slow");
      $("#test8").show();
    }).mouseout(function(){
      $("#test8").hide();
    });
  });







  $("#img1").click(function(){
    $("#design").toggle()
  })
  $("#img2").click(function(){
    $("#development").toggle()
  })
  $("#img3").click(function(){
    $("#product").toggle()
  })
  $(".submit").click(function(){
      var name= $(".name").val()
      var Email= $(".Email").val()
      var message= $(".message").val()
      if(name && Email && message){
          alert(name + "we have received your message. Thank you for reaching out to us");
      }else{
          alert('check your input');
      }
      })
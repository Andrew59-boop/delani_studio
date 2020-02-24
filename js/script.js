
    

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
(function() {
  var cnt = 1; // 現在地を示す変数
  var slideNum = $('.slide').length; //slideの数
  var radioNum = 9;

  for(var i = 2;i <= slideNum;i++){
    $('#d'+i).css('display','none');
  }
  $('.submit').css('display','none');
  $('.buttonPrevious').css('display','none');

  var validate = function(){
    var message = 'Please select an option';

  }

  // 前へボタンが押されたとき
  $('.buttonPrevious').click(function() {
    $('#d'+cnt).toggle(false);
    $('#d'+(cnt-1)).toggle(true);
    cnt--;

    if(cnt == slideNum){
      $('.buttonNext').toggle(false);
      $('.submit').toggle(true);
    }else{
      $('.buttonNext').toggle(true);
      $('.submit').toggle(false);
    }

    if(cnt == 1){
      $('.buttonPrevious').toggle(false);
    }else{
      $('.buttonPrevious').toggle(true);
    }

  });

  // 次へボタンが押されたとき
  $('.buttonNext').click(function(){
    //チェックされているラジオボタンの数を数える
   var checked_radio_count = $(".group"+cnt).find('input[type="radio"]:checked').size();
   //ラジオボタンが入っているdivの数を数える
   var radio_count = $(".group"+cnt).size();

   if(checked_radio_count == radio_count){
     $('#d'+cnt).toggle(false);
     $('#d'+(cnt+1)).toggle(true);
      cnt++;
  }else{
     $('#q1').css("background-color","#FFB6C1");

}
  if(cnt == slideNum){
    $('.buttonNext').toggle(false);
    $('.submit').toggle(true);
  }else{
    $('.buttonNext').toggle(true);
    $('.submit').toggle(false);
  }
  if(cnt == 1){
    $('.buttonPrevious').toggle(false);
  }else{
    $('.buttonPrevious').toggle(true);
  }

  });

}());

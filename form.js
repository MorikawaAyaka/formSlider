(function() {
  var cnt = 1; // 現在地を示す変数
  var slideNum = $('.slide').length; //slideの数
  var radioNum = 9;

  for (var i = 2; i <= slideNum; i++) {
    $('#d' + i).css('display', 'none');
  }
  $('.submit').css('display', 'none');
  $('.buttonPrevious').css('display', 'none');

  var validation = function() {
      for (var i = 1; i <= radioNum; i++) {
        var check = $("#q" + cnt + i).find('input[type="radio"]:checked').size();
        if (check == 0) {
          $('#q' + cnt + i).css("background-color", "#FFB6C1");
        } else {
          $('#q' + cnt + i).css("background-color", "#FFFFFF");
        }
      }
    }
    // 前へボタンが押されたとき
  $('.buttonPrevious').click(function() {
    $('#d' + cnt).toggle(false);
    $('#d' + (cnt-1)).toggle(true);
    cnt--;

    if (cnt == slideNum) {
      $('.buttonNext').toggle(false);
      $('.submit').toggle(true);
    } else {
      $('.buttonNext').toggle(true);
      $('.submit').toggle(false);
    }

    if (cnt == 1) {
      $('.buttonPrevious').toggle(false);
    } else {
      $('.buttonPrevious').toggle(true);
    }
    validation();
  });

  // 次へボタンが押されたとき
  $('.buttonNext').click(function() {
    //チェックされているラジオボタンの数を数える
    var checked_radio_count = $(".group" + cnt).find('input[type="radio"]:checked').size();
    //ラジオボタンが入っているdivの数を数える
    var radio_count = $(".group" + cnt).size();

    if (checked_radio_count == radio_count) {
      $('#d' + cnt).toggle(false);
      $('#d' + (cnt + 1)).toggle(true);
      cnt++;
    } else {
      validation();
    }
    if (cnt == slideNum) {
      $('.buttonNext').toggle(false);
      $('.submit').toggle(true);
    } else {
      $('.buttonNext').toggle(true);
      $('.submit').toggle(false);
    }
    if (cnt == 1) {
      $('.buttonPrevious').toggle(false);
    } else {
      $('.buttonPrevious').toggle(true);
    }

  });

  $('.submit').click(function(){
    var last_radio_count = $(".group" + slideNum).find('input[type="radio"]:checked').size();
    var last_radio = $(".group" + slideNum).size();

    if(last_radio_count == last_radio){
      $(this).submit();
    }else{
      $(this).off('submit');
      validation();
    }
  });

}());

(function() {
  var slideWidth = $('.slide').outerWidth(); // .slideの幅を取得して代入
  var slideNum = $('.slide').length; // .slideの数を取得して代入
  var slideSetWidth = slideWidth * slideNum; // .slideの幅×数で求めた値を代入
  $('.slideSet').css('width', slideSetWidth); // .slideSetのスタイルシートにwidth: slideSetWidthを指定

  var cnt = 0; // 現在地を示す変数

  var sliding = function() {
    // cntが0以下だったら
    if (cnt < 0) {
      cnt = 0;

    } else if (cnt >= slideNum-1) {
      cnt=slideNum-1;
    }

    $('.slideSet').stop().animate({
      left: cnt * -slideWidth
    });
  }

  // 前へボタンが押されたとき
  $('.slider-prev').click(function() {
    cnt--;
    sliding();
  });

  // 次へボタンが押されたとき
  $('.slider-next').click(function(){
    var ch_radio = $('#d'+(cnt+1)).find('input[type="radio"]:checked').size();
    var radio = $('.group'+(cnt+1)).size();

    if (ch_radio == radio) {
      document.getElementById('result'+(cnt+1)).innerHTML = "";
      cnt++;
      sliding();
    }else{
      document.getElementById('result'+(cnt+1)).innerHTML = "選択されていません";
    }

    if(cnt == slideNum-1){
      $(this).get(0).type='submit';
    }
  });

}());

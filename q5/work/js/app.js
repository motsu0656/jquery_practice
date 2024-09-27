$(function () {
  // 「.dropdwn li」クラスの要素に対して、hover（マウスオーバーとマウスアウト）イベントを設定
  $(".dropdwn li").hover(
    function () {
      // 子要素の「ul」をスライドダウンさせる
      $(this).children("ul").stop().slideDown();
    },
    function () {
      // 子要素の「ul」をスライドアップさせる
      $(this).children("ul").stop().slideUp();
    }
  );
});

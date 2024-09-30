$(function () {
  // 「.dropdwn li」クラスの要素に対して、hover（マウスオーバーとマウスアウト）イベントを設定
  $(".dropdwn li").hover(
    function () {
      // 子要素の「ul」をスライドダウンさせる
      $(this).children("ul").stop().slideDown();
    },
    // stop()を使用して、前のアニメーションを停止し、アニメーションが重複するのを防ぐ。

    function () {
      // 子要素の「ul」をスライドアップさせる
      $(this).children("ul").stop().slideUp();
    }
  );
});

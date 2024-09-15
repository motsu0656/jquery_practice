$(document).ready(function () { // ドキュメントが完全に読み込まれたら処理を実行


  $(function () {
    // ドキュメントが完全に読み込まれた後に、この中の処理を実行します。

    $("#q1").css("color", "green");
    // ID "q1" の要素の文字色を緑色に変更します。

    $("#q2").on("click", function () {
      $(this).css("background", "pink");
    });
    // ID "q2" の要素がクリックされたとき、その要素の背景色をピンクに変更します。

    $("#q3").on("click", function () {
      $(this).fadeOut(3000);
    });
    // ID "q3" の要素がクリックされたとき、3秒かけてフェードアウトさせます。

    $("#q4").on("click", function () {
      $(this).addClass("large");
    });
    // ID "q4" の要素がクリックされたとき、その要素に "large" クラスを追加します。

    $("#q5").on("click", function () {
      $(this).prepend("DOMの中の前")
        .append("DOMの中の後")
        .before("DOMの前")
        .after("DOMの後");
    });
    // ID "q5" の要素がクリックされたとき、次の操作を行います：
    // - 要素内の最初に「DOMの中の前」を追加
    // - 要素内の最後に「DOMの中の後」を追加
    // - 要素の前に「DOMの前」を追加
    // - 要素の後に「DOMの後」を追加

    $("#q6").on("click", function () {
      $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2000);
    });
    // ID "q6" の要素がクリックされたとき、要素の margin-top と margin-left を100pxにし、2秒かけてアニメーションさせます。

    $("#q7").on("click", function () {
      console.log(this);
    });
    // ID "q7" の要素がクリックされたとき、その要素（this）をコンソールに出力します。

    $("#q8").on({
      mouseenter: function () {
        $(this).addClass("large");
      },
      mouseleave: function () {
        $(this).removeClass("large");
      }
    });
    // ID "q8" の要素にマウスが乗ったとき（mouseenter）、"large" クラスを追加し、
    // マウスが離れたとき（mouseleave）に "large" クラスを削除します。

    $("#q9 li").on("click", function () {
      var index = $(this).index();
      alert(index);
    });
    // ID "q9" のリスト項目がクリックされたとき、その項目のインデックスをアラートで表示します。

    $("#q10 li").on("click", function () {
      var index = $(this).index();
      console.log($("#q11 li").eq(index));
      $("#q11 li").eq(index).addClass("large-text");
    });
    // ID "q10" のリスト項目がクリックされたとき、その項目のインデックスを取得し、
    // 対応する ID "q11" のリスト項目に "large-text" クラスを追加します。
  });
});
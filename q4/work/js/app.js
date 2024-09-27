$(function () {
  // 「.nav li」クラスの要素がクリックされたときの処理
  $(".nav li").on("click", function () {
    // クリックされたリスト項目のインデックスを取得
    let index = $(".nav li").index(this);

    // 「.description li」のすべての要素に「is-hidden」クラスを追加して非表示にする
    $(".description li").addClass("is-hidden");

    // インデックス「index」に対応する「.description li」要素から「is-hidden」クラスを削除して表示する
    $(".description li").eq(index).removeClass("is-hidden");
  });
});

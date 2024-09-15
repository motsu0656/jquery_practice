var $jscomp = $jscomp || {};
// もし $jscomp が未定義なら、空のオブジェクトを作成して代入。
// これは名前空間を作成するためのもので、難読化の一環です。

$jscomp.scope = {};
// $jscomp に scope プロパティを追加し、空のオブジェクトを代入。
// これも難読化の一部です。

$(function () {
  // ドキュメントが完全に読み込まれたときに、この関数内の処理を実行します。

  $(".nav li").on("click", function () {
    // .nav クラスの li 要素がクリックされたときに、次の処理を実行します。

    var a = $(".nav li").index(this);
    // クリックされた li 要素のインデックス（位置）を変数 a に代入します。

    $(".description li").addClass("is-hidden");
    // .description クラス内のすべての li 要素に "is-hidden" クラスを追加し、非表示にします。

    $(".description li").eq(a).removeClass("is-hidden");
    // インデックス a の位置にある .description クラスの li 要素から "is-hidden" クラスを削除し、表示します。
  });
});

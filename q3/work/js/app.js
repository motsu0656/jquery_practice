var $jscomp = $jscomp || {};
// もし $jscomp が未定義なら、空のオブジェクトを作成して代入。
// これにより名前空間を作成し、コードの難読化を目的としています。

$jscomp.scope = {};
// $jscomp に scope というプロパティを追加し、空のオブジェクトを代入。
// 難読化の一部です。

$(function () {
  // ドキュメントが完全に読み込まれたときに、この関数内の処理を実行します。

  $(".drawer_button").on("click", function () {
    // .drawer_button クラスの要素がクリックされたときに、次の処理を行います。

    $(this).toggleClass("active");
    // クリックされた .drawer_button 要素に "active" クラスをトグル（追加/削除）します。

    $(".drawer_bg").fadeToggle();
    // .drawer_bg クラスの要素をフェードインまたはフェードアウトでトグル表示します。

    $("nav").toggleClass("open");
    // <nav> 要素に "open" クラスをトグルします。
  });

  $(".drawer_bg").on("click", function () {
    // .drawer_bg クラスの要素がクリックされたときに、次の処理を行います。

    $(this).hide();
    // クリックされた .drawer_bg 要素を非表示にします。

    $(".drawer_button").removeClass("active");
    // .drawer_button 要素から "active" クラスを削除します。

    $("nav").removeClass("open");
    // <nav> 要素から "open" クラスを削除します。
  });
});

var $jscomp = $jscomp || {}; // $jscomp という変数が未定義の場合、空のオブジェクトを代入。これにより、名前空間が作られる。
$jscomp.scope = {}; // $jscomp に scope というプロパティを追加し、空のオブジェクトを代入。これは主にコードを難読化するための措置。

$(function () { // ドキュメントが完全に読み込まれたときに、この関数内の処理を実行する
  $(".modal_open_button").on("click", function () { // .modal_open_button クラスが付いた要素がクリックされたときに、次の関数を実行
    $(".modal_win").fadeIn(); // .modal_win クラスが付いた要素をフェードインで表示する（徐々に表示）
  });

  $(".modal_close_button").on("click", function () { // .modal_close_button クラスが付いた要素がクリックされたときに、次の関数を実行
    $(".modal_win").fadeOut(); // .modal_win クラスが付いた要素をフェードアウトで非表示にする（徐々に消える）
  });
});

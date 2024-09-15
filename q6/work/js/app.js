var $jscomp = $jscomp || {};
// もし $jscomp が未定義の場合、空のオブジェクトを代入します。これは名前空間を作成するためのコードで、難読化の一部です。

$jscomp.scope = {};
// $jscomp に scope プロパティを追加し、空のオブジェクトを代入します。これも難読化の一部です。

$(function () {
  // ドキュメントが完全に読み込まれたときに、この中の処理を実行します。

  $(".select-box").on("change", function () {
    // .select-box クラスの要素に対して「change」イベントを監視します。ユーザーがドロップダウンを変更したときに処理が実行されます。

    var b = $(this).val(), c = $(".food-list li");
    // ドロップダウンで選択された値を変数 b に取得します。また、.food-list クラスのすべての li 要素を変数 c に取得します。

    "all" === b ? c.show() : $.each(c, function (e, a) {
      // もし選択された値 b が "all" なら、すべての food-list の li 要素を表示します。
      // それ以外の場合は、.food-list の各 li 要素に対して、次の処理を実行します。

      var d = $(a).data("category-type");
      // 各 li 要素の "data-category-type" 属性の値を変数 d に取得します。

      b === d ? $(a).show() : $(a).hide();
      // 選択された値 b と、li 要素の "data-category-type" の値 d が一致する場合、その li 要素を表示します。
      // 一致しない場合、その li 要素を非表示にします。
    });
  });
});

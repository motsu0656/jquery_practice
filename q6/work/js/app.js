$(function () {
  // 「.select-box」クラスのセレクトボックスに「change」イベントを設定
  $(".select-box").on("change", function () {
    // 選択された値を変数selectedValueに取得（再代入が発生しないためconstを使用）
    const selectedValue = $(this).val();

    // 「.food-list li」要素（リスト項目）をすべて取得（再代入が発生しないためconstを使用）
    const listItems = $(".food-list li");

    // 選択された値が「all」の場合、すべてのリスト項目を表示
    if (selectedValue === "all") {
      listItems.show();
    } else {
      // 各リスト項目を調べ、データ属性「data-category-type」と選択された値を比較
      listItems.each(function () {
        // リスト項目の「data-category-type」属性を取得（再代入が発生しないためconstを使用）
        const categoryType = $(this).data("category-type");

        // 選択された値が一致するリスト項目は表示し、一致しないものは非表示
        if (selectedValue === categoryType) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
});

// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function () {

  // 「.select-box」クラスのセレクトボックスに「change」イベントリスナーを設定
  document.querySelector('.select-box').addEventListener('change', function () {

    // 選択された値を変数bに取得
    var b = this.value;

    // 「.food-list li」要素（リスト項目）をすべて取得
    var c = document.querySelectorAll('.food-list li');

    // 選択された値が「all」の場合、すべてのリスト項目を表示
    if (b === "all") {
      c.forEach(function (item) {
        item.style.display = "list-item"; // 全て表示する
      });
    } else {
      // 各リスト項目を調べ、データ属性「data-category-type」と選択された値を比較
      c.forEach(function (item) {
        var d = item.getAttribute('data-category-type');

        // 選択された値が一致するリスト項目は表示し、一致しないものは非表示
        if (b === d) {
          item.style.display = "list-item"; // 表示する
        } else {
          item.style.display = "none"; // 非表示にする
        }
      });
    }
  });
});

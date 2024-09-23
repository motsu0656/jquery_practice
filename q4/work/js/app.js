// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function() {

  // 「.nav li」クラスの要素がクリックされたときの処理
  document.querySelectorAll('.nav li').forEach(function(navItem, index) {
      navItem.addEventListener('click', function() {
          // クリックされたリスト項目のインデックスを取得
          var a = index;

          // 「.description li」のすべての要素に「is-hidden」クラスを追加して非表示にする
          document.querySelectorAll('.description li').forEach(function(descItem) {
              descItem.classList.add('is-hidden');
          });

          // インデックス「a」に対応する「.description li」要素から「is-hidden」クラスを削除して表示する
          document.querySelectorAll('.description li')[a].classList.remove('is-hidden');
      });
  });

});

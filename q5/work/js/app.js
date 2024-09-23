// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function () {

  // 「.dropdwn li」クラスの要素に対して、hover（マウスオーバーとマウスアウト）イベントを設定
  document.querySelectorAll('.dropdwn li').forEach(function (listItem) {

    // マウスがリスト項目の上に乗ったときの処理
    listItem.addEventListener('mouseenter', function () {
      // 子要素の「ul」をスライドダウンさせる
      let dropdownMenu = listItem.querySelector('ul');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'block'; // 表示を「block」に
        dropdownMenu.style.height = 0; // 高さを0に設定（スライドインの準備）

        let fullHeight = dropdownMenu.scrollHeight; // 要素のフルの高さを取得

        let slideDownEffect = setInterval(function () {
          let currentHeight = parseFloat(dropdownMenu.style.height);
          if (currentHeight < fullHeight) {
            dropdownMenu.style.height = (currentHeight + 5) + 'px';
          } else {
            clearInterval(slideDownEffect); // 目標高さに到達したら終了
            dropdownMenu.style.height = ''; // 高さを初期化
          }
        }, 10);  // スライドダウンの速度を調整
      }
    });

    // マウスがリスト項目から離れたときの処理
    listItem.addEventListener('mouseleave', function () {
      // 子要素の「ul」をスライドアップさせる
      let dropdownMenu = listItem.querySelector('ul');
      if (dropdownMenu) {
        let fullHeight = dropdownMenu.scrollHeight; // 現在のフルの高さを取得
        dropdownMenu.style.height = fullHeight + 'px'; // スライドアップの開始準備

        let slideUpEffect = setInterval(function () {
          let currentHeight = parseFloat(dropdownMenu.style.height);
          if (currentHeight > 0) {
            dropdownMenu.style.height = (currentHeight - 5) + 'px';
          } else {
            clearInterval(slideUpEffect); // 高さが0になったら終了
            dropdownMenu.style.display = 'none'; // 完全に非表示にする
          }
        }, 10);  // スライドアップの速度を調整
      }
    });

  });
});

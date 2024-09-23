// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function () {

  // 「.modal_open_button」クラスの要素がクリックされたときの処理
  document.querySelectorAll('.modal_open_button').forEach(function (button) {
    button.addEventListener('click', function () {
      // 「.modal_win」クラスの要素をフェードインさせる（表示させる）
      document.querySelectorAll('.modal_win').forEach(function (modal) {
        modal.style.display = 'block';
        modal.style.opacity = 0;
        let fadeInEffect = setInterval(function () {
          if (modal.style.opacity < 1) {
            modal.style.opacity = parseFloat(modal.style.opacity) + 0.1;
          } else {
            clearInterval(fadeInEffect);
          }
        }, 30);  // フェードインの速度を調整
      });
    });
  });

  // 「.modal_close_button」クラスの要素がクリックされたときの処理
  document.querySelectorAll('.modal_close_button').forEach(function (button) {
    button.addEventListener('click', function () {
      // 「.modal_win」クラスの要素をフェードアウトさせる（非表示にする）
      document.querySelectorAll('.modal_win').forEach(function (modal) {
        let fadeOutEffect = setInterval(function () {
          if (modal.style.opacity > 0) {
            modal.style.opacity = parseFloat(modal.style.opacity) - 0.1;
          } else {
            clearInterval(fadeOutEffect);
            modal.style.display = 'none';
          }
        }, 30);  // フェードアウトの速度を調整
      });
    });
  });
});

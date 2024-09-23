// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function () {

  // 「.drawer_button」クラスの要素がクリックされたときの処理
  document.querySelectorAll('.drawer_button').forEach(function (button) {
    button.addEventListener('click', function () {
      // クリックされた「.drawer_button」に「active」クラスをトグル（追加/削除）する
      button.classList.toggle('active');

      // 「.drawer_bg」クラスの要素をフェードイン/フェードアウト（表示/非表示）させる
      document.querySelectorAll('.drawer_bg').forEach(function (bg) {
        if (bg.style.display === 'none' || bg.style.display === '') {
          bg.style.display = 'block';
          bg.style.opacity = 0;
          let fadeInEffect = setInterval(function () {
            if (bg.style.opacity < 1) {
              bg.style.opacity = parseFloat(bg.style.opacity) + 0.1;
            } else {
              clearInterval(fadeInEffect);
            }
          }, 30);  // フェードインの速度を調整
        } else {
          let fadeOutEffect = setInterval(function () {
            if (bg.style.opacity > 0) {
              bg.style.opacity = parseFloat(bg.style.opacity) - 0.1;
            } else {
              clearInterval(fadeOutEffect);
              bg.style.display = 'none';
            }
          }, 30);  // フェードアウトの速度を調整
        }
      });

      // 「nav」タグに「open」クラスをトグル（追加/削除）する
      document.querySelector('nav').classList.toggle('open');
    });
  });

  // 「.drawer_bg」クラスの背景がクリックされたときの処理
  document.querySelectorAll('.drawer_bg').forEach(function (bg) {
    bg.addEventListener('click', function () {
      // クリックされた「.drawer_bg」を非表示にする
      bg.style.opacity = 1;
      let fadeOutEffect = setInterval(function () {
        if (bg.style.opacity > 0) {
          bg.style.opacity = parseFloat(bg.style.opacity) - 0.1;
        } else {
          clearInterval(fadeOutEffect);
          bg.style.display = 'none';
        }
      }, 30);  // フェードアウトの速度を調整

      // 「.drawer_button」から「active」クラスを削除する
      document.querySelectorAll('.drawer_button').forEach(function (button) {
        button.classList.remove('active');
      });

      // 「nav」タグから「open」クラスを削除する
      document.querySelector('nav').classList.remove('open');
    });
  });
});

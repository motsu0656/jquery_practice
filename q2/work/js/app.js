$(function () {
  // モーダルを開くボタンがクリックされたとき
  $(".modal_open_button").on("click", function () {
    $(".modal_win").fadeIn();  // モーダルウィンドウをフェードイン（表示）
  });

  // モーダルを閉じるボタンがクリックされたとき
  $(".modal_close_button").on("click", function () {
    $(".modal_win").fadeOut();  // モーダルウィンドウをフェードアウト（非表示）
  });
});

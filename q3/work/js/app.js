$(function () {
  // 「.drawer_button」クラスの要素がクリックされたときの処理
  $(".drawer_button").on("click", function () {
    // クリックされた「.drawer_button」に「active」クラスをトグル（追加/削除）
    $(this).toggleClass("active");

    // 「.drawer_bg」クラスの要素をフェードイン/フェードアウト（表示/非表示）
    $(".drawer_bg").fadeToggle();

    // 「nav」タグに「open」クラスをトグル（追加/削除）
    $("nav").toggleClass("open");
  });

  // 「.drawer_bg」クラスの背景がクリックされたときの処理
  $(".drawer_bg").on("click", function () {
    // クリックされた「.drawer_bg」を非表示にする
    $(this).hide();

    // 「.drawer_button」から「active」クラスを削除
    $(".drawer_button").removeClass("active");

    // 「nav」タグから「open」クラスを削除
    $("nav").removeClass("open");
  });
});

$(function () {
  // Q1: 読み込み時に文字の色を緑に変更
  $("#q1").css("color", "green");

  // Q2: クリックしてボタンの背景色をピンクに変更
  $("#q2").on("click", function () {
    $(this).css("background-color", "pink");
  });

  // Q3: クリックして3秒かけてフェードアウト
  $("#q3").on("click", function () {
    $(this).fadeOut(3000);
  });

  // Q4: クリックしてサイズ変更
  $("#q4").on("click", function () {
    $(this).addClass("large");
  });

  // Q5: クリックしてDOMの挿入
  $("#q5").on("click", function () {
    $(this).prepend("DOMの中の前").append("DOMの中の後");
    $(this).before("DOMの前").after("DOMの後");
  });

  // Q6: クリックしてボタンを2秒かけて移動
  $("#q6").on("click", function () {
    $(this).animate({
      marginTop: "100px",
      marginLeft: "100px"
    }, 2000);
  });

  // Q7: クリックしてid="q7"のノードをコンソールで表示
  $("#q7").on("click", function () {
    console.log(this);
  });

  // Q8: ホバー時にサイズ変更
  $("#q8").on({
    mouseenter: function () {
      $(this).addClass("large");
    },
    mouseleave: function () {
      $(this).removeClass("large");
    }
  });

  // Q9: クリックして配列のインデックスをアラート表示
  $("#q9 li").on("click", function () {
    const itemIndex = $(this).index();
    alert(itemIndex);
  });

  // Q10: Q10のアイテムをクリックしてQ11の対応するアイテムを操作
  $("#q10 li").on("click", function () {
    const clickedItemIndex = $(this).index();
    const correspondingListItem = $("#q11 li").eq(clickedItemIndex);
    console.log(correspondingListItem);
    correspondingListItem.addClass("large-text");
  });
});

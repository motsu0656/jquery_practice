// 変数$jscompをグローバルスコープに定義、もしすでに存在していなければ空オブジェクトを代入
var $jscomp = $jscomp || {};
// スコープ管理用に空オブジェクトを作成
$jscomp.scope = {};
// テンプレートタグの最初の引数を作成し、rawプロパティを設定
$jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a };
// テンプレートタグの最初の引数にrawプロパティを設定し、別の引数からも生の値を設定
$jscomp.createTemplateTagFirstArgWithRaw = function (a, d) { a.raw = d; return a };

// ページが読み込まれたときに実行
$(function () {
  // 検索結果を表示する関数aを定義
  function a(e) {
    // 既存のメッセージを削除
    $(".message").remove();
    var b;
    // e[0].itemsが存在し、その長さが1以上なら
    0 < (null == (b = e[0].items) ? void 0 : b.length) ?
      // 検索結果アイテムごとに処理を行う
      $.each(e[0].items, function (h, c) {
        // 各アイテムの情報をHTMLリスト形式で構築し、タイトル、作者、出版社の情報を表示
        var g = '<li class="lists-item"><div class="list-inner"><p>\u30bf\u30a4\u30c8\u30eb\uff1a' +
          ((c.title ? c.title : "\u30bf\u30a4\u30c8\u30eb\u4e0d\u660e") + "</p><p>\u4f5c\u8005\uff1a") +
          ((c["dc:creator"] ? c["dc:creator"] : "\u4f5c\u8005\u4e0d\u660e") + "</p><p>\u51fa\u7248\u793e\uff1a") +
          ((c["dc:publisher"] ? c["dc:publisher"][0] : "\u51fa\u7248\u793e\u4e0d\u660e") + '</p><a href="') +
          (c.link["@id"] + '" target="_blank">\u66f8\u7c4d\u60c5\u5831</a></div></li>');
        // リストの最初に結果を挿入
        $(".lists").prepend(g);
      })
      // 検索結果がない場合のエラーメッセージを表示
      : $(".lists").before('<div class="message">\u691c\u7d22\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u5225\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u691c\u7d22\u3057\u3066\u4e0b\u3055\u3044\u3002</div>');
  }

  // ページ番号と前回の検索キーワードを管理
  var d = 1, f = "";

  // 検索ボタンがクリックされたときのイベント
  $(".search-btn").on("click", function () {
    // 入力された検索キーワードを取得
    var e = $("#search-input").val();
    // 前回のキーワードと異なる場合は、リセットして新しい検索を開始
    e !== f ? (d = 1, $(".lists").empty(), f = e) : d++;
    // AJAXリクエストで検索APIを呼び出し、結果を取得
    $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" +
        e + "&format=json&p=" + d + "&count=20",
      method: "GET"
    })
      // 検索結果が成功した場合、結果を表示する
      .done(function (b) { a(b["@graph"]) })
      // 検索に失敗した場合、エラーメッセージを表示
      .fail(function (b) {
        // 検索結果リストを空にし、メッセージも削除
        $(".lists").empty();
        $(".message").remove();
        // ステータスに応じたエラーメッセージを表示
        0 === b.status ?
          $(".lists").before('<div class="message">\u6b63\u5e38\u306b\u901a\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306e\u63a5\u7d9a\u306e\u78ba\u8a8d\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002</div>')
          : 400 === b.status ?
            $(".lists").before('<div class="message">\u691c\u7d22\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002<br>1\u6587\u5b57\u4ee5\u4e0a\u3067\u691c\u7d22\u3057\u3066\u4e0b\u3055\u3044\u3002</div>')
            : $(".lists").before('<div class="message">\u4e88\u671f\u305b\u306c\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u307e\u3057\u305f\u3002<br>\u518d\u8aad\u307f\u8fbc\u307f\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002</div>');
      });
  });

  // リセットボタンがクリックされた時、検索結果や入力を初期化
  $(".reset-btn").on("click", function () {
    d = 1;
    f = "";
    // 検索結果リストを空にし、メッセージを削除
    $(".lists").empty();
    $(".message").remove();
    // 検索フィールドをクリア
    $("#search-input").val("");
  });
});

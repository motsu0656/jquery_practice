// 変数$jscompをグローバルスコープで定義、もしすでに存在していなければ空オブジェクトを代入
var $jscomp = $jscomp || {};
// スコープ管理用に空オブジェクトを作成
$jscomp.scope = {};
// テンプレートタグの最初の引数を作成、渡された引数にrawプロパティを設定
$jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a };
// テンプレートタグの最初の引数にrawプロパティを設定、別の引数から生の値も設定
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) { a.raw = b; return a };

// ページが読み込まれた時に実行
$(function () {
  // .btn__submitボタンがクリックされた時にイベントを処理
  $(".btn__submit").on("click", function () {
    // 「名前」という文字列をコンソールに表示
    console.log("\u540d\u5b57");
    // フォームの#family__nameフィールドに入力された姓を取得して表示
    console.log($("#family__name").val());
    // 「名前」という文字列をコンソールに表示
    console.log("\u540d\u524d");
    // フォームの#given__nameフィールドに入力された名を取得して表示
    console.log($("#given__name").val());
    // 「生年月日」という文字列をコンソールに表示
    console.log("\u751f\u5e74\u6708\u65e5");
    // 年月日の各フィールドから選択された値を取得し、"年", "月", "日"とともに表示
    console.log($(".year").val() + "\u5e74" + $(".month").val() + "\u6708" + $(".day").val() + "\u65e5");
    // 「性別」という文字列をコンソールに表示
    console.log("\u6027\u5225");
    // チェックされた性別の値を取得して表示
    console.log($('[name="gender"]:checked').val());
    // 「職業」という文字列をコンソールに表示
    console.log("\u8077\u696d");
    // occupationクラスのフィールドに入力された職業を取得して表示
    console.log($(".occupation").val());
    // 「アカウント名」という文字列をコンソールに表示
    console.log("\u30a2\u30ab\u30a6\u30f3\u30c8\u540d");
    // フォームの#account__nameフィールドに入力されたアカウント名を取得して表示
    console.log($("#account__name").val());
    // 「メールアドレス」という文字列をコンソールに表示
    console.log("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9");
    // フォームの#emailフィールドに入力されたメールアドレスを取得して表示
    console.log($("#email").val());
    // 「パスワード」という文字列をコンソールに表示
    console.log("\u30d1\u30b9\u30ef\u30fc\u30c9");
    // フォームの#passwordフィールドに入力されたパスワードを取得して表示
    console.log($("#password").val());
    // 「確認用パスワード」という文字列をコンソールに表示
    console.log("\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9");
    // フォームの#duplication__passwordフィールドに入力された確認用パスワードを取得して表示
    console.log($("#duplication__password").val());
    // 「住所」という文字列をコンソールに表示
    console.log("\u4f4f\u6240");
    // フォームの#addressフィールドに入力された住所を取得して表示
    console.log($("#address").val());
    // 「電話番号」という文字列をコンソールに表示
    console.log("\u96fb\u8a71\u756a\u53f7");
    // フォームの#telフィールドに入力された電話番号を取得して表示
    console.log($("#tel").val());
    // 「購読情報」という文字列をコンソールに表示
    console.log("\u8cfc\u8aad\u60c5\u5831");
    // 選択されている購読情報の値を取得して表示
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val())
    });
  });
});

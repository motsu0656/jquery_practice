$(function () {
  // .btn__submit クラスのボタンがクリックされたときの処理
  $(".btn__submit").on("click", function () {
    // "名前"という固定テキストをコンソールに表示
    console.log("名前");
    // #family__name の入力値（名字）をコンソールに表示
    console.log($("#family__name").val());

    // "名"という固定テキストをコンソールに表示
    console.log("名");
    // #given__name の入力値（名前）をコンソールに表示
    console.log($("#given__name").val());

    // "生年月日"という固定テキストをコンソールに表示
    console.log("生年月日");

    // .year, .month, .day からそれぞれの入力値（年、月、日）を取得し、連結してコンソールに表示
    const birthYear = $(".year").val();  // 生年を取得
    const birthMonth = $(".month").val();  // 生月を取得
    const birthDay = $(".day").val();  // 生日を取得
    console.log(`${birthYear}年${birthMonth}月${birthDay}日`);

    // "性別"という固定テキストをコンソールに表示
    console.log("性別");
    // 性別のラジオボタンで選択された値を取得し、コンソールに表示
    const selectedGender = $('[name="gender"]:checked').val();
    if (selectedGender) {
      console.log(selectedGender);
    }

    // "職業"という固定テキストをコンソールに表示
    console.log("職業");
    // .occupation から選択された職業をコンソールに表示
    console.log($(".occupation").val());

    // "アカウント名"という固定テキストをコンソールに表示
    console.log("アカウント名");
    // #account__name の入力値をコンソールに表示
    console.log($("#account__name").val());

    // "メールアドレス"という固定テキストをコンソールに表示
    console.log("メールアドレス");
    // #email の入力値をコンソールに表示
    console.log($("#email").val());

    // "パスワード"という固定テキストをコンソールに表示
    console.log("パスワード");
    // #password の入力値をコンソールに表示
    console.log($("#password").val());

    // "確認用パスワード"という固定テキストをコンソールに表示
    console.log("確認用パスワード");
    // #duplication__password の入力値をコンソールに表示
    console.log($("#duplication__password").val());

    // "住所"という固定テキストをコンソールに表示
    console.log("住所");
    // #address の入力値をコンソールに表示
    console.log($("#address").val());

    // "電話番号"という固定テキストをコンソールに表示
    console.log("電話番号");
    // #tel の入力値をコンソールに表示
    console.log($("#tel").val());

    // "購読情報"という固定テキストをコンソールに表示
    console.log("購読情報");
    // 購読情報のチェックボックスで選択された項目の値を1つずつ取得し、コンソールに表示
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });
  });
});

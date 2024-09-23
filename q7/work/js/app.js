// DOMの読み込みが完了したら処理を開始
document.addEventListener('DOMContentLoaded', function() {

  // 「.btn__submit」クラスのボタンがクリックされたときの処理
  document.querySelector('.btn__submit').addEventListener('click', function() {

      // 「名前」の固定テキストをコンソールに表示
      console.log("名前");

      // 「#family__name」の入力値（名字）をコンソールに表示
      console.log(document.querySelector('#family__name').value);

      // 「名前」の固定テキストをコンソールに表示
      console.log("名");

      // 「#given__name」の入力値（名前）をコンソールに表示
      console.log(document.querySelector('#given__name').value);

      // 「生年月日」の固定テキストをコンソールに表示
      console.log("生年月日");

      // 「.year」「.month」「.day」の値を連結してコンソールに表示
      let year = document.querySelector('.year').value;
      let month = document.querySelector('.month').value;
      let day = document.querySelector('.day').value;
      console.log(year + "年" + month + "月" + day + "日");

      // 「性別」の固定テキストをコンソールに表示
      console.log("性別");

      // 選択された性別の値をコンソールに表示（ラジオボタン）
      let gender = document.querySelector('[name="gender"]:checked');
      if (gender) {
          console.log(gender.value);
      }

      // 「職業」の固定テキストをコンソールに表示
      console.log("職業");

      // 「.occupation」の選択値をコンソールに表示
      console.log(document.querySelector('.occupation').value);

      // 「アカウント名」の固定テキストをコンソールに表示
      console.log("アカウント名");

      // 「#account__name」の入力値をコンソールに表示
      console.log(document.querySelector('#account__name').value);

      // 「メールアドレス」の固定テキストをコンソールに表示
      console.log("メールアドレス");

      // 「#email」の入力値をコンソールに表示
      console.log(document.querySelector('#email').value);

      // 「パスワード」の固定テキストをコンソールに表示
      console.log("パスワード");

      // 「#password」の入力値をコンソールに表示
      console.log(document.querySelector('#password').value);

      // 「確認用パスワード」の固定テキストをコンソールに表示
      console.log("確認用パスワード");

      // 「#duplication__password」の入力値をコンソールに表示
      console.log(document.querySelector('#duplication__password').value);

      // 「住所」の固定テキストをコンソールに表示
      console.log("住所");

      // 「#address」の入力値をコンソールに表示
      console.log(document.querySelector('#address').value);

      // 「電話番号」の固定テキストをコンソールに表示
      console.log("電話番号");

      // 「#tel」の入力値をコンソールに表示
      console.log(document.querySelector('#tel').value);

      // 「購読情報」の固定テキストをコンソールに表示
      console.log("購読情報");

      // 購読情報のチェックボックスで選択されたものをすべてコンソールに表示
      document.querySelectorAll('[name="subscription"]:checked').forEach(function(subscription) {
          console.log(subscription.value);
      });

  });

});

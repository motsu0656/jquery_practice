$(function () {
  // 共通のメッセージ削除処理を関数化
  function removeMessages() {
    // .message クラスの要素をすべて削除
    $(".message").remove();
  }

  // 検索結果を処理する関数 processSearchResults
  function processSearchResults(responseData) {
    // 既存のメッセージを削除
    removeMessages();

    // 検索結果のアイテムを取得
    const items = responseData[0].items;

    // 検索結果が存在するか確認
    if (items && items.length > 0) {
      // 検索結果がある場合、各アイテムをリストに追加
      items.forEach(function (book) {
        // タイトルを取得（存在しない場合は "タイトル不明"）
        const title = book.title ? book.title : "タイトル不明";
        // 作者を取得（存在しない場合は "作者不明"）
        const creator = book["dc:creator"] ? book["dc:creator"] : "作者不明";
        // 出版社を取得（存在しない場合は "出版社不明"）
        const publisher = book["dc:publisher"] && book["dc:publisher"][0] ? book["dc:publisher"][0] : "出版社不明";
        // 書籍のリンクを取得
        const link = book.link["@id"];

        // 新しいリストアイテムのHTMLを作成
        const listItem = `
          <li class="lists-item">
              <div class="list-inner">
                  <p>タイトル：${title}</p>
                  <p>作者：${creator}</p>
                  <p>出版社：${publisher}</p>
                  <a href="${link}" target="_blank">書籍情報</a>
              </div>
          </li>
        `;
        // リストの先頭にリストアイテムを追加
        $(".lists").prepend(listItem);
      });
    } else {
      // 検索結果がない場合、メッセージを表示
      const noResultMessage = `
        <div class="message">
            検索結果が見つかりませんでした。<br>
            別のキーワードで検索してください。
        </div>
      `;
      // リストの前にメッセージを表示
      $(".lists").before(noResultMessage);
    }
  }

  // エラー時の処理を行う関数 handleError
  function handleError(error) {
    // リストを空にする
    $(".lists").empty();
    // 既存のメッセージを削除
    removeMessages();

    // エラーメッセージを生成
    let errorMessage = "";
    if (error.status === 0) {
      // 通信エラーの場合のメッセージ
      errorMessage = `
        <div class="message">
            正常に通信できませんでした。<br>
            インターネットの接続を確認してください。
        </div>
      `;
    } else if (error.status === 400) {
      // 不正な検索キーワードの場合のメッセージ
      errorMessage = `
        <div class="message">
            検索キーワードが有効ではありません。<br>
            1文字以上で検索してください。
        </div>
      `;
    } else {
      // その他のエラーの場合のメッセージ
      errorMessage = `
        <div class="message">
            予期せぬエラーが起きました。<br>
            再読み込みを行ってください。
        </div>
      `;
    }
    // エラーメッセージをリストの前に表示
    $(".lists").before(errorMessage);
  }

  // ページ数を管理する変数 currentPage と前回の検索キーワードを保持する変数 previousSearch を定義
  let currentPage = 1;
  let previousSearch = "";

  // 検索ボタンがクリックされたときの処理
  $(".search-btn").on("click", function () {
    // 検索ボックスの値（検索キーワード）を取得
    const searchKeyword = $("#search-input").val();

    // 前回のキーワードと異なる場合、ページ数をリセットし、リストを空にする
    if (searchKeyword !== previousSearch) {
      currentPage = 1;  // ページ数を1にリセット
      $(".lists").empty();  // リストを空にする
      previousSearch = searchKeyword;  // 検索キーワードを更新
    } else {
      // 同じキーワードならページ数を増やす
      currentPage++;
    }

    // AJAXリクエストでデータを取得
    $.ajax({
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchKeyword}&format=json&p=${currentPage}&count=20`,  // APIのURLを設定
      method: "GET",  // GETリクエストで送信
    })
      .done(function (response) {
        // データが取得できたら、検索結果を処理する
        processSearchResults(response["@graph"]);
      })
      .fail(function (error) {
        // エラー時の処理を別関数 handleError で実行
        handleError(error);
      });
  });

  // リセットボタンがクリックされたときの処理
  $(".reset-btn").on("click", function () {
    // ページ数と検索キーワードをリセットし、リストを空にする
    currentPage = 1;  // ページ数をリセット
    previousSearch = "";  // 前回の検索キーワードをリセット
    $(".lists").empty();  // リストを空にする
    removeMessages();  // メッセージを削除
    $("#search-input").val("");  // 検索ボックスを空にする
  });
});

$(function () {
  // 検索結果を処理する関数 processSearchResults
  function processSearchResults(responseData) {
    // 既存のメッセージを削除
    $(".message").remove();

    const items = responseData[0].items;

    // 検索結果が存在するか確認
    if (items && items.length > 0) {
      // 検索結果がある場合、各アイテムをリストに追加
      items.forEach(function (book) {
        const title = book.title ? book.title : "タイトル不明";
        const creator = book["dc:creator"] ? book["dc:creator"] : "作者不明";
        const publisher = book["dc:publisher"] && book["dc:publisher"][0] ? book["dc:publisher"][0] : "出版社不明";
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
        // リストの先頭に追加
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
      $(".lists").before(noResultMessage);
    }
  }

  // ページ数をカウントする変数 currentPage、検索キーワードを保持する変数 previousSearch
  let currentPage = 1;
  let previousSearch = "";

  // 検索ボタンがクリックされたときの処理
  $(".search-btn").on("click", function () {
    // 検索ボックスの値を取得
    const searchKeyword = $("#search-input").val();

    // 前回と違うキーワードなら、ページ数をリセットしリストを空にする
    if (searchKeyword !== previousSearch) {
      currentPage = 1;
      $(".lists").empty();
      previousSearch = searchKeyword;
    } else {
      // 同じキーワードの場合はページ数を増やす
      currentPage++;
    }

    // AJAXリクエストを送信してデータを取得
    $.ajax({
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchKeyword}&format=json&p=${currentPage}&count=20`,
      method: "GET",
    })
      .done(function (response) {
        // データが取得できたら処理関数 processSearchResults を呼び出し
        processSearchResults(response["@graph"]);
      })
      .fail(function (error) {
        // エラー時の処理
        $(".lists").empty();
        $(".message").remove();

        // エラーメッセージを表示
        let errorMessage = "";
        if (error.status === 0) {
          errorMessage = `
            <div class="message">
                正常に通信できませんでした。<br>
                インターネットの接続を確認してください。
            </div>
          `;
        } else if (error.status === 400) {
          errorMessage = `
            <div class="message">
                検索キーワードが有効ではありません。<br>
                1文字以上で検索してください。
            </div>
          `;
        } else {
          errorMessage = `
            <div class="message">
                予期せぬエラーが起きました。<br>
                再読み込みを行ってください。
            </div>
          `;
        }
        $(".lists").before(errorMessage);
      });
  });

  // リセットボタンがクリックされたときの処理
  $(".reset-btn").on("click", function () {
    // ページ数、検索キーワードをリセットし、リストを空にする
    currentPage = 1;
    previousSearch = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });
});

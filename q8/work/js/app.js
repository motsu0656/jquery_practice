// DOMがすべて読み込まれた後に処理を開始
document.addEventListener('DOMContentLoaded', function() {

  // 検索結果を処理する関数 a(e)
  function a(e) {
      // 既存のメッセージを削除
      const messageElement = document.querySelector(".message");
      if (messageElement) {
          messageElement.remove();
      }

      // 検索結果が存在するか確認
      if (e[0].items && e[0].items.length > 0) {
          // 検索結果がある場合、各アイテムをリストに追加
          e[0].items.forEach(function(c) {
              // アイテムの各情報を取得し、HTML要素を作成
              const title = c.title ? c.title : "タイトル不明";
              const creator = c["dc:creator"] ? c["dc:creator"] : "作者不明";
              const publisher = c["dc:publisher"] && c["dc:publisher"][0] ? c["dc:publisher"][0] : "出版社不明";
              const link = c.link["@id"];

              // 新しいリストアイテムのHTMLを作成
              const g = `
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
              document.querySelector(".lists").insertAdjacentHTML('afterbegin', g);
          });
      } else {
          // 検索結果がない場合、メッセージを表示
          const noResultMessage = `
              <div class="message">
                  検索結果が見つかりませんでした。<br>
                  別のキーワードで検索してください。
              </div>
          `;
          document.querySelector(".lists").insertAdjacentHTML('beforebegin', noResultMessage);
      }
  }

  // ページ数をカウントする変数 d、検索キーワードを保持する変数 f
  let d = 1;
  let f = "";

  // 検索ボタンがクリックされたときの処理
  document.querySelector(".search-btn").addEventListener('click', function() {
      // 検索ボックスの値を取得
      const e = document.querySelector("#search-input").value;

      // 前回と違うキーワードなら、ページ数をリセットしリストを空にする
      if (e !== f) {
          d = 1;
          document.querySelector(".lists").innerHTML = "";
          f = e;
      } else {
          // 同じキーワードの場合はページ数を増やす
          d++;
      }

      // AJAXリクエストを送信してデータを取得
      fetch(`https://ci.nii.ac.jp/books/opensearch/search?title=${e}&format=json&p=${d}&count=20`)
          .then(response => response.json())
          .then(data => {
              // データが取得できたら処理関数aを呼び出し
              a(data["@graph"]);
          })
          .catch(error => {
              // エラー時の処理
              document.querySelector(".lists").innerHTML = "";
              const messageElement = document.querySelector(".message");
              if (messageElement) {
                  messageElement.remove();
              }

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
              document.querySelector(".lists").insertAdjacentHTML('beforebegin', errorMessage);
          });
  });

  // リセットボタンがクリックされたときの処理
  document.querySelector(".reset-btn").addEventListener('click', function() {
      // ページ数、検索キーワードをリセットし、リストを空にする
      d = 1;
      f = "";
      document.querySelector(".lists").innerHTML = "";
      const messageElement = document.querySelector(".message");
      if (messageElement) {
          messageElement.remove();
      }
      document.querySelector("#search-input").value = "";
  });
});

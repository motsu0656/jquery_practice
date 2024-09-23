// Q1: 読み込み時に文字の色を緑に変更
window.onload = function () {
  document.getElementById("q1").style.color = "green";
};

// Q2: クリックしてボタンの背景色をピンクに変更
document.getElementById("q2").onclick = function () {
  this.style.backgroundColor = "pink";
};

// Q3: クリックして3秒かけてフェードアウト
document.getElementById("q3").onclick = function () {
  let element = this;
  let opacity = 1;
  let timer = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= 0.03;
  }, 100);
};

// Q4: クリックしてサイズ変更
document.getElementById("q4").onclick = function () {
  this.classList.add("large");
};

// Q5: クリックしてDOMの挿入
document.getElementById("q5").onclick = function () {
  let element = this;
  element.insertAdjacentText('afterbegin', "DOMの中の前");
  element.insertAdjacentText('beforeend', "DOMの中の後");
  element.insertAdjacentHTML('beforebegin', "DOMの前");
  element.insertAdjacentHTML('afterend', "DOMの後");
};

// Q6: クリックしてボタンを2秒かけて移動
document.getElementById("q6").onclick = function () {
  let element = this;
  let position = 0;
  let interval = setInterval(function () {
    if (position >= 100) {
      clearInterval(interval);
    } else {
      position++;
      element.style.marginTop = position + "px";
      element.style.marginLeft = position + "px";
    }
  }, 20);
};

// Q7: クリックしてid="q7"のノードをコンソールで表示
document.getElementById("q7").onclick = function () {
  console.log(this);
};

// Q8: ホバー時にサイズ変更
let q8 = document.getElementById("q8");
q8.onmouseenter = function () {
  this.classList.add("large");
};
q8.onmouseleave = function () {
  this.classList.remove("large");
};

// Q9: クリックして配列のインデックスをアラート表示
let q9Items = document.querySelectorAll("#q9 li");
q9Items.forEach(function (item, index) {
  item.onclick = function () {
    alert(index);
  };
});

// Q10: Q10のアイテムをクリックしてQ11の対応するアイテムを操作
let q10Items = document.querySelectorAll("#q10 li");
q10Items.forEach(function (item, index) {
  item.onclick = function () {
    let q11Item = document.querySelectorAll("#q11 li")[index];
    console.log(q11Item);
    q11Item.classList.add("large-text");
  };
});
const quiz = [
  {
    question: "DNAの構成要素でないのは？",
    answers: [
      "リン酸",
      "アデニン", 
      "シトシン", 
      "ヒストン",
      "デオキシリボ―ス"
    ],
    correct: "ヒストン"
  }, {
    question: "生体を構成する元素で最も割合が少ないのは？",
    answers: [
      "H",
      "C", 
      "N", 
      "O",
      "Ca"
    ],
    correct: "Ca"
  }, {
    question: "機能低下によって貧血が生じるのはどれ？",
    answers: [
      "肺",
      "心臓", 
      "腎臓", 
      "脾臓",
      "副腎"
    ],
    correct: "腎臓"
  }
  
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // 問題文
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  
  // 1から4のボタンに順番に選択肢を配列
  for (let i = 0; i < $button.length; i++ ) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }

}

setupQuiz();


// ボタンをクリックしたら正誤判定
// eはイベント、e.targetはクリック(イベントが起きた)されたボタン
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    // 正解数を加算
    score++;
  } else {
    window.alert("不正解")
  }

  // 次の問題へ
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert(`終了!あなたの正解数は${score}/${quizLength}です！`)
  }
} 

// clickHandlerを問題ごとに繰り返す
for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}


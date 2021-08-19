import React, { useState } from "react";
import * as gtag from "../libs/gtag";

function Sample(props) {
  const [score, setScore] = useState(0);

  // ボタンをクリックしたとき
  const handler = () => {
    setScore(score + 1);

    // Analyticsに送信する情報
    gtag.event({
      action: "click_answer",
      category: "score",
      label: score, //
    });

    console.log("click!");
  };

  return (
    <>
      <button onClick={handler}>push 1</button>
    </>
  );
}

export default Sample;

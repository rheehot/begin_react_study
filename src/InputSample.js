import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    // console.log(e.target);
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>

      <div>
        <p>값:</p>
        {text}
      </div>
    </div>
  );
}

export default InputSample;

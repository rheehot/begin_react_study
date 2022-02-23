import React from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  Hello.defaultProps = {
    name: "이름없음",
  };

  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isSpecial={true} />
      <Hello color="green" />
      <Counter /> */}
      <br />
      <br />
      <InputSample />
    </Wrapper>
  );
}

export default App;

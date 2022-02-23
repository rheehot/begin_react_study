import React, { useState, useRef } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const style = {
    margin: "20px",
  };

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs; //input 요소의 비구조화 할당

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4); //생성될 요소의 다음 id값을 정의

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); // ...users로 새로운 배열을 복사한 이유는 저번에도 설명했다 시피 불변성을 유지해야 react가 렌더링을 진행한다.
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "carrot",
      email: "carrot@gamil.com",
      active: true,
    },
    {
      id: 2,
      username: "apple",
      email: "apple@gamil.com",
      active: true,
    },
    {
      id: 3,
      username: "tomato",
      email: "tomato@gamil.com",
      active: false,
    },
  ]);

  return (
    <div style={style}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}

export default App;

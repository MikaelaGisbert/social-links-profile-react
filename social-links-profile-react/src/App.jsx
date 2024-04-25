import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037cf0640280f219c98cc.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;

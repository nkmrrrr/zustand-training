import "./App.css";
import Subscribe from "./components/Subscribe";
import useStore from "./store";
import { useEffect } from "react";

function App() {
  const getUsers = useStore((state) => state.getUsers);
  const deleteUser = useStore((state) => state.deleteUser);
  const users = useStore((state) => state.users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <div style={{ textAlign: "center", margin: "1em" }}>
        <h1>User</h1>
        <Subscribe />
        {users.map((user) => (
          <div key={user.id}>
            {user.name}
            <span onClick={() => deleteUser(user.id)}>X</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

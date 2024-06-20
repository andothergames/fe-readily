import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchUsers } from "../api";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const handleSelectUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <nav>
      <p>Logged in as: {`${user}`}</p>
      <form>
        <label htmlFor="cars"></label>

        <select name="user" id="user" onChange={handleSelectUser}>
          <option key=""></option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      </form>
    </nav>
  );
};

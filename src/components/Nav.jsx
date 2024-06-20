import { fetchUsers, fetchTopics } from "../api";
import { UserContext } from "../contexts/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Nav = ({ topic, setTopic }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const handleSelectUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const handleSelectTopic = (e) => {
    e.preventDefault();
    const selectedTopic = e.target.value
    setTopic(selectedTopic);
    navigate(`/articles/${selectedTopic}`);
  };

  return (
    <nav>
      <div>
        <form>
          <p>Topic:</p>
          <label htmlFor="topics"></label>

          <select
            name="topic"
            id="topic"
            onChange={handleSelectTopic}
          >
            <option key=""></option>
            {topics.map((topic) => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <p>
          Sort:
          <br />
          TBC
        </p>
      </div>
      <div></div>
      <div className="login-div">
        <form className="user-login-form">
          <p>Logged in as: {`${user}`}</p>
          <label htmlFor="users"></label>

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
      </div>
    </nav>
  );
};

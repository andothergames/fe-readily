import { fetchUsers, fetchTopics } from "../api";
import { UserContext } from "../contexts/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Nav = ({ setSort, setOrder }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  const sortOptions = [
    "title",
    "author",
    "topic",
    "created_at",
    "votes"
  ];

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
    const selectedTopic = e.target.value;
    navigate(`/articles/${selectedTopic}`);
  };

  const handleSelectSort = (e) => {
    e.preventDefault();
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  const handleSelectOrder = (e) => {
    e.preventDefault();
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
  };

  return (
    <nav>
      <div>
        <form>
          <p>Topic:</p>
          <label htmlFor="topics"></label>

          <select name="topic" id="topic" onChange={handleSelectTopic}>
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
        <form>
          <p>Sort by:</p>
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onChange={handleSelectSort}>
            <option key=""></option>
            {sortOptions.map((sort) => {
              return (
                <option key={sort} value={sort}>
                  {sort}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div><form>
          <p>Order by:</p>
          <label htmlFor="order"></label>
          <select name="order" id="order" onChange={handleSelectOrder}>
          <option key=""></option>
                <option key="asc" value="asc">asc
                </option>
                <option key="desc" value="desc">
                desc</option>
          </select>
        </form></div>
      <div className="login-div">
        <form className="user-login-form">
          <p>Logged in as:</p>
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

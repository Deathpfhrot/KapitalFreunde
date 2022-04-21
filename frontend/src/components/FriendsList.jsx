import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const sortByIncome = () => {
    const sorted = [...friends].sort((a, b) => {
      return b.verdienst - a.verdienst;
    });
    setFriends(sorted);
  };

  useEffect(() => {
    fetch("http://localhost:9000/friends")
      .then((response) => response.json())
      .then((friendsData) => setFriends(friendsData));
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li className="front-names" key={friend._id}>
            <Link to={"/friends/" + friend._id}>
              {friend.firstname} {friend.lastname} (
              {friend.verdienst.toLocaleString()} €)
            </Link>
          </li>
        ))}
      </ul>
      <div className="buttonSort" onClick={sortByIncome}>
        Click: Sort by Income
      </div>
    </div>
  );
};

export default FriendsList;

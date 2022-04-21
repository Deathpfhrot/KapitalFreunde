import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/friends/" + friendId)
      .then((response) => response.json())
      .then((friendData) => {
        if (!friendData.err) {
          setFriend(friendData);
        }
      });
  }, [friendId]);

  console.log(friend);

  if (friend)
    return (
      <div>
        <h1>
          {friend.firstname} {friend.lastname}
        </h1>
        <h2>Date of Birth: {friend.birthday}</h2>
        <h3>Phone Number: {friend.phone}</h3>
        <p>Job: {friend.job}</p>
        <p>Verdienst: {friend.verdienst.toLocaleString()} €</p>
        <p>Selbstständig: {friend.selfemployed.toString()}</p>
        <p>Kunde: {friend.workedwith.toString()}</p>
        <Link to="/"> Go Back to Homepage </Link>
      </div>
    );
  else return <h1>Friend doesn't exist.</h1>;
};

export default FriendDetail;

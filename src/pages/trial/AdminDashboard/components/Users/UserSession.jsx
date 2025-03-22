import UserTile from "./UserTile";
import "./UserSession.css";

function UserSession() {
  function getUsers() {
    return [
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "AbcD",
        gender: "F",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "abcd07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString(),
      },
    ];
  }

  const height = (getUsers().length / 3) * 230;

  return (
    <div className="user-session" style={{ height:`${height}px`}}>
      {getUsers().map((user, index) => (
        <UserTile user={user} key={index}></UserTile>
      ))}
    </div>
  );
}

export default UserSession;

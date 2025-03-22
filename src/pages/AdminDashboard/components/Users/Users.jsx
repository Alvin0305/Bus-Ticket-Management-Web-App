import { User } from "lucide-react";
import UserTile from "./UserTile/UserTile";
import "./Users.css";

function Users() {
  const getUsers = () => {
    return [
      {
        name: "Alvin A S",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Keerthana",
        gender: "F",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Kiran",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Athira",
        gender: "F",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Durga",
        gender: "F",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Aswin",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
      {
        name: "Arun",
        gender: "M",
        email: "alvinanildas@gmail.com",
        password: "abcd1234",
        userID: "alvin07",
        phone: "8086290149",
        DOB: new Date().toISOString().split("T")[0],
      },
    ];
  };

  return (
    <div className="users-session">
      <div className="users-session-left-part">
        {getUsers().map((user, index) => {
          if (index % 2 == 0) {
            return <UserTile user={user} key={index}></UserTile>;
          }
        })}
      </div>
      <div className="users-session-right-part">
        {getUsers().map((user, index) => {
          if (index % 2 == 1) {
            return <UserTile user={user} key={index}></UserTile>;
          }
        })}
      </div>
    </div>
  );
}

export default Users;

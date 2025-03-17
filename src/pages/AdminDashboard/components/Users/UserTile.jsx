import { UserCircle } from "lucide-react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import "./UserTile.css";

function UserTile({ user }) {
  return (
    // <div className="usertile-wrapper"> 
      <div className="usertile">
        <UserCircle size={100} className="user-icon"></UserCircle>
        <div className="user-details">
          <div className="user-id-gender">
            <h1 className="user-id">{user.userID}</h1>
            {user.gender == "M" ? (
              <BsGenderMale size={24} color="#814CB2" />
            ) : (
              <BsGenderFemale size={24} color="#814CB2" />
            )}
          </div>
          <h2 className="user-name">{user.name}</h2>
          <h2 className="user-email">{user.email}</h2>
          <h2 className="user-phone">{user.phone}</h2>
          <h3 className="user-dob">{user.DOB}</h3>
        </div>
      </div>
    // </div>
  );
}

export default UserTile;

import { useLocation, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useState } from "react";

function ProfilePage() {
  const location = useLocation();
  const { user } = location.state || {};

  const navigate = useNavigate();

  const [username, setUsername] = useState(user.name);
  const [dob, setDOB] = useState(user.DOB);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [userID, setUserID] = useState(user.userID);
  const [password, setPassword] = useState(user.password);

  const [editable, setEditable] = useState(false);

  const copyUserName = user.username;
  const copyDOB = user.DOB;
  const copyGender = user.gender;
  const copyEmail = user.email;
  const copyPhone = user.phone;
  const copyUserID = user.userID;
  const copyPassword = user.password;

  const onEdit = () => {
    setEditable(true);
  };

  const onCancel = () => {
    setEditable(false);
    setUsername(copyUserName);
    setDOB(copyDOB);
    setGender(copyGender);
    setEmail(copyEmail);
    setPhone(copyPhone);
    setUserID(copyUserID);
    setPassword(copyPassword);
  };

  const onSave = () => {
    // add API call for editing the user details here
    navigate("/landing-page");
  };

  return (
    <div className="profile-page">
      <div className="profile-page-heading-div">
        <h1 className="profile-page-heading">My Profile</h1>
      </div>
      <div className="profile-page-container">
        <div className="profile-page-buttons">
          {editable ? (
            <div>
              <button
                className="profile-page-edit-button"
                id="profile-page-cancel-button"
                onClick={onCancel}
              >
                CANCEL
              </button>
              <button className="profile-page-edit-button" onClick={onSave}>
                SAVE
              </button>
            </div>
          ) : (
            <button className="profile-page-edit-button" onClick={onEdit}>
              EDIT
            </button>
          )}
        </div>

        <div className="profile-page-name-and-dob-div">
          <div className="profile-page-name-div">
            <h3 className="profile-page-label">YOUR NAME</h3>
            <input
              className="profile-page-text"
              placeholder={user.name}
              type="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              disabled={!editable}
            ></input>
          </div>
          <div className="spacer"></div>
          <div className="profile-page-dob-div">
            <h3 className="profile-page-label">DATE OF BIRTH</h3>
            <input
              className="profile-page-text"
              placeholder={user.DOB}
              type="date"
              value={dob}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
              disabled={!editable}
              id="profile-page-date"
            ></input>
          </div>
          <div className="spacer"></div>
        </div>
        <div className="profile-page-userid-and-pass-div">
          <div className="profile-page-userid-div">
            <h3 className="profile-page-label">USER ID</h3>
            <input
              className="profile-page-text"
              placeholder={user.userID}
              type="username"
              value={userID}
              onChange={(e) => {
                setUserID(e.target.value);
              }}
              disabled={!editable}
            ></input>
          </div>
          <div className="spacer"></div>
          <div className="profile-page-pass-div">
            <h3 className="profile-page-label">PASSWORD</h3>
            <input
              className="profile-page-text"
              placeholder={user.password}
              type="username"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              disabled={!editable}
            ></input>
          </div>
          <div className="spacer"></div>
        </div>
        <div className="profile-page-gender-div-wrapper">
          <div className="profile-page-gender-div">
            <h3 className="profile-page-label">GENDER</h3>
            <div className="profile-page-gender-radios">
              <label className="profile-page-gender">
                <input
                  type="radio"
                  value="M"
                  checked={gender === "M"}
                  onChange={() => setGender("M")}
                  disabled={!editable}
                />
                Male
              </label>
              <label className="profile-page-gender">
                <input
                  type="radio"
                  value="F"
                  checked={gender === "F"}
                  onChange={() => setGender("F")}
                  disabled={!editable}
                />
                Female
              </label>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
        <div className="profile-page-bottom-part">
          <h2 className="profile-page-contact-details">CONTACT DETAILS</h2>
          <div className="profile-page-email-and-phone-div">
            <div className="profile-page-email-div">
              <h3 className="profile-page-label">EMAIL</h3>
              <input
                className="profile-page-text"
                placeholder={user.email}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={!editable}
              ></input>
            </div>
            <div className="spacer"></div>
            <div className="profile-page-phone-div">
              <h3 className="profile-page-label">MOBILE NUMBER</h3>
              <input
                className="profile-page-text"
                placeholder={user.phone}
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                disabled={!editable}
              ></input>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

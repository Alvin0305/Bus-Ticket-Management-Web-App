import { useLocation, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useState } from "react";
import axios from "axios";

function ProfilePage() {
  const location = useLocation();
  const { user } = location.state || {}; // Get user data from location state

  const BACKEND_URL = "http://localhost:5000"; // Update this to your backend URL
  const navigate = useNavigate();

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // State for form fields
  const [username, setUsername] = useState(user?.name || "");
  const [dob, setDOB] = useState(formatDateForInput(user?.dob) || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [password, setPassword] = useState(user?.password || "");
  const [confirmPassword, setConfirmPassword] = useState(user?.password || "");

  const [editable, setEditable] = useState(false); // Toggle edit mode

  // Backup of original user data for canceling edits
  const copyUserName = user?.name || "";
  const copyDOB = formatDateForInput(user?.dob) || "";
  const copyGender = user?.gender || "";
  const copyEmail = user?.email || "";
  const copyPhone = user?.phone || "";
  const copyPassword = user?.password || "";

  // Toggle edit mode
  const onEdit = () => {
    setEditable(true);
  };

  // Cancel edits and reset form fields
  const onCancel = () => {
    setEditable(false);
    setUsername(copyUserName);
    setDOB(copyDOB);
    setGender(copyGender);
    setEmail(copyEmail);
    setPhone(copyPhone);
    setPassword(copyPassword);
    setConfirmPassword(copyPassword);
  };

  // Save updated profile data
  const onSave = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare the data to send to the backend
    const userData = {
      userId: user.id, // Include user ID for the backend
      name: username,
      dob: dob,
      gender: gender,
      email: email,
      phone: phone,
      password: password,
    };

    try {
      // Make the API call to update the profile
      const response = await axios.put(`${BACKEND_URL}/api/update-profile`, userData);

      if (response.status === 200) {
        // Profile updated successfully
        const updatedUser = response.data.user; // Updated user data from the backend
        alert("Profile updated successfully");

        // Navigate to the landing page and pass the updated user data
        navigate("/landing-page", { state: { user: updatedUser } });
      } else {
        // Handle other status codes (e.g., 400, 404, 500)
        alert(response.data.error || "Failed to update profile");
      }
    } catch (error) {
      // Handle errors (e.g., network issues, server errors)
      if (error.response) {
        alert(error.response.data.error || "An error occurred");
      } else if (error.request) {
        alert("No response from the server. Please try again.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  // Delete user account
  const onDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone")) {
      try {
        // Make the API call to delete the account
        const response = await axios.delete(`${BACKEND_URL}/api/delete-profile`, {
          data: { userId: user.id }, // Send user ID in the request body
        });

        if (response.status === 200) {
          alert("Account deleted successfully");
          navigate("/login"); // Redirect to login page after deletion
        } else {
          alert(response.data.error || "Failed to delete account");
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error || "An error occurred");
        } else if (error.request) {
          alert("No response from the server. Please try again.");
        } else {
          alert("An error occurred. Please try again.");
        }
      }
    }
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
              className={`profile-page-text ${
                editable
                  ? "profile-page-editable-text"
                  : "profile-page-non-editable-text"
              }`}
              placeholder={user?.name}
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!editable}
            />
          </div>
          <div className="spacer"></div>
          <div className="profile-page-dob-div">
            <h3 className="profile-page-label">DATE OF BIRTH</h3>
            <input
              className={`profile-page-text ${
                editable
                  ? "profile-page-editable-text"
                  : "profile-page-non-editable-text"
              }`}
              placeholder={user?.DOB}
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              disabled={!editable}
              id="profile-page-date"
            />
          </div>
          <div className="spacer"></div>
        </div>

        <div className="profile-page-userid-and-pass-div">
          <div className="profile-page-pass-div">
            <h3 className="profile-page-label">PASSWORD</h3>
            <input
              className={`profile-page-text ${
                editable
                  ? "profile-page-editable-text"
                  : "profile-page-non-editable-text"
              }`}
              placeholder={user?.password}
              type={editable ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!editable}
            />
          </div>
          <div className="spacer"></div>
          {editable && (
            <div className="profile-page-pass-div">
              <h3 className="profile-page-label">CONFIRM PASSWORD</h3>
              <input
                className={`profile-page-text ${
                  editable
                    ? "profile-page-editable-text"
                    : "profile-page-non-editable-text"
                }`}
                placeholder={user?.password}
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={!editable}
              />
            </div>
          )}
          <div className="spacer"></div>
        </div>

        <div className="profile-page-gender-div-wrapper">
          <div className="profile-page-gender-div">
            <h3 className="profile-page-label">GENDER</h3>
            <div className="profile-page-gender-radios">
              <label className="profile-page-gender">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  disabled={!editable}
                />
                Male
              </label>
              <label className="profile-page-gender">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
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
                className={`profile-page-text profile-page-non-editable-text`}
                placeholder={user?.email}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
              />
            </div>
            <div className="spacer"></div>
            <div className="profile-page-phone-div">
              <h3 className="profile-page-label">MOBILE NUMBER</h3>
              <input
                className={`profile-page-text ${
                  editable
                    ? "profile-page-editable-text"
                    : "profile-page-non-editable-text"
                }`}
                placeholder={user?.phone}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={!editable}
              />
            </div>
            <div className="spacer"></div>
          </div>
        </div>

        <div className="profile-page-spacer-delete">
          <div className="spacer"></div>
          <button className="profile-page-delete-button" onClick={onDelete}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
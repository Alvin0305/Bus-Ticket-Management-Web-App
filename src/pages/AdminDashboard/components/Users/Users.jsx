import { User } from "lucide-react";
import UserTile from "./UserTile/UserTile";
import "./Users.css";
import { useState, useEffect } from "react";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import axios from "axios";

function Users() {
  const [searchValue, setsearchValue] = useState("");
  const [option, setOption] = useState("name");

  const BACKEND_URL = "http://localhost:5000";

  const getUsers = async () => {
    try {
      const result = await axios.post(`${BACKEND_URL}/api/admin-user/search`, {
        option: "all",
        newValue: ""
      });
      
      if (result.status === 200) {
        return result.data;
      }
      throw new Error(`Request failed with status ${result.status}`);
    } catch (error) {
      console.error("API Error:", error);
      throw error; // Re-throw if you want to handle it in the calling code
    }
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchUsers();
  }, []); // Empty dependency array means run once on mount

  const findUsers = async (option, searchValue) => {
    var result;
    try {
      result = await axios.post(`${BACKEND_URL}/api/admin-user/search`, {
        option,
        searchValue
      });
      if (result.status == 200)
      {
        setUsers(result.data);
      }
      console.log(result);
      }
    catch (error) {
      alert("erooooooorr");
      console.log(error);
    }

  }

  const onChange = (e) => {
    const newValue = e.target.value;
    setsearchValue(newValue);
    findUsers(option, newValue);
  };

  const onOptionChange = (e) => {
    const newOption = e.target.value;
    setOption(newOption);
    findUsers(newOption, searchValue);
  };

  return (
    <div className="user-session-wrapper">
      <div className="user-session-input-div">
        <FormControl className="user-session-form">
          <Select value={option} onChange={onOptionChange} displayEmpty className="user-session-form">
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="phone">Phone Number</MenuItem>
            <MenuItem value="email">Email ID</MenuItem>
          </Select>
        </FormControl>
        <input
          type="text"
          placeholder="Search User"
          value={searchValue}
          onChange={onChange}
          className="user-session-input"
        />
      </div>

      <div className="users-session">
        <div className="users-session-left-part">
          {users.map((user, index) => {
            if (index % 2 == 0) {
              return <UserTile user={user} key={index}></UserTile>;
            }
          })}
        </div>
        <div className="users-session-right-part">
          {users.map((user, index) => {
            if (index % 2 == 1) {
              return <UserTile user={user} key={index}></UserTile>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;

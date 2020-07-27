import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoadinng] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      setIsLoadinng(true);
      const data = await axios.get(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );

      setUserData(data.data);
      setIsLoadinng(false);
    };

    getUserData();
  }, [setUserData, setIsLoadinng]);

  const convertData = () => {
    const arr = userData.reduce((obj, { firstName, lastName, dob }) => {
      const month = new Date(dob).getMonth();
      const fullName = `${firstName} ${lastName}`;
      const arr = obj[month] === undefined ? [] : [...obj[month]];
      return { ...obj, [month]: [...arr, fullName] };
    }, {});
    return arr;
  };

  return (
    <div className="container">
      {isLoading ? "Loading..." : null}
      {userData.length > 0 && <Calendar userList={convertData(userData)} />}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css";

const Page1 = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  var eligibleCodes = ["austin234", "alvin145", "karthik321"];
  var [specialUsers, setSpecialUsers] = useState([]);
  var [normalUsers, setNormalUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("UsersData"));
    console.log("pro", data);
    setSpecialUsers(data?.specialUsers || []);
    setNormalUsers(data?.normalUsers || []);
  }, []);

  const handleData = (e) => {
    e.preventDefault();
    var data = {};
    if (name && code) {
      if (eligibleCodes.includes(code)) {
        // send user to specialUsers array
        data = {
          name,
          specialUser: true,
        };
        setSpecialUsers([...specialUsers, data]);
        localStorage.setItem("username", data.name);
      } else {
        data = {
          name,
          specialUser: false,
        };
        setNormalUsers([...normalUsers, data]);
        localStorage.setItem("username", data.name);
      }
    } else if (name && code === "") {
      data = {
        name,
        specialUser: false,
      };

      setNormalUsers([...normalUsers, data]);
      localStorage.setItem("username", data.name);
    }
    setFlag(true);
  };

  if (flag) {
    const v = {
      specialUsers,
      normalUsers,
    };
    localStorage.setItem("UsersData", JSON.stringify(v));
    navigate("/page2");
  }

  return (
    <div className="box">
      <form onSubmit={handleData}>
        <div className="formControl">
          <label>
            Name <span className="required">*</span>{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your name here"
            name="name"
            value={name && name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formControl">
          <label>Invitation Code</label>
          <input
            type="text"
            placeholder="Enter code here"
            value={code && code}
            onChange={(e) => setCode(e.target.value)}
            name="code"
          />
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Page1;

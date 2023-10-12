import React, { useEffect, useState } from "react";
import "./Page2.css"
const Page2 = () => {

  var [specialUsers, setSpecialUsers] = useState([]);
  var [normalUsers, setNormalUsers] = useState([]);
  var [finalArray, setFinalArray] = useState([]);
  var [name, setname] = useState("");

  const getData = () => {

    const data = JSON.parse(localStorage.getItem("UsersData"));
    setSpecialUsers(data?.specialUsers || []);
    setNormalUsers(data?.normalUsers || []);
    const username = localStorage.getItem("username");
    setname(username);
  }

  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    setFinalArray([...specialUsers, ...normalUsers]);
  }, [specialUsers, normalUsers]);

  return <div>
    {finalArray && finalArray.map((data, i) => (
      <div className="content">
        
        {data?.name === name ?  <>
          <div className="text1">Your position is <b>{i+1}</b> in the waiting list</div>
          <div className="text2">Wait Time: <b>{i+1}</b> day(s)</div>
        </>: ""}
      </div>
    ))}
  </div>;
};

export default Page2;
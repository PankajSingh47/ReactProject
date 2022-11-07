import React, { useState } from "react";
import "./style.css";
import Leader from "./LeaderInfo";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Leader.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const ShowData = () => {
  const [LeaderData, setLeaderData] = useState(Leader);
  const [LeaderList, setLeaderList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setLeaderData(Leader);
      return;
    }

    const updatedList = Leader.filter((curElem) => {
      return curElem.category === category;
    });

    setLeaderData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} LeaderList={LeaderList} />
      <Card LeaderData={LeaderData} />
    </>
  );
};

export default ShowData;

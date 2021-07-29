import React, { useEffect, useState } from "react";
import SelectBar from "./selectbar";
import SquaresView from "./squares";

const MainLayout = () => {
    const [options, setOptions]=useState([])
    const [mode, setMode]=useState({})

  useEffect(() => {
    fetch("https://demo1030918.mockable.io/")
      .then((res) => res.json())
      .then((res) => setOptions(res));
  }, []);

  return (
    <div style={{height:"100%"}}>
      <SelectBar options={options} setMode={setMode}/>
      <SquaresView mode={mode}/>
    </div>
  );
};

export default MainLayout;

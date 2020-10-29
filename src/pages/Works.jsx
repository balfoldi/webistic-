import React, { useState } from "react";
import TabbedInterfaces from '../components/TabbedInterfaces';

const Works = () => {
  const [url, setUrl] = useState("works");

  return (
    <>
      <TabbedInterfaces url={url} />
    </>
  );
};
export default Works;
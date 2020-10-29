import React, { useState } from "react";
import TabbedInterfaces from '../components/TabbedInterfaces';

const About = () => {
  const [url, setUrl] = useState("about");

  return (
    <>
      <TabbedInterfaces url={url} /> 
    </>
  );
};
export default About;
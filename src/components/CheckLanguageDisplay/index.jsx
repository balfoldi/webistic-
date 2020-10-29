import React, { useContext} from "react";
import { Image } from "react-bootstrap";
import en from "./../../assets/img/en.png"
import fr from "./../../assets/img/fr.png"
import LanguageContext from "./../../LanguageContext";

const CheckLanguageDisplay = () => {
  const language = useContext(LanguageContext);

  
  return (
    <>
      <Image onClick={() => {language.swichLanguage("en"); console.log("noob")}} src={en} width="35px" height="39px" alt="english" roundedCircle />
      <Image onClick={() => {language.swichLanguage("fr"); console.log("noob")}} src={fr} width="35px" height="39px" alt="french" roundedCircle />
    </>
  );
};

export default CheckLanguageDisplay;

import { useState } from "react";
import MainButton from "../button/button";

const StringControl = ({ string }) => {
  const [rest, setRest] = useState("");
  const [btnChildren, setBtnChildren] = useState("See more");
  const strLength = string.length;
  let shortString = string.slice(0, 200);

  const onSubmit = () => {
    if (btnChildren === "See more") {
      setRest(string.slice(201, strLength));
      setBtnChildren("close");
    } else {
      setRest("");
      setBtnChildren("See more");
    }
  };

  return (
    <div>
      {strLength >= 200 ? (
        <div>
          {shortString + rest}
          <MainButton onClick={onSubmit}>{btnChildren}</MainButton>
        </div>
      ) : (
        string
      )}
    </div>
  );
};

export default StringControl;

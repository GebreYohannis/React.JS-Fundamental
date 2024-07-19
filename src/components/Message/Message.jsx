import { useState } from "react";
import "./Message.css";

const Message = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="message">
      <label htmlFor="text">text</label>
      <textarea
        name="message"
        id="text"
        onChange={() => setMessage("Hellow")}
      ></textarea>
      <p>{message}</p>
    </div>
  );
};

export default Message;

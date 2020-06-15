import React, { useState } from "react";
import "./EightBall.css";
import { choice } from "./util";


const EightBall = (props) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [table, setTable] = useState({});

  const updateBall = () => {
    const msg = choice(props.msgs);
    setMsg(msg.msg);
    setColor(msg.color);
    if (table.hasOwnProperty(msg.color)) {
      table[msg.color]++;
    } else {
      table[msg.color] = 1;
    }
    setTable({ ...table });
    // console.log(table);
  }

  const resetBall = () => {
    setMsg("Think of a Question");
    setColor("black");
    setTable({});
  }

  return (
    <>
      <button onClick={resetBall}>Reset</button>
      <div className="EightBall" style={{ backgroundColor: color }} onClick={updateBall}>
        {msg}
      </div >
      <ul>
        {Object.entries(table).map(([key, val]) => <li>{key}: {val}</li>)}
      </ul>
    </>
  )

}


EightBall.defaultProps = {
  msgs: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
}


export default EightBall;
import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [things, setList] = useState(["Iphone", "macBook"]);

  const addList = (newItem) => {
    return setList([...things, newItem]);
  };

  return (
    <div>
      <ul>
        {things.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <Child add={addList} />
    </div>
  );
};

export default Parent;

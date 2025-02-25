import React, { useEffect } from "react";

export default function Unmount() {
  useEffect(() => {
    return () => {
      console.log("Unmounting Phase Triggered");
    };
  });
  return <div>I am an Unmount Component</div>;
}

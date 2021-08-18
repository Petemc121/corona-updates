import React from "react";

export default function Graphs({ displayHandler }) {
  return <div style={{ display: displayHandler() }} id="graphsContain"></div>;
}

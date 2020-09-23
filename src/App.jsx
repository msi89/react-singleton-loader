import React from "react";
import "./styles.css";
import Skeleton from "./components/Skeleton";

export default function App() {
  const range = [0, 1, 1, 1, 1, 1, 1];
  return (
    <div className="App">
      <h1>Skeleton loader</h1>

      <h2>Dark mode</h2>
      <div className="flex black">
        <Skeleton
          width="160px"
          height="160px"
          background="rgba(255, 255, 255, 0.2)"
        />
        <div className="flex-desc">
          <Skeleton width="50%" background="rgba(255, 255, 255, 0.2)" />
          <Skeleton width="80%" background="rgba(255, 255, 255, 0.2)" />
          <Skeleton width="90%" background="rgba(255, 255, 255, 0.2)" />
          <Skeleton width="80%" background="rgba(255, 255, 255, 0.2)" />
          <Skeleton width="20%" background="rgba(255, 255, 255, 0.2)" />
        </div>
      </div>
      <h2>Light mode</h2>
      {range.map((r, i) => (
        <div className="flex" key={i}>
          <Skeleton width="160px" height="160px" />
          <div className="flex-desc">
            <Skeleton width="50%" />
            <Skeleton width="80%" />
            <Skeleton width="90%" />
            <Skeleton width="80%" />
            <Skeleton width="20%" />
          </div>
        </div>
      ))}
    </div>
  );
}

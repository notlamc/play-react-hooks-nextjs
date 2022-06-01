import type { NextPage } from "next";

import { useState, useMemo, useEffect } from "react";

const slowFunction = (number: number) => {
  console.log("Calling slow function");

  for (let i = 0; i <= 1000000000; i++) {}

  return number * 2;
};

const UseMemoPage: NextPage = () => {
  const [number, setNumber] = useState(0);

  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "white",

      color: dark ? "white" : "black",
    }),

    [dark]
  );

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((previousValue) => !previousValue)}>
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoPage;

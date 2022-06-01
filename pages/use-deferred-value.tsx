import type { NextPage } from "next";

import { useState, useMemo, useDeferredValue, useEffect } from "react";

const List = ({ value }: { value: string }) => {
  const LIST_SIZE = 20000;

  const deferredValue = useDeferredValue(value);

  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]);

  useEffect(() => {
    console.log(`Value: ${value} - Deferred Value: ${deferredValue}`);
  }, [value, deferredValue]);

  return list;
};

const UseDeferredValuePage: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <List value={value} />
    </>
  );
};

export default UseDeferredValuePage;

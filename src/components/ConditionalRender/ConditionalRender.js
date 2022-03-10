import { useState } from "react";

export function ConditinalRender() {
  const [condition, setCondition] = useState(true);
  const show = false;

  const handleToggle = () => {
    setCondition((previousValue) => {
      return !previousValue;
    });
  };

  if (show) {
    return (
      <div>
        {condition ? <div>something</div> : <div>something else</div>}
        <button onClick={handleToggle}>toggle condition</button>
      </div>
    );
  } else {
    return <div>nothing to show</div>;
  }
}

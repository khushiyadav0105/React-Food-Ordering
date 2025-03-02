import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>Khushi</h2>
      <h3>This is React</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default User;

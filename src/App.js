import React, { useState } from "react";
import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     document.title = text;
//   }, [text]);

//   useEffect(() => {
//     setTimeout(() => setCount(0), 5000);
//   }, []);

//   // useEffect(
//   //   // side effect function
//   //   () => {
//   //     console.log("useEffect called")
//   //   }, []
//   // );

//   console.log("Component rendering");

//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         I've been clicked {count} times
//       </button>
//       <input
//         type="text"
//         placeholder="Type away..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// }

export default App;

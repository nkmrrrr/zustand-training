import { useShallow } from "zustand/react/shallow";
import "./App.css";
import useStore from "./store";
import Count from "./components/Count";
import Reset from "./components/reset";

function App() {
  const { increase, decrease } = useStore(
    useShallow((state) => ({
      increase: state.increase,
      decrease: state.decrease,
    }))
  );

  return (
    <>
      <div style={{ textAlign: "center", margin: "1em" }}>
        <h1>Count</h1>
        {/* <div>{count}</div> */}
        <Count />
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </div>
      <Reset />
    </>
  );
}

export default App;

import { useShallow } from "zustand/react/shallow";
import useStore from "../store";

const Reset = () => {
  const { reset } = useStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );

  return (
    <div>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Reset;

import { useEffect } from "react";
import useStore from "../store";

const Subscribe = () => {
  useEffect(() => {
    const unsub1 = useStore.subscribe((state) => console.log(state.users));
    return () => {
      unsub1();
    };
  }, []);
  return <div>subscribe</div>;
};

export default Subscribe;

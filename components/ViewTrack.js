import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./GlobalContext";
import { useInView } from "react-intersection-observer";

export default function ViewTrack({ x }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  const { link, setLink } = useContext(GlobalStateContext);
  useEffect(() => {
    if (inView) {
      setLink(x);
    }
  }, [inView]);
  return <div ref={ref}></div>;
}

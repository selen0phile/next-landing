import { GlobalStateContext } from "@/components/GlobalContext";
import { useContext, useEffect } from "react";
import useScrollEnd from "./ScrollEndHook";

export default function HashChangeListener() {
  const { link, setLink } = useContext(GlobalStateContext);

  useEffect(() => {
    const onHashChanged = () => {
      setLink(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChanged);
    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isBottom) setLink("#contact");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null;
}

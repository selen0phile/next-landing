"use client";

const { useEffect, useState } = require("react");

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenWidth;
}

export function useClient() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return client;
}

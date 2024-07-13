import React, { useEffect, useRef } from "react";

const useChatScroll = (dep) => {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, 100);
  }, [dep]);

  return ref;
};

export default useChatScroll;

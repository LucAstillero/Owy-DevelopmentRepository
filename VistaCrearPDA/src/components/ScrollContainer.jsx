import React, { useRef, useEffect } from "react";
import "../styles.css";

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      container.classList.remove("dragging");
    };

    const mouseUp = () => {
      isDown = false;
      container.classList.remove("dragging");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("mouseup", mouseUp);
      container.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="contenedor-iniciadores" ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;

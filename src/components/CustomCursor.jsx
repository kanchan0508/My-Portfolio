// CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setCursorVisible] = useState(true); // State to control visibility

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleFocus = () => {
      setCursorVisible(false); // Hide cursor on input focus
    };

    const handleBlur = () => {
      setCursorVisible(true); // Show cursor when input loses focus
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Add event listeners for input fields
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up event listeners on component unmount
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return (
    <>
      {isCursorVisible && ( // Render cursor only if visible
        <div
          className="pointer-events-none fixed top-0 left-0 w-12 h-12 bg-none border-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-in-out"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            boxShadow:
              "0 0 25px rgba(130, 255, 25, 15), 0 0 50px rgba(80, 140, 25, 0.4)",
            zIndex: 9999,
          }}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;

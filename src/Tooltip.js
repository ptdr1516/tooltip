import React, { useState } from "react";

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return {
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "bottom":
        return {
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        };
        case "right":
          return {
            top: "50%",
            left: "8%",
            transform: "translateY(-50%)",
          };
      case "left":
        return {
          top: "50%",
          right: "100%",
          transform: "translateY(-50%)",
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            padding: "8px",
            background: "black",
            color: "white",
            borderRadius: "4px",
            ...getPositionStyles(),
          }}
        >
          Thanks for hovering! I'm a tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;









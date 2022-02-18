import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

export default ({ children }: BackgroundProps) => {
  return (
    <div
      style={{
        background: "#dae0e2",
        position: "relative",
        paddingBottom: "5rem",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

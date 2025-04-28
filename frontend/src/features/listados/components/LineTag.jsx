import React from "react";

const LineTag = ({ tag }) => {
  return (
    <span style={{ 
      display: "inline-block",
      backgroundColor: "#e0e0e0",
      borderRadius: "12px",
      padding: "4px 8px",
      marginRight: "5px",
      fontSize: "0.8rem"
    }}>
      {tag.name}
    </span>
  );
};

export default LineTag;

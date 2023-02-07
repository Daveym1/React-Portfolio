import React from "react";

function Cv() {
  return (
    <iframe
      src={"/cv.pdf"}
      title="PDF Document"
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "800px",
        minHeight: "400px",
      }}
    />
  );
}

export default Cv;

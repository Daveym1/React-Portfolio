import React from "react";

// This function displays my CV in pdf format

function Cv() {
  return (
    <iframe
      src={"/cv.pdf"}
      title="PDF Document"
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "800px",
      }}
    />
  );
}

export default Cv;

import React from "react";
import { Document, Page } from "react-pdf";

function Cv() {
  return (
    <iframe
      src={"/cv.pdf"}
      title="PDF Document"
      style={{ width: "100%", height: "100vh" }}
    />
  );
}

export default Cv;

import React from "react";
import { Document, Page } from "react-pdf";

import samplePDF from "./Daniel Gonzalez ITIC  (CV) INGLES.pdf";

export default function PdfViewer() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}

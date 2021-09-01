import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AllPages({ pdf }) {
  const [numPages, SetNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    SetNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return;
  <Document
    file={pdf}
    options={{ workerSrc: "/pdf.worker.js" }}
    onLoadSuccess={onDocumentLoadSuccess}
  >
    <Page pageNumber={pageNumber} />
    <div>
        <p>
            Pages {pageNumber || (numPages ? 1 : "--")} of {numPages || " --"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
        </button>
        <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
            Next
        </button>
    </div>
  </Document>;
}

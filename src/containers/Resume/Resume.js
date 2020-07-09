import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resume = (props) => {
  return (
    //   <Document onLoadError={console.error} file="Resume2020.pdf">
    //     <Page pageNumber={1} />
    //   </Document>

    <SizeMe
      render={({ size }) => (
        <div style={{ marginLeft: "-5%" }}>
          <Document file={"Resume2020.pdf"}>
            <Page width={size.width} pageNumber={1} />
          </Document>
        </div>
      )}
    />
  );
};
export default resume;

import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";
import Title from "../Title";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resume = (props) => {
  return (
    <React.Fragment>
      <Title>Resume</Title>

      <p>
        <a href="Resume2020.pdf">Download me!</a>
      </p>
      <SizeMe
        render={({ size }) => (
          // where the hell does 7% come from???
          <div style={{ marginTop: "25px" }}>
            <Document file={"Resume2020.pdf"}>
              <Page width={0.93 * size.width} pageNumber={1} />
            </Document>
          </div>
        )}
      />
    </React.Fragment>
  );
};
export default resume;

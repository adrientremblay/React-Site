import React from "react";
import Title from "../../components/Title/Title";
import { Document, Page, pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resume = (props) => {
  return (
    <React.Fragment>
      <Title>Resume</Title>

      <SizeMe
        render={({ size }) => (
          // where the hell does 7% come from???
          <div style={{ marginLeft: "-7%" }}>
            <Document file={"Resume2020.pdf"}>
              <Page width={size.width} pageNumber={1} />
            </Document>
          </div>
        )}
      />
    </React.Fragment>
  );
};
export default resume;

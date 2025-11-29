import React from "react";
import ResumePDF from "@/components/resume_pdf";
import { ResumeData } from "@/types/resume";

// This function is in a .ts file to ensure JSX is parsed correctly.
export async function getResumeHTML(data: ResumeData) {
  const ReactDOMServer = (await import("react-dom/server")).default;

  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(ResumePDF, data)
  );
}

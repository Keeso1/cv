import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { getResumeHTML } from "@/lib/pdf-html";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";

export async function POST(req: NextRequest) {
  try {
    const { lang } = await req.json();
    const data = lang === "sv" ? sv : en;

    const resumeHtml = await getResumeHTML(data);

    const html = `
      <html>
        <head>
          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
        </head>
        <body>
          ${resumeHtml}
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume.pdf"`,
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error generating PDF", { status: 500 });
  }
}

"use client";

import { useState } from "react";
import en from "../locales/en.json";
import sv from "../locales/sv.json";

const translations = { en, sv };

type Locale = "en" | "sv";

const ResumeWeb = () => {
  const [locale, setLocale] = useState<Locale>("en");
  const [isGenerating, setIsGenerating] = useState(false);

  const t = translations[locale];

  const toggleLocale = () => {
    setLocale(locale === "en" ? "sv" : "en");
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lang: locale }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
    setIsGenerating(false);
  };

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-4">
        <button
          onClick={toggleLocale}
          className="p-2 border border-ctp-overlay2 rounded text-ctp-text"
        >
          {locale === "en" ? "Svenska" : "English"}
        </button>
        <button
          onClick={handleDownload}
          className="p-2 border-ctp-peach rounded bg-ctp-peach text-ctp-base"
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Download PDF"}
        </button>
      </div>

      <h1 className="text-4xl font-bold text-ctp-mauve">{t.name}</h1>
      <p className="text-xl text-ctp-subtext1">{t.tagline}</p>

      <div className="mt-4 text-ctp-subtext0">
        <p>{t.personal_info.email}</p>
        <p>{t.personal_info.phone}</p>
        <p>{t.personal_info.address}</p>
      </div>
      <div className="flex gap-[5%]">
        <div className="flex flex-col flex-wrap w-[75%]">
          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Work Experience
            </h2>
            {t.work_experience.map((job, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold text-ctp-teal">
                  {job.title} at {job.company}
                </h3>
                <p className="text-sm text-ctp-lavender">
                  {job.period} - {job.location}
                </p>
                <ul className="list-disc ml-6 mt-2">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Education
            </h2>
            {t.education.map((edu, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold text-ctp-teal">
                  {edu.title} at {edu.institution}
                </h3>
                <p className="text-sm text-ctp-subtext1">{edu.institution}</p>
                <p className="text-sm text-ctp-lavender">
                  {edu.period} - {edu.location}
                </p>
                <ul className="list-disc ml-6 mt-2">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Projects
            </h2>
            {t.projects.map((proj, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold text-ctp-teal">
                  {proj.title}
                </h3>
                <p className="text-sm text-ctp-lavender">
                  {proj.technologies} - {proj.period}
                </p>
                <ul className="list-disc ml-6 mt-2">
                  {proj.description.map((item, i) => (
                    <li key={i}>
                      {item.startsWith("http") ? (
                        <a href={item} className="text-ctp-sky">
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap max-w-[30%]">
          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Skills
            </h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-ctp-teal">Technical</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-ctp-surface1 rounded-full px-3 py-1 text-sm font-semibold text-ctp-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-ctp-teal">
                Design & Methods
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.skills.design_and_methods.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-ctp-surface1 rounded-full px-3 py-1 text-sm font-semibold text-ctp-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Languages
            </h2>
            {t.languages.map((lang, index) => (
              <div key={index} className="mt-2">
                <span className="text-ctp-text">{lang.name}</span>
                <div className="w-full bg-ctp-surface0 rounded-full h-2.5">
                  <div
                    className="bg-ctp-green h-2.5 rounded-full"
                    style={{ width: `${(lang.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold border-b-2 border-ctp-overlay2 text-ctp-blue">
              Additional Experience
            </h2>
            {t.additional_experience.map((exp, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold text-ctp-teal">
                  {exp.title}
                </h3>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeWeb;

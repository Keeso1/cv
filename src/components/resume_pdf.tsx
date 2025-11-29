import { ResumeData } from "@/types/resume";

export default function ResumePDF(data: ResumeData) {
  return (
    <div
      className="bg-ctp-base text-ctp-text text-xs"
      style={{
        width: "210mm",
        height: "297mm",
        padding: "15mm",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-ctp-mauve">{data.name}</h1>
        <p className="text-base text-ctp-subtext1">{data.tagline}</p>
        <div className="flex justify-center gap-3 mt-1 text-xs text-ctp-subtext0">
          <span>{data.personal_info.email}</span>
          <span>{data.personal_info.phone}</span>
          <span>{data.personal_info.address}</span>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Work Experience
            </h2>
            {data.work_experience.map((job, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-sm font-semibold text-ctp-teal">
                  {job.title} at {job.company}
                </h3>
                <p className="text-xs text-ctp-lavender">
                  {job.period} | {job.location}
                </p>
                <ul className="list-disc list-inside mt-1 text-xs">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-sm font-semibold text-ctp-teal">
                  {edu.title}
                </h3>
                <p className="text-xs font-medium text-ctp-subtext1">
                  {edu.institution}
                </p>
                <p className="text-xs text-ctp-lavender">
                  {edu.period} | {edu.location}
                </p>
                <ul className="list-disc list-inside mt-1 text-xs">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Projects
            </h2>
            {data.projects.map((proj, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-sm font-semibold text-ctp-teal">
                  {proj.title}
                </h3>
                <p className="text-xs text-ctp-lavender">
                  {proj.technologies} | {proj.period}
                </p>
                <ul className="list-disc list-inside mt-1 text-xs">
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
          </section>
        </div>

        <div className="col-span-1">
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Skills
            </h2>
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-ctp-teal">
                Technical
              </h3>
              <div className="flex flex-wrap gap-1 mt-1 text-xs">
                {data.skills.technical.map((skill, index) => (
                  <span key={index}>
                    {skill}
                    {index < data.skills.technical.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ctp-teal">
                Design & Methods
              </h3>
              <div className="flex flex-wrap gap-1 mt-1 text-xs">
                {data.skills.design_and_methods.map((skill, index) => (
                  <span key={index}>
                    {skill}
                    {index < data.skills.design_and_methods.length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Languages
            </h2>
            {data.languages.map((lang, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold text-xs">{lang.name}</p>
                <div className="w-full bg-ctp-surface0 h-1.5">
                  <div
                    className="bg-ctp-green h-1.5"
                    style={{ width: `${(lang.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-lg font-bold border-b border-ctp-overlay2 pb-1 mb-2 text-ctp-blue">
              Additional Experience
            </h2>
            {data.additional_experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-sm font-semibold text-ctp-teal">
                  {exp.title}
                </h3>
                <p className="text-xs">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

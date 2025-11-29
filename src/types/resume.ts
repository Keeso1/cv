// Define types for the props based on the JSON structure
interface PersonalInfo {
  email: string;
  phone: string;
  address: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string[];
}

interface Project {
  title: string;
  technologies: string;
  period: string;
  description: string[];
}

interface Skills {
  technical: string[];
  design_and_methods: string[];
}

interface Language {
  name: string;
  level: number;
}

interface AdditionalExperience {
  icon: string;
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  personal_info: PersonalInfo;
  work_experience: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skills;
  languages: Language[];
  additional_experience: AdditionalExperience[];
}

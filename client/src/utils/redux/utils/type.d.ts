export type Skills = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Vacancy = {
  id: number;
  description: string;
  designationId: number;
  activeStatus: boolean;
  postedByUserId: number;
  budget: string;
  expiresOn: string;
  majorSkills: string;
  websiteApplyLink: string;
  createdAt: string;
  updatedAt: string;
  numberOfVacancy: number;
};
export type Designation = {
  id: number;
  name: string;
  salaryRange: string;
  createdAt: string;
  updatedAt: string;
};
export type Company = {
  id: number;
  name: string;
  website: string;
  headquarter: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
  vacancies?: Array<Vacancy>;
  designations?: Array<Designation>;
};
export type User = {
  id: string;
  name: string;
  mobileNumber: string;
  email: string;
  mobileVerified: boolean;
  emailVerified: boolean;
  failedLoginCount: number;
  loginCount: number;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  resume: string;
  experience: string;
  currentCtc: string;
  expectedCtc: string;
  currentDesignation: string;
  professionalHiringStatus: boolean;
  // Application designed such that when a person is hiring professionalHiringStatus
  // will be true,and owner id will be this id
  companyId: number;
  appraisalDueOn: string;
  profileSummary: string;
  userSkills?: Array<Skills>;
  userCompany?: Array<Company>;
  userAppliedJobs?: Array<Vacancy>;
};
export type RootState = {
  company: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    map: Map<string, Company>;
  };
  companyVacancies: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    map: Map<string, Vacancy[]>;
  };
  companyDesignations: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    map: Map<string, Designation[]>;
  };
  userCompany: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    userCompany: Company;
  };
  userSkills: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    userSkills: Skills[];
  };
  users: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    map: Map<string, User>;
  };
  userAppliedJobs: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    userAppliedJobs: Vacancy[];
  };
  currentUser: {
    status: 'idle' | 'failed' | 'success' | 'loading';
    message: string;
    currentUser: User | null;
  };
};

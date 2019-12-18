export interface JobCard {
  title: string;
  subtitle: string;
  tags: string[];
  requirements: string;
  employer: Employer;
  condition: Condition[];
  gender: string[];
}

export interface JobTag {
  title: string;
}

export interface Employer {
  // paymentPerHour, paymentPerMonth change to number(have a static word in string)
  paymentPerHour: string;
  paymentPerMonth: string;
  employerLogoSource: string;
  employerName: string;
  employerAddress: string;
}

export interface Condition {
  title: string;
  conditionType: string;
}

export interface Gender {
  // use this type for gender
  genderType: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  // Randomly generated using top 200 lists for surname, male name, female name and uk city
  candidates: Candidates[] = [
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 6,
    "AMEC": 10,
    "APAC": 1,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 5,
    "AMEC": 12,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 6,
    "AMEC": 10,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Black - Any other background",
    "EMEA": 2,
    "AMEC": 9,
    "APAC": 1,
    "SWISS": 4
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Black African American",
    "EMEA": 0,
    "AMEC": 13,
    "APAC": 2,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 3,
    "AMEC": 6,
    "APAC": 3,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Investment Banking & Capital Markets",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 4,
    "AMEC": 4,
    "APAC": 2,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 3,
    "AMEC": 1,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 4,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Black - Any other background",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 3
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 4,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 2
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 3,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Technology (IT)",
    "Ethnicity": "Black African American",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 1,
    "AMEC": 1,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Black African American",
    "EMEA": 3,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Black - Any other background",
    "EMEA": 3,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 3,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Black - Any other background",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Black African American",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 2,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income",
    "Ethnicity": "Black - Any other background",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Operations",
    "Ethnicity": "Black - Any other background",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 3,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Operations",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 2,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Operations",
    "Ethnicity": "Black African American",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 2,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Operations",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 2,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Operations",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Wealth Management",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 2,
    "SWISS": 2
  },
  {
    "InternalJobInfo": "Wealth Management",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 2
  },
  {
    "InternalJobInfo": "Wealth Management",
    "Ethnicity": "Black - Any other background",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Black African American",
    "EMEA": 2,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Black - Any other background",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - General",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income - Trading and Structuring",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income - Trading and Structuring",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income - Trading and Structuring",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "PEER - IBD (Current CS employees only)",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 0,
    "AMEC": 2,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "PEER - IBD (Current CS employees only)",
    "Ethnicity": "Black - Any other background",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "PEER - IBD (Current CS employees only)",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities and Fixed Income - General",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 0,
    "AMEC": 3,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities and Fixed Income - General",
    "Ethnicity": "Black - Any other background",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets & Capital Markets Solutions Group",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets & Capital Markets Solutions Group",
    "Ethnicity": "Black African American",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets & Capital Markets Solutions Group",
    "Ethnicity": "Black - Any other background",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management - Alternative Investments",
    "Ethnicity": "Black African American",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Asset Management - Alternative Investments",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Corporate Functions - Finance",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 1
  },
  {
    "InternalJobInfo": "Corporate Functions - Finance",
    "Ethnicity": "Black African American",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Global Markets Solutions Group",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Global Markets Solutions Group",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Securities (Equities and Fixed Income)",
    "Ethnicity": "Black or Black British - African",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Securities (Equities and Fixed Income)",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Information Technology, Operations and Finance",
    "Ethnicity": "Hispanic - Central and South America",
    "EMEA": 2,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Capital Market & Global Markets",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Quantitative and Systematic Asset Management",
    "Ethnicity": "Black African American",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "HOLT",
    "Ethnicity": "Hispanic or Latino",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Equities - Research",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Fixed Income - Research",
    "Ethnicity": "Black African American",
    "EMEA": 0,
    "AMEC": 1,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking and Capital Markets - Healthcare",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Corporate Functions - Risk",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Investment Banking Department COE",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 1,
    "AMEC": 0,
    "APAC": 0,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Wealth Management Academy",
    "Ethnicity": "Black or Black British - Caribbean",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  },
  {
    "InternalJobInfo": "Corporate Functions - Operations",
    "Ethnicity": "Native Hawaiian or Other pacific Islander",
    "EMEA": 0,
    "AMEC": 0,
    "APAC": 1,
    "SWISS": 0
  }
];


  constructor() { }
}


export interface Candidates {
  InternalJobInfo: string;
  Ethnicity: string;
  EMEA: number;
  AMEC: number;
  APAC: number;
  SWISS: number;
}

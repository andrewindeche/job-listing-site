export class jobPosting {
    constructor(
      public searchInput:string,
      public searchResults:any,
      public search: string,
      public title: string,
      public job_logo: string,
      public display_name: string,
      public location: string,
      public description: string,
      public contract_type: string,
      public tags: string,
      public relevance: number,
      public date_posted: number
    ) {
    }
  }
  
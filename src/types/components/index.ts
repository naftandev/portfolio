export interface SectionTitleTypes {
  value: string
}

export interface ProjectCardTypes {
  title: string
  description: string
  picture: string
  url: string
  theme: string
}

export interface RoleItemTypes {
  name: string
  type: string
  date: {
    start: string
    end?: string
  }
  location: {
    country: string
    city: string
  }
  description: string
}

export interface ExperienceItemTypes {
  companyName: string
  companyLogo: string
  seniority: number
  roles: RoleItemTypes[]
}

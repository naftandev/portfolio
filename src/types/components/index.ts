export interface SectionTitleTypes {
  value: string
}

export interface ProjectCardTypes {
  title: string
  description: string
  picturePath: string
  url: string
  externalLinkIconTheme: string
  topPosition?: number
}

export interface RoleItemTypes {
  name: string
  type: string
  date: {
    startMonth: number
    startYear: number
    endMonth?: number
    endYear?: number
  }
  location: string
  description: string
}

export interface ExperienceItemTypes {
  companyName: string
  companyLogoPath: string
  roles: RoleItemTypes[]
}

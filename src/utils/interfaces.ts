interface IJobPositionCardProps {
  jobPosition: {
    title: string
    company: string
    startDate: string
    endDate: string
    location: string
    description: string
    skills: string[]
    responsibilities: string[]
  }
  setFilter: (term: string) => void
}

export type { IJobPositionCardProps }

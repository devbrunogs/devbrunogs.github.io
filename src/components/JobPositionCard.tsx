import { useState } from 'react'

interface IJobPositionCardProps {
  jobPosition: {
    title: string
    company: string
    startDate: string
    endDate: string
    location: string
    description: string
    skills: string[]
  }
}

const JobPositionCard = ({ jobPosition }: IJobPositionCardProps) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{jobPosition.title}</h3>
          <h4 className="text-xl">{jobPosition.company}</h4>
          <h5 className="text-lg">
            {jobPosition.startDate} - {jobPosition.endDate}
          </h5>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">{jobPosition.location}</h4>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg">{jobPosition.description}</p>
      </div>
      {jobPosition.skills.map((skill, index) => (
        <div className="border border-gray-100 h-7 px-3 max-w-full text-center rounded-full" key={index}>
          {skill}
        </div>
      ))}
    </div>
  )
}

export { JobPositionCard }

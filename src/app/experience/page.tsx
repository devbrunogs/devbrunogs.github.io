import { JobPositionCard } from '@/components/JobPositionCard'
import { jobPositions } from '@/utils/positions'

export default function About() {
  return (
    <main className="flex flex-col">
      {jobPositions.map((jobPosition, index) => (
        <JobPositionCard jobPosition={jobPosition} key={index} />
      ))}
    </main>
  )
}

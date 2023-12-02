import Image from 'next/image'

const jobPositions = [
  {
    title: 'Frontend Developer',
    company: 'Company 1',
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, urna sit amet aliquam sodales, enim urna luctus nunc, vitae hendrerit nisl elit sed sem. Ut sed turpis at nisl faucibus rutrum. Nullam euismod, nisl sit amet aliquam sodales, enim urna luctus nunc, vitae hendrerit nisl elit sed sem. Ut sed turpis at nisl faucibus rutrum.',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Storybook',
      'Figma',
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'Jira',
      'Confluence',
      'Trello',
      'Slack',
      'Discord',
      'Zoom',
      'Google Meet',
      'Microsoft Teams',
      'Google Workspace',
      'Microsoft Office',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe XD',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Adobe Audition',
      'Adobe Lightroom',
      'Adobe InDesign',
      'Adobe Dreamweaver',
      'Adobe Acrobat',
      'Adobe Bridge',
      'Adobe Media Encoder',
      'Adobe Character Animator',
      'Adobe Animate',
      'Adobe Dimension',
      'Adobe InCopy',
      'Adobe Fuse',
      'Adobe Prelude',
      'Adobe XD',
      'Adobe Spark',
      'Adobe Aero',
      'Adobe Fresco',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Stager',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Stager',
    ],
  },
]

export default function About() {
  return (
    <main className="flex flex-col">
      {jobPositions.map((jobPosition, index) => (
        <div className="flex flex-col" key={index}>
          <h1>{jobPosition.title}</h1>
          <h2>{jobPosition.company}</h2>
          <p>
            {jobPosition.startDate} - {jobPosition.endDate}
          </p>
          <p>{jobPosition.description}</p>
          <div className="flex flex-row flex-wrap">
            {jobPosition.skills.map((skill, index) => (
              <div className="border border-gray-100 h-7 px-3 max-w-full text-center rounded-full" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

import Link from "next/link"
import { ExternalLink } from "lucide-react"

// Real projects with descriptions
const projects = [
  {
    id: 1,
    title: "SnapSell",
    description: "Automation software for efficiency converting sales videos into Facebook marketplace listings, along with agentic features.",
    link: "https://devpost.com/software/snapsell",
  },
  {
    id: 2,
    title: "Autonomous Drone Delivery System",
    description: "End-to-end drone delivery system that connects a deep learning autonomous navigation algorithm with an e-commerce app.",
    link: "https://github.com/AutonomousDeliveryDrone/Autonomous-Drone-Delivery-System",
  },
  {
    id: 3,
    title: "Classroom Connections",
    description: "A user-friendly classroom chat application that fosters healthy communication between teachers and students; with embedded chatting, a Q/A system and a conflict calendar.",
    link: "https://github.com/codifyasia/ClassroomConnections",
  },
  {
    id: 4,
    title: "Epidemic Modeling Research",
    description: "Research paper on COVID-19 Modeling with Family Networks and Modified Containment Policies.",
    link: "https://github.com/MichaelPeng123/Epidemic-Modeling-Research",
  },
  {
    id: 5,
    title: "Plantar Fasciitis Prediction Research",
    description: "Plantar fasciitis risk diagnosis using an arduino coupled with machine learning analysis to encourage safe and efficient running form.",
    link: "https://github.com/MichaelPeng123/Plantar-Fasciitis-Prediction-Research",
  },
  {
    id: 6,
    title: "Food Procurements",
    description: "Comprehensive comparison of high school food prices for minimizing food procurement expenses through a web app that utilizes automated document conversion and ratio analysis.",
    link: "https://github.com/MichaelPeng123/foodprocurements",
  },
  {
    id: 7,
    title: "Race Global",
    description: "App that uses location tracking and real time data transfer to simulate remote races for runners and athletes.",
    link: "https://github.com/codifyasia/RaceGlobal",
  },
  {
    id: 8,
    title: "Snipes.io",
    description: "Team-based, IRL scavenger hunt game that aggregates periodic flicks throughout the day into a real time shared photo album for friend circles.",
    link: "https://github.com/GavinWon/snipes.io",
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium mb-3">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              View Project <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

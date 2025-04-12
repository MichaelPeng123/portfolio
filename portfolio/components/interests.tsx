import { Music, Book, Plane, Camera, Code, Coffee } from "lucide-react"

// Sample interests - replace with your own
const interests = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "Music",
    description: "Playing guitar and discovering new genres",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Reading",
    description: "Science fiction and philosophy books",
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    description: "Exploring new cultures and landscapes",
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Photography",
    description: "Street and landscape photography",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Coding",
    description: "Open source contributions and side projects",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Coffee",
    description: "Brewing and tasting different varieties",
  },
]

export default function Interests() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interests.map((interest, index) => (
        <div key={index} className="flex items-start space-x-5 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-3 bg-gray-100 rounded-full text-gray-700">{interest.icon}</div>
          <div>
            <h3 className="font-medium text-lg tracking-tight">{interest.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{interest.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function VideosPage() {
  const videos = [
    {
      title: "REBUILD Facility Tour",
      description: "Take a complete tour of our wellness center",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Zumba Class Highlights",
      description: "Experience the energy of our Zumba sessions",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Kickboxing Training",
      description: "See our kickboxing classes in action",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Ladies Fitness Program",
      description: "Exclusive look at our women-only fitness area",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Personal Training Session",
      description: "One-on-one training with Sripali Weerakkody",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Ice Bath Recovery",
      description: "Learn about our cold therapy treatments",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Nutritious Cafe Menu",
      description: "Discover our healthy meal options",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Rehabilitation Services",
      description: "Professional injury recovery programs",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Success Stories",
      description: "Hear from our satisfied members",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Video <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our facilities in action and get inspired by the REBUILD community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 overflow-hidden hover:border-orange-500 transition-colors duration-300"
            >
              <CardContent className="p-0">
                <div className="relative group cursor-pointer">
                  <div
                    className="w-full h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-orange-500 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Modern gym equipment", category: "Equipment" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Ladies only fitness area", category: "Ladies Fitness" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Zumba class in action", category: "Zumba" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Kickboxing training session", category: "Kickboxing" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Nutritious cafe meals", category: "Cafe" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Ice bath recovery area", category: "Recovery" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Personal training session", category: "Training" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Rehabilitation area", category: "Rehabilitation" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Group fitness class", category: "Group Fitness" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Wellness center exterior", category: "Facility" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Cardio equipment area", category: "Cardio" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Strength training zone", category: "Strength" },
  ]

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Photo <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a visual tour of our state-of-the-art facilities and see what makes REBUILD Wellness Center special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 overflow-hidden hover:border-orange-500 transition-colors duration-300"
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg">{image.category}</p>
                      <p className="text-gray-300 text-sm mt-1">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

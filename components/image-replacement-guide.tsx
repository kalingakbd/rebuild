"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ImageIcon, Video } from "lucide-react"

export default function ImageReplacementGuide() {
  const imageCategories = [
    {
      category: "Gym Equipment",
      files: ["gym-equipment-1.jpg", "gym-equipment-2.jpg", "cardio-area.jpg", "strength-training.jpg"],
      description: "Modern gym equipment, cardio machines, weight training areas",
    },
    {
      category: "Classes in Action",
      files: ["zumba-class.jpg", "kickboxing-session.jpg", "ladies-fitness.jpg", "group-training.jpg"],
      description: "Live shots of classes, training sessions, and group activities",
    },
    {
      category: "Facilities",
      files: ["cafe-area.jpg", "ice-bath.jpg", "rehabilitation-area.jpg", "facility-exterior.jpg"],
      description: "Cafe, ice baths, rehabilitation area, and exterior shots",
    },
    {
      category: "Owner & Training",
      files: ["sripali-training.jpg", "personal-session.jpg", "owner-action.jpg"],
      description: "Sripali Weerakkody in action, personal training sessions",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Image Replacement Guide</h2>
        <p className="text-gray-300">
          To replace placeholder images with your actual Instagram/Facebook photos, follow these steps:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <Download className="w-5 h-5" />
              Step 1: Download Images
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ol className="list-decimal list-inside space-y-2">
              <li>Visit your Instagram: @rebuild_bysripali_weerakkody_</li>
              <li>Right-click on images and "Save image as..."</li>
              <li>Download from Facebook page as well</li>
              <li>Organize images by category</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <ImageIcon className="w-5 h-5" />
              Step 2: Replace Files
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ol className="list-decimal list-inside space-y-2">
              <li>Place images in the /public folder</li>
              <li>Update image paths in the code</li>
              <li>Maintain aspect ratios for best results</li>
              <li>Optimize images for web (compress if needed)</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Recommended Image Categories:</h3>
        {imageCategories.map((category, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-orange-500">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-3">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.files.map((file, fileIndex) => (
                  <span key={fileIndex} className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">
                    {file}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-orange-500/10 border-orange-500/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Video className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h4 className="font-semibold text-orange-500 mb-2">Video Content</h4>
              <p className="text-gray-300">
                For the video gallery, you can embed Instagram Reels or upload MP4 files. Consider creating short
                promotional videos showcasing different facilities and classes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Music, Zap, Coffee, Utensils, Snowflake, Heart } from "lucide-react"

export default function HomePage() {
  const facilities = [
    {
      icon: Users,
      title: "Fitness for Ladies Only",
      description: "Dedicated women-only fitness sessions in a comfortable environment",
    },
    {
      icon: Dumbbell,
      title: "Fitness Unisex",
      description: "State-of-the-art equipment and training for all fitness levels",
    },
    {
      icon: Music,
      title: "Zumba",
      description: "High-energy dance fitness classes that make working out fun",
    },
    {
      icon: Zap,
      title: "Kick Boxing",
      description: "Build strength, endurance, and confidence with our kickboxing classes",
    },
    {
      icon: Coffee,
      title: "Cafe with Nutritious Food",
      description: "Healthy meals and refreshments to fuel your fitness journey",
    },
    {
      icon: Utensils,
      title: "Customized Meal Plans",
      description: "Personalized nutrition plans tailored to your fitness goals",
    },
    {
      icon: Snowflake,
      title: "Ice Baths",
      description: "Recovery and wellness through cold therapy treatments",
    },
    {
      icon: Heart,
      title: "Rehabilitation",
      description: "Professional rehabilitation services for injury recovery",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Image
                  src="/logo.jpeg"
                  alt="REBUILD Wellness Center Logo"
                  width={300}
                  height={300}
                  className="mx-auto lg:mx-0 mb-6"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your
                <span className="text-orange-500 block">Body & Mind</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Welcome to REBUILD Wellness Center, where fitness meets excellence. Led by renowned Sri Lankan cricketer
                Sripali Weerakkody, we offer world-class facilities and personalized training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/owner.jpeg"
                  alt="Sripali Weerakkody - Owner & Head Trainer"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-gray-500/20 rounded-lg transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Owner Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet Your <span className="text-orange-500">Head Trainer</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sripali Weerakkody brings years of professional cricket experience and fitness expertise to REBUILD Wellness
            Center. As a prominent Sri Lankan cricketer and certified trainer, Sripali combines athletic excellence with
            personalized coaching to help you achieve your fitness goals. Whether you're a beginner or an advanced
            athlete, you'll receive world-class guidance tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Facilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of fitness and wellness services designed to help you rebuild your best
              self.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors duration-300"
              >
                <CardContent className="p-6 text-center">
                  <facility.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{facility.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join the REBUILD community and discover what your body is truly capable of achieving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
            >
              <Link href="/gallery">View Our Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

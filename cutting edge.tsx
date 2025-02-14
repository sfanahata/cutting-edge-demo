import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] mb-12">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Premium knife on a wooden surface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Artisan Edge</h1>
          <p className="text-xl md:text-2xl mb-8">Precision-crafted knives for the discerning chef</p>
          <Button asChild size="lg">
            <Link href="#featured">Explore Our Collection</Link>
          </Button>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Artisan Edge</h2>
        <p className="text-lg text-gray-600">
          At Artisan Edge, we blend traditional craftsmanship with modern precision to create knives that are as
          beautiful as they are functional. Each piece is a work of art, designed to elevate your culinary experience.
        </p>
      </section>

      {/* Featured Products */}
      <section id="featured" className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Knives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Chef's Knife", "Santoku", "Paring Knife"].map((knife) => (
            <Card key={knife}>
              <CardHeader>
                <CardTitle>{knife}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`${knife} image`}
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/product/${knife.toLowerCase().replace("'", "").replace(" ", "-")}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="w-full max-w-4xl mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-semibold mb-4">Our Craftsmanship</h2>
          <p className="text-lg text-gray-600">
            With decades of experience and a passion for perfection, our master bladesmiths create each knife with
            meticulous attention to detail. From the selection of premium materials to the final polish, every step is
            performed with care and precision.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Craftsman forging a knife"
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Culinary Experience?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our full collection and find the perfect knife for your kitchen.
        </p>
        <Button asChild size="lg">
          <Link href="/collection">View Full Collection</Link>
        </Button>
      </section>
    </main>
  )
}


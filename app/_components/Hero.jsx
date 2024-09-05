import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div>
        <section className="bg-white text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
            <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
                Tutor AI
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-primary">
                Generate new courses with a click of a button with our AI powered course generator.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button>Get Started</Button>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Hero

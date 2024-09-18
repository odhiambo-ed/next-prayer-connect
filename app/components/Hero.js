'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import PrayerForm from './PrayerForm'

export default function Hero() {
    const heroTextRef = useRef(null)
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 200], [1, 0])

    useEffect(() => {
        if (heroTextRef.current) {
            gsap.from(heroTextRef.current, {
                duration: 2,
                opacity: 0,
                y: 50,
                ease: "power3.out"
            })
        }
    }, [])

    return (
        <motion.div
            className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                opacity
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-white text-center p-8 max-w-3xl">
                <motion.h1
                    ref={heroTextRef}
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Share Your Prayer
                </motion.h1>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Join our community in lifting each other up through prayer
                </motion.p>
                <PrayerForm />
            </div>
        </motion.div>
    )
}
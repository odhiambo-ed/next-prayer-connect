'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Play, Pause } from 'lucide-react'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(true)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2 // Set volume to 20%
        }
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="bg-purple-600 text-white p-2">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-sm">Background Music</span>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlay}
                    className="text-white hover:text-purple-200"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
            </div>
            <audio ref={audioRef} loop autoPlay>
                <source src="/placeholder.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
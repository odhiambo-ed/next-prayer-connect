'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Play, Pause } from 'lucide-react'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [audioError, setAudioError] = useState(false)
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
                audioRef.current.play().catch(error => {
                    console.error("Error playing audio:", error)
                    setAudioError(true)
                })
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
                    disabled={audioError}
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
            </div>
            <audio ref={audioRef} loop>
                <source src="../Holy-Communion.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {audioError && <p className="text-red-300 text-xs mt-2">Failed to load audio file. Please check the file path.</p>}
        </div>
    )
}
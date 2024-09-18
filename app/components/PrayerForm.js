'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { usePrayerRequests } from '../lib/prayerRequests'

export default function PrayerForm() {
    const [newRequest, setNewRequest] = useState("")
    const { addPrayerRequest } = usePrayerRequests()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newRequest.trim()) {
            addPrayerRequest(newRequest.trim())
            setNewRequest("")
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                    placeholder="Type your prayer request here..."
                    value={newRequest}
                    onChange={(e) => setNewRequest(e.target.value)}
                    className="min-h-[100px] bg-white bg-opacity-80 text-black placeholder-gray-500"
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit Prayer Request
                </Button>
            </form>
        </motion.div>
    )
}
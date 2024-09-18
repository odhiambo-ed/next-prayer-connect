'use client'

import { useState } from 'react'

export function usePrayerRequests() {
    const [requests, setRequests] = useState(Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        text: `Prayer request ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        prayerCount: Math.floor(Math.random() * 10)
    })))

    const handlePrayerCount = (id) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, prayerCount: req.prayerCount + 1 } : req
        ))
    }

    return { requests, handlePrayerCount }
}
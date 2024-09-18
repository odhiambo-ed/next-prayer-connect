'use client'

import { useState, useEffect } from 'react'

export function usePrayerRequests() {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        // Load existing prayers from localStorage on component mount
        const storedPrayers = localStorage.getItem('prayerRequests')
        if (storedPrayers) {
            setRequests(JSON.parse(storedPrayers))
        }
    }, [])

    const addPrayerRequest = (newRequest) => {
        const updatedRequests = [
            { id: Date.now(), text: newRequest, prayerCount: 0 },
            ...requests
        ]
        setRequests(updatedRequests)
        localStorage.setItem('prayerRequests', JSON.stringify(updatedRequests))
    }

    const handlePrayerCount = (id) => {
        const updatedRequests = requests.map(req =>
            req.id === id ? { ...req, prayerCount: req.prayerCount + 1 } : req
        )
        setRequests(updatedRequests)
        localStorage.setItem('prayerRequests', JSON.stringify(updatedRequests))
    }

    return { requests, addPrayerRequest, handlePrayerCount }
}
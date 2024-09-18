'use client'

import { useState } from 'react'
import PrayerRequestCard from './PrayerRequestCard'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { usePrayerRequests } from '../lib/prayerRequests'

const samplePrayers = [
    { id: 'sample1', text: "Please pray for my grandmother's health as she undergoes surgery this week.", prayerCount: 24 },
    { id: 'sample2', text: "Seeking prayers for guidance in my career decisions.", prayerCount: 18 },
    { id: 'sample3', text: "Praying for peace and healing in areas affected by natural disasters.", prayerCount: 37 },
    { id: 'sample4', text: "Please join me in praying for my friend who is battling depression.", prayerCount: 29 }
]

export default function PrayerRequestList() {
    const [currentPage, setCurrentPage] = useState(1)
    const { requests, handlePrayerCount } = usePrayerRequests()

    const requestsPerPage = 16 // Reduced to make room for sample prayers
    const totalPages = Math.ceil(requests.length / requestsPerPage)

    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Featured Prayer Requests</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {samplePrayers.map((prayer) => (
                        <PrayerRequestCard key={prayer.id} request={prayer} onPray={() => { }} />
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Community Prayer Requests</h2>
            {requests.length === 0 ? (
                <p className="text-center text-gray-500 my-8">No community prayer requests yet. Be the first to submit one!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {requests
                        .slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage)
                        .map((request) => (
                            <PrayerRequestCard key={request.id} request={request} onPray={handlePrayerCount} />
                        ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(i + 1)}
                                    isActive={currentPage === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </>
    )
}
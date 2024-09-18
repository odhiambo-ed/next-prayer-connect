'use client'

import { useState } from 'react'
import PrayerRequestCard from './PrayerRequestCard'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { usePrayerRequests } from '../lib/prayerRequests'

export default function PrayerRequestList() {
    const [currentPage, setCurrentPage] = useState(1)
    const { requests, handlePrayerCount } = usePrayerRequests()

    const requestsPerPage = 20
    const totalPages = Math.ceil(requests.length / requestsPerPage)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {requests
                    .slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage)
                    .map((request) => (
                        <PrayerRequestCard key={request.id} request={request} onPray={handlePrayerCount} />
                    ))}
            </div>

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
        </>
    )
}
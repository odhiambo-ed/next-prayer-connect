'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart } from 'lucide-react'

export default function PrayerRequestCard({ request, onPray }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardHeader className="p-4 bg-purple-100">
                    <CardDescription className="text-sm text-purple-600 font-semibold">Prayer Request</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                    <p className="text-sm text-gray-700 line-clamp-3">{request.text}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center bg-purple-50">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onPray(request.id)}
                            className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 hover:bg-purple-100 transition-colors duration-300"
                        >
                            <Heart size={14} />
                            <span className="text-xs">Pray</span>
                        </Button>
                    </motion.div>
                    <motion.span
                        className="text-xs text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={request.prayerCount} // This will trigger the animation when the count changes
                    >
                        {request.prayerCount} prayers
                    </motion.span>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
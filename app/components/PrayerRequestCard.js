import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart } from 'lucide-react'

export default function PrayerRequestCard({ request, onPray }) {
    return (
        <Card className="bg-white shadow-md">
            <CardHeader className="p-4">
                <CardDescription className="text-sm text-purple-600">Prayer Request</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
                <p className="text-sm text-gray-700 line-clamp-3">{request.text}</p>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPray(request.id)}
                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-700"
                >
                    <Heart size={14} />
                    <span className="text-xs">Pray</span>
                </Button>
                <span className="text-xs text-gray-500">{request.prayerCount} prayers</span>
            </CardFooter>
        </Card>
    )
}
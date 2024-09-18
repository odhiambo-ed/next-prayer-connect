import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function ShareButtons() {
    return (
        <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Share PrayerConnect</h3>
            <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
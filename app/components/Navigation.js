import Link from 'next/link'
import { PrayingHands } from 'lucide-react'

export default function Navigation() {
    return (
        <nav className="bg-purple-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <PrayingHands size={24} />
                    <span className="font-bold text-xl">PrayerConnect</span>
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-purple-200">Home</Link>
                    <Link href="/about" className="hover:text-purple-200">About</Link>
                </div>
            </div>
        </nav>
    )
}
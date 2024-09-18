import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-purple-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 PrayerConnect. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <Link href="../privacy" className="hover:text-purple-200">Privacy Policy</Link>
                    <Link href="../terms" className="hover:text-purple-200">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
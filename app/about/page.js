import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Navigation />
            <main className="flex-grow container mx-auto p-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-center my-8 text-purple-800">About PrayerConnect</h1>
                <p className="text-lg text-gray-700 mb-4">
                    PrayerConnect is a community-driven platform dedicated to bringing people together through the power of prayer.
                    Our mission is to create a space where individuals can share their prayer requests, offer support to others,
                    and experience the strength of collective faith.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Founded in 2023, PrayerConnect aims to harness the potential of technology to foster spiritual connections
                    and provide comfort to those in need. We believe in the transformative power of prayer and the importance
                    of supporting one another in times of joy, sorrow, and everything in between.
                </p>
                <p className="text-lg text-gray-700">
                    Join our growing community and experience the impact of shared prayer. Together, we can make a difference
                    in each others lives, one prayer at a time.
                </p>
            </main>
            <Footer />
        </>
    )
}
import Navigation from './components/Navigation'
import AudioPlayer from './components/AudioPlayer'
import Hero from './components/Hero'
import PrayerRequestList from './components/PrayerRequestList'
import ShareButtons from './components/ShareButtons'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <AudioPlayer />
      <Hero />
      <main className="flex-grow container mx-auto p-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center my-8 text-purple-800">Recent Prayer Requests</h2>
        <PrayerRequestList />
        <ShareButtons />
      </main>
      <Footer />
    </>
  )
}
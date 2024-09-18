import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function PrivacyPolicy() {
    return (
        <>
            <Navigation />
            <main className="flex-grow container mx-auto p-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-center my-8 text-purple-800">Privacy Policy</h1>
                <p className="text-lg text-gray-700 mb-4">
                    At PrayerConnect, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">Information We Collect</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you create an account, submit a prayer request, or contact us for support.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">How We Use Your Information</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and PrayerConnect.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">Data Security</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We implement appropriate technical and organizational measures to protect the security of your personal information.
                </p>
                <p className="text-lg text-gray-700 mt-8">
                    For more detailed information about our privacy practices, please contact us.
                </p>
            </main>
            <Footer />
        </>
    )
}
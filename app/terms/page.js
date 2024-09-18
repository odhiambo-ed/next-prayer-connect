import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function TermsOfService() {
    return (
        <>
            <Navigation />
            <main className="flex-grow container mx-auto p-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-center my-8 text-purple-800">Terms of Service</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to PrayerConnect. By using our service, you agree to these terms. Please read them carefully.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">Use of Service</h2>
                <p className="text-lg text-gray-700 mb-4">
                    You must follow any policies made available to you within the Service. Don&apos;t misuse our Services. For example, don&apos;t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">Your PrayerConnect Account</h2>
                <p className="text-lg text-gray-700 mb-4">
                    You may need a PrayerConnect Account in order to use some of our Services. You may create your own PrayerConnect Account, or your PrayerConnect Account may be assigned to you by an administrator, such as your employer or educational institution.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-700">Privacy and Copyright Protection</h2>
                <p className="text-lg text-gray-700 mb-4">
                    PrayerConnect&apos;s privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that PrayerConnect can use such data in accordance with our privacy policies.
                </p>
                <p className="text-lg text-gray-700 mt-8">
                    For more detailed information about our terms of service, please contact us.
                </p>
            </main>
            <Footer />
        </>
    )
}
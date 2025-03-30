import { StatisticsSection } from "@/components/statistics-section"

export default function NotifichePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Notifiche</h1>

        {/* Chat section would be here */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Chat</h2>
          <p className="text-gray-300">Contenuto della chat...</p>
        </div>

        {/* Statistics section */}
        <StatisticsSection />
      </div>
    </div>
  )
}


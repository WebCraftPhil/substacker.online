import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SubStacker
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Take control of your subscriptions. Track, manage, and optimize your monthly expenses with SubStacker for iOS.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download on App Store
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Track Subscriptions</h3>
            <p className="text-gray-600">
              Keep track of all your subscriptions in one place. Never lose sight of what you're paying for.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor Spending</h3>
            <p className="text-gray-600">
              See exactly how much you're spending monthly. Get insights into your subscription costs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Reminders</h3>
            <p className="text-gray-600">
              Get notified before renewals. Never be surprised by unexpected charges again.
            </p>
          </div>
        </div>
      </div>

      {/* App Screenshot Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple. Powerful. Beautiful.
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Designed for iOS with a clean, intuitive interface
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

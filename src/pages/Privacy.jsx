function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-4">Last updated: February 6, 2026</p>
            <p className="text-gray-700 mb-4">
              At SubStacker, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our iOS application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-700 mb-2">
              SubStacker is designed with privacy in mind. The subscription data you enter into the app (subscription names, costs, renewal dates) is stored locally on your device only.
            </p>
            <p className="text-gray-700">
              We do not collect, store, or transmit your personal subscription data to any external servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Storage</h2>
            <p className="text-gray-700 mb-2">
              All your subscription information is stored locally on your iOS device using secure iOS data storage mechanisms. Your data is encrypted and protected by your device's security features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Analytics</h2>
            <p className="text-gray-700">
              We may collect anonymous usage statistics to help improve the app, but this data is aggregated and does not contain any personally identifiable information or details about your subscriptions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-gray-700">
              SubStacker does not integrate with any third-party services that would have access to your subscription data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Deletion</h2>
            <p className="text-gray-700">
              You can delete all your data at any time by uninstalling the app from your device. This will permanently remove all subscription data stored on your device.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a href="mailto:privacy@substacker.online" className="text-blue-600 hover:text-blue-700">
              privacy@substacker.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

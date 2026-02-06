function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Support
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I add a subscription?
              </h3>
              <p className="text-gray-600">
                Tap the "+" button on the main screen, enter your subscription details including name, cost, and renewal date. SubStacker will automatically track it for you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I set up renewal reminders?
              </h3>
              <p className="text-gray-600">
                Yes! SubStacker can send you notifications before your subscriptions renew. You can customize reminder timing in the app settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. All your subscription data is stored locally on your device and is encrypted. We take your privacy seriously.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What iOS versions are supported?
              </h3>
              <p className="text-gray-600">
                SubStacker requires iOS 15.0 or later. It works on iPhone and iPad.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Reach out to our support team.
          </p>
          <a
            href="mailto:support@substacker.online"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default Support;

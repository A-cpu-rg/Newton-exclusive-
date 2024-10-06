import React from 'react';

const TermsOfService = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url('https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?t=st=1727521159~exp=1727524759~hmac=70f6da074721c5d49989c43c30bb05fd371a5658d9301be83137d7a39dd61229&w=1380')` }}
    >
      <div className="max-w-md mx-auto p-4 bg-white bg-opacity-80 rounded-lg shadow-md font-mono">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Terms of Service for Newton Flashcards</h1>
        <p className="mb-4 text-gray-700"><strong>Effective Date:</strong> September 28, 2024</p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By using the Newton Flashcards application, you agree to these Terms of Service. If you do not agree, please do not use our service.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">2. Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">3. User Accounts</h2>
        <p className="mb-4 text-gray-700">
          You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">4. User Conduct</h2>
        <p className="mb-4 text-gray-700">
          You agree not to engage in any prohibited activities, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Using the service for any unlawful purpose.</li>
          <li>Impersonating any person or entity.</li>
          <li>Interfering with or disrupting the service.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">5. Intellectual Property</h2>
        <p className="mb-4 text-gray-700">
          All content, features, and functionality of the service, including but not limited to text, graphics, logos, and software, are the exclusive property of Newton Flashcards and protected by applicable laws.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">6. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          Newton Flashcards shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms of Service, please contact us at support@newtonflashcards.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;

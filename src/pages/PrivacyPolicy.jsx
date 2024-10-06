import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url('https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?t=st=1727521159~exp=1727524759~hmac=70f6da074721c5d49989c43c30bb05fd371a5658d9301be83137d7a39dd61229&w=1380')` }}
    >
      <div className="max-w-md mx-auto p-4 bg-white bg-opacity-80 rounded-lg shadow-md font-mono">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Privacy Policy for Newton Flashcards</h1>
        <p className="mb-4 text-gray-700"><strong>Effective Date:</strong> September 28, 2024</p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">1. Introduction</h2>
        <p className="mb-4 text-gray-700">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">2. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li><strong>Personal Information:</strong> Name, email, and password upon account creation.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and visit times.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">3. Use of Your Information</h2>
        <p className="mb-4 text-gray-700">
          We may use your information to:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Maintain our service</li>
          <li>Notify you of changes</li>
          <li>Provide customer support</li>
          <li>Improve our service</li>
          <li>Monitor usage</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">4. Disclosure of Your Information</h2>
        <p className="mb-4 text-gray-700">
          We do not sell or transfer your personal information to outside parties without consent, except as required by law.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">5. Security of Your Information</h2>
        <p className="mb-4 text-gray-700">
          We strive to protect your personal information, but no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">6. Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy and will notify you of any changes by posting the new version here.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">7. Contact Us</h2>
        <p className="text-gray-700">
          For questions about this Privacy Policy, please contact us at support@newtonflashcards.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

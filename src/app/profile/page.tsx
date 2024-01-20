'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

import photoUrl from './profile.jpg'
import placeholder from './placeholder.jpg'

const ProfilePage: React.FC = () => {
  // Sample data
  const name = 'Mo Rokeeb';
  const verified = true;
  const approvedContacts = [
    { name: 'Misha', feedback: 'Great person to work with!', photoUrl: placeholder.src },
    { name: 'Anti', feedback: 'Excellent communication skills', photoUrl: placeholder.src},
    { name: 'Andy', feedback: 'Highly recommended', photoUrl: placeholder.src },
  ];

  const handleSettingsClick = () => {
    // Handle navigation to settings page
    console.log('Navigate to settings page');
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">
      <div className="flex items-center mb-6">
        <img src={photoUrl.src} alt="Your Photo" className="rounded-full w-16 h-16 mr-4" />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          {verified && <span className="text-green-500">Verified</span>}
        </div>
      </div>

      <Link
        href='setting'
        onClick={handleSettingsClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600"
      >
        Settings
      </Link>

      <div>
        <h3 className="text-xl font-semibold mb-4">Approved Contacts</h3>

        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-3 gap-8">
            {approvedContacts.map((profile, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={profile.photoUrl}
                      alt={profile.name}
                      width={150} // Set the desired width
                      height={150} // Set the desired height
                      className="rounded-full"
                    />
                  </div>
                  {/* Optional: Add a border or shadow to the photo */}
                </div>
                <h2 className="text-lg">{profile.name}</h2>
                <h2 className="text-lg">{profile.feedback}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;

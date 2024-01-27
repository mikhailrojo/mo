'use client'
import React, {useState} from 'react';
import Link from 'next/link'
import Image from 'next/image';

import photoUrl from '../assets/profile.jpg'
import andy from '../assets/andy.png'
import jack from '../assets//jack.jpeg'
import sandra from '../assets/sandra.png'

const ReviewsPage: React.FC = () => {
  // Sample data
  const name = 'Mo Rokeeb';
  const approvedContacts = [
    {name: 'Andy Curtis', feedback: 'Great person to work with!', photoUrl: andy.src},
    {name: 'Jack Brooks', feedback: 'Excellent communication skills', photoUrl: jack.src},
    {name: 'Sandra Bluemont', feedback: 'Highly recommended', photoUrl: sandra.src},
  ];

  const handleSettingsClick = () => {
    // Handle navigation to settings page
    console.log('Navigate to settings page');
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">


      <div className=' my-8'>
        <h3 className="text-xl font-semibold mb-4">Left by my</h3>

        <div className="flex flex-start items-center">
          <div className="grid grid-cols-3 gap-8">
            {approvedContacts.map((profile, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <div className="rounded-full overflow-hidden text-center">
                    <Image
                      src={profile.photoUrl}
                      alt={profile.name}
                      width={150} // Set the desired width
                      height={150} // Set the desired height
                      className="rounded-full display inline-block"
                    />
                  </div>
                </div>
                <h2 className="text-lg font-bold">{profile.name}</h2>
                <h2 className="text-lg italic">{profile.feedback}</h2>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold my-4">Left on me</h3>

        <div className="flex flex-start items-center">
          <div className="grid grid-cols-3 gap-8">
            {approvedContacts.map((profile, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <div className="rounded-full overflow-hidden text-center">
                    <Image
                      src={profile.photoUrl}
                      alt={profile.name}
                      width={150} // Set the desired width
                      height={150} // Set the desired height
                      className="rounded-full display inline-block"
                    />
                  </div>
                </div>
                <h2 className="text-lg font-bold">{profile.name}</h2>
                {/*<h2 className="text-lg italic">{profile.feedback}</h2>*/}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ReviewsPage

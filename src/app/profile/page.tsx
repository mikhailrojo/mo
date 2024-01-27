'use client'
import React, {useState} from 'react';
import Link from 'next/link'
import Image from 'next/image';

import photoUrl from './assets/profile.jpg'
import placeholder from './assets/placeholder.jpg'
import andy from './assets/andy.png'
import jack from './assets//jack.jpeg'
import sandra from './assets/sandra.png'

const ProfilePage: React.FC = () => {
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
      <div className="flex items-center mb-6">
        <img src={photoUrl.src} alt="Your Photo" className="rounded-full w-48 h-48 mr-4"/>
        <div>
          <h2 className="text-2xl font-semibold mb-5">{name}</h2>
          <p className="">Verified since 01.01.2024</p>
          <Link
            href='profile/reviews'
          >
            <button
              className="px-4 my-5  text-m p font-semibold rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              My reviews
            </button>

          </Link>

        </div>
      </div>

      <div className=' my-8'>
        <h3 className="text-xl font-semibold mb-4">My contacts</h3>

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
        <h3 className="text-xl font-semibold my-4">Invite</h3>

        <EmailInput/>

      </div>

    </div>
  );
};

export default ProfilePage;


const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    alert(`Submitting email: ${email}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="email"
        placeholder="Enter tenant email"
        value={email}
        onChange={handleEmailChange}
        className="border p-2 rounded-md"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Invite
      </button>
    </div>
  );
};


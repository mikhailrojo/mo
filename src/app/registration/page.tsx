'use client'

import React, { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    documentNumber: '',
    skypeName: '',
    agreedToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted with data:', formData);
  };


  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-600">
            Document Number
          </label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="skypeName" className="block text-sm font-medium text-gray-600">
            Skype Name
          </label>
          <input
            type="text"
            id="skypeName"
            name="skypeName"
            value={formData.skypeName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreedToTerms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">
              I agree to the terms of usage
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

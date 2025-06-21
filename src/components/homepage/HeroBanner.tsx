"use client";
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build or scale up
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                your development team
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <p className="text-lg lg:text-xl text-gray-700 font-medium">
                in weeks, not months
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300 !bg-yellow-400 !text-black">
                Book now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Development team working together"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;


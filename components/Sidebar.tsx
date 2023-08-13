'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';

const Sidebar = () => {
  const [active, setActive] = useState('profile');

  const handleProfile = () => {
    setActive('profile');
  };

  const handleConnections = () => {
    setActive('connections');
  };
  return (
    <div>
      <div className="mb-[36px] mt-[28px]">
        <span className="text-2xl px-8 py-3 border rounded-lg">My Dashboard</span>
      </div>
      <ol className="flex flex-col justify-center items-start mt-[28px]">
        <li></li>
        <li onClick={handleProfile}>
          <Link href="/" className="flex items-center mb-[22px] cursor-pointer">
            <span className="text-2xl mr-[11px] ">
              <GoChevronRight />
            </span>

            <span
              className={` text-2xl text-indigo-950 px-8 py-3 ${
                active === 'profile' ? 'border border-indigo-800 rounded-lg' : ''
              }`}
            >
              My Profile
            </span>
          </Link>
        </li>
        <li onClick={handleConnections}>
          <Link href="/connections" className="flex items-center mb-[22px] cursor-pointer">
            <span className="text-2xl mr-[11px]">
              <GoChevronRight />
            </span>
            <span
              className={` text-2xl text-indigo-950 px-8 py-3 ${
                active === 'connections' ? 'border border-indigo-800 rounded-lg' : ''
              }`}
            >
              My Connections
            </span>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;

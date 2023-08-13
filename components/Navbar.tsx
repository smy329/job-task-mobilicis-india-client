import Image from 'next/image';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { GoBell } from 'react-icons/go';

const Navbar = () => {
  return (
    <nav className=" w-full flex justify-end items-center py-4 border-b-2">
      <div className="text-[24px] text-slate-700 mr-3 object-center">
        <GoBell />
      </div>
      <div className="bg-white bg-opacity-50 rounded-lg border border-indigo-50 justify-start items-center gap-3 inline-flex py-[10px] px-2">
        <div className="bg-red-300 rounded-md justify-center items-center">
          <Image width={38} height={38} src="/assets/images/profile-img.svg" alt="profile image" />
        </div>
        <div className="grow shrink basis-0 flex-col  items-start inline-flex">
          <div className="text-slate-700 text-[10px] font-medium">Welcome back,</div>
          <div className="text-slate-700 text-[17px] font-medium">Vishnu Swaroop</div>
        </div>
        <div className="h-6 w-6">
          <FaAngleDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

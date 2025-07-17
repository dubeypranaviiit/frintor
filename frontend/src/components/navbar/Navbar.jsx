// import { Fragment } from 'react'
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
// } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Btech', href: '/btech/college', current: false },
//   { name: 'Mtech', href: '/mtech/college', current: false },
//   { name: 'MBA', href: '/mba/college', current: false },
//   { name: 'Jobs', href: '/jobs', current: false },
//   { name: 'Events', href: '/events', current: false },
//   { name: 'Stem', href: '/stem', current: false },
//   { name: 'Startups', href: '/startups', current: false },
//   { name: 'IIT', href: '/colleges/iit', current: false },
//   { name: 'IIM', href: '/colleges/iim', current: false },

// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white fixed_custom top-0 w-full z-10 shadow-xl rounded-b-3xl mb-1">
//       {({ open }) => (
//         <>
//           <div className="mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <DisclosureButton >
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6 me-1" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6 me-1" aria-hidden="true" />
//                   )}
//                 </DisclosureButton>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   {/* <img
//                     className="h-8 w-auto "
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   /> */}
//                 </div>
//                 <div className="hidden lg:ml-6 lg:block">
//                   <div className="flex space-x-2 text-sm ">
//                     {navigation.map((item) => (
//                       <Link

//                         key={item.name}
//                         to ={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-500 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className='flex gap-5'>
//               <a class="bg-white border border-gray-300 text-gray-800 font-semibold py-1 px-4 rounded-lg hover:cursor-pointer hover:bg-slate-200 " href = '/login'>
//               Login
//               </a>

//               <a class="bg-white border border-gray-300 text-gray-800 py-1 px-4 font-semibold rounded-lg hover:cursor-pointer hover:bg-slate-200 me-4" href='/signup'>
//               Sign Up

//               </a>
//               </div>
//             </div>
//           </div>

//           <DisclosurePanel className="lg:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <DisclosureButton
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-500 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </DisclosureButton>
//               ))}
//             </div>
//           </DisclosurePanel>
//         </>
//       )}
//     </Disclosure>
//   )
// }

import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Btech', href: '/btech/college', current: false },
  { name: 'Mtech', href: '/mtech/college', current: false },
  { name: 'MBA', href: '/mba/college', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Stem', href: '/stem', current: false },
  { name: 'Startups', href: '/startups', current: false },
  { name: 'IIT', href: '/colleges/iit', current: false },
  { name: 'IIM', href: '/colleges/iim', current: false },
];
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState(null);
  const navigationM = useNavigate();
  useEffect(() => {

    const tokenData = JSON.parse(localStorage.getItem('accessToken'));
    if (tokenData && new Date(tokenData.expiresAt) > new Date()) {
      setAccessToken(tokenData.token);
    } else {
      localStorage.removeItem('accessToken');
      setAccessToken(null);
    }
  }, [location, accessToken]); // Updated dependency array

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    navigationM('/');
    
  };

  return (
    <Disclosure as="nav" className="bg-white relative top-0 w-full z-10 shadow-xl rounded-b-3xl mb-1">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="lg:hidden">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 me-1" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 me-1" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Your company logo or brand */}
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden lg:ml-2 lg:block">
                  <div className="flex space-x-2 text-sm">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? 'bg-[#2C73D2] text-white'
                            : 'text-gray-700 hover:bg-[#74aef6] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                {accessToken ? (
                  <div className="flex ">
                    <button
                      onClick={logout}
                     className='button-modify'
                    >
                      Logout
                    </button>
                    <button   className="button-modify text-white bg-blue-600 border-none hover:border-none ">
                      <Link 
                      className='text-white'
                        to="/dashboard"
                      
                      >
                        Dashboard
                      </Link>
                    </button>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="bg-white border border-blue-500 text-gray-800 font-semibold py-1 px-4 rounded-lg hover:cursor-pointer hover:bg-slate-200 me-4"
                  >
                    Sign In
                  </a>
                )}
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-blue-600 text-white block rounded-md px-3 py-2 text-base font-medium'
                      : 'text-gray-700 hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                    'block'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

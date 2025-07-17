import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 relative bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  justify-between items-center">
          <div className="mb-4 md:mb-0 text-center">
            <h2 className="text-2xl font-bold">Frintor</h2>
            <p className="text-sm">© 2024 Frintor. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-white">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
            <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706H9.692v-3.58h3.128V8.309c0-3.1 1.892-4.789 4.656-4.789 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.314h3.588l-.467 3.58h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.569a10.004 10.004 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.184A4.916 4.916 0 0 0 16.616 3a4.92 4.92 0 0 0-4.917 4.917c0 .385.045.761.126 1.124C7.691 8.803 4.066 6.9 1.64 4.196a4.82 4.82 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.099a4.904 4.904 0 0 1-2.228-.616v.063a4.923 4.923 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.416 9.86 9.86 0 0 1-6.102 2.1c-.398 0-.79-.023-1.174-.069A13.93 13.93 0 0 0 7.548 21c9.057 0 14.01-7.496 14.01-13.986 0-.215-.004-.428-.014-.641a10.025 10.025 0 0 0 2.407-2.549l.002-.003z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24H22.23C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.23 0zm-6.468 20.452h-3.943v-6.145c0-1.463-.027-3.349-2.034-3.349-2.034 0-2.344 1.585-2.344 3.237v6.257H5.965V8.743h3.787v1.597h.053c.528-.999 1.816-2.05 3.737-2.05 3.992 0 4.728 2.63 4.728 6.049v6.113zM3.581 7.141a2.258 2.258 0 1 1 .003-4.516 2.258 2.258 0 0 1-.003 4.516zM5.421 20.452H1.74V8.743h3.681v11.709z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

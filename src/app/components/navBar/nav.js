import React, { useState, useEffect, useRef } from "react";
import { routes } from "@/app/routes";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavFocused, setIsNavFocused] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);
  
  const navRef = useRef(null);
  const isDesktop = useRef(false);

  // Check if desktop
  useEffect(() => {
    const checkIfDesktop = () => {
      isDesktop.current = window.innerWidth >= 768;
      setShowToggleButton(!isDesktop.current);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') setIsNavVisible(true);
      if (e.key === 'ArrowUp') setIsNavVisible(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavFocus = () => {
    setIsNavFocused(true);
    setIsNavVisible(true);
  };

  const handleNavBlur = () => {
    setIsNavFocused(false);
  };

  const handleToggleClick = () => {
    setIsNavVisible(prev => !prev);
  };

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsSidebarOpen(false);
    setIsProductOpen(false);
    setIsResourcesOpen(false);
  };

  const DesktopDropdown = ({ items }) => (
    <div className="absolute left-0 top-6 mt-0 w-64 bg-[#0e131c] border-2 border-[#1e283b] rounded-lg py-3 z-10">
      <ul>
        {Object.entries(items).map(([key, value]) => (
          <li key={key} className="hover:bg-gray-700 px-6 py-3">
            <a href={value} className="block text-left">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const MobileDropdownButton = ({ title, isOpen, onClick }) => (
    <button
      onClick={onClick}
      className="p-4 hover:bg-gray-700 w-full rounded flex items-center justify-between"
      aria-expanded={isOpen}
    >
      <span className="text-lg">{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <>
      {/* Desktop Navigation - Always visible unless hidden by keyboard */}
      <div 
  ref={navRef}
  className={`fixed top-0 flex items-center w-full left-1/2 -translate-x-1/2 transition-transform duration-300 ${
    isNavVisible ? "translate-y-0" : "-translate-y-full"
  } z-20 px-4`}
  onFocus={handleNavFocus}
  onBlur={handleNavBlur}
  tabIndex="0"
>
  {/* Left edge - Logo */}
  <a href={routes.home} className="mt-3 w-24 h-12 flex-shrink-0">
    <img
      src="../../Nav_logo.png"
      alt="NovaEdge Media's logo"
      className="md:block object-contain hidden border-3"
      style={{ borderColor: "#1e283b" }}
    />
  </a>

  {/* Center - Navigation */}
  <nav className="hidden md:flex mt-3 items-center  justify-center flex-grow">
    <style>{`li { opacity: 1; display: flex; align-items: center; }`}</style>
    
    <ul className="flex justify-evenly items-center w-[25rem] p-[6px] border-2"
        style={{ backgroundColor: "rgba(14, 19, 28, 0.7)", borderColor: "#1e283b", borderRadius: "5px 0 0 5px" }}>
      <li className="relative"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}>
        <button className="hover:text-gray-300 text-lg flex items-center gap-2" aria-expanded={isProductOpen}>
          Product
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isProductOpen && <DesktopDropdown items={routes.product} />}
      </li>
      <li><a href={routes.about} className="text-lg">Company</a></li>
      <li><a href={routes.pricing} className="text-lg">Pricing</a></li>
      <li className="relative"
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}>
        <button className="hover:text-gray-300 flex text-lg items-center gap-2" aria-expanded={isResourcesOpen}>
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isResourcesOpen && <DesktopDropdown items={routes.resources} />}
      </li>
    </ul>
  </nav>
    <button 
      className="bg-white md:block hidden text-black w-[7.5em] px-1 py-2 text-sm font-semibold rounded-full border hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
    >
      <a href="#">Get Started</a>
    </button>

</div>

      {/* Toggle Button (visible when nav is hidden by keyboard) */}
      {(!isNavVisible || showToggleButton) && (
        <button
          onClick={handleToggleClick}
          onMouseEnter={() => setIsNavVisible(true)}
          className="fixed md:block hidden  top-0 left-1/2 transform -translate-x-1/2 p-2 bg-[#0e131c] border-2 border-t-0 border-[#1e283b] rounded-b-lg z-20 hover:bg-[#1e283b] transition-colors"
          aria-label={isNavVisible ? 'Hide navigation' : 'Show navigation'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform duration-300 ${isNavVisible ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

        {/* Overlay (behind sidebar) */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30"  // Lower z-index than sidebar
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar (front layer) */}
        <div 
          className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            fixed top-0 left-0 w-full h-screen text-white p-4 transition-transform duration-300 
            z-40 pointer-events-auto overflow-y-auto`}
          style={{ backgroundColor: "#0e131c", border: "2px solid #1e283b" }}
        >
        
        <button 
          onClick={() => setIsSidebarOpen(false)} 
          className="absolute top-4 right-4 text-2xl"
        >
          ✖
        </button>
        
        <a href={routes.home} onClick={handleMobileLinkClick} className="my-16 block  w-[14rem] h-[4rem] flex-shrink-0">
          <img
            src="../../Nav_logo.png"
            alt="NovaEdge Media's logo"
            className="object-cover border-3"
            style={{ borderColor: "#1e283b" }}
          />
        </a>
        
        <ul className="mt-6 flex flex-col items-stretch">
          <li className="w-full flex flex-col">
            <MobileDropdownButton
              title="Product"
              isOpen={isProductOpen}
              onClick={() => setIsProductOpen(!isProductOpen)}
            />
            {isProductOpen && (
              <ul className="w-full bg-[#0a0e14]">
                {Object.entries(routes.product).map(([key, value]) => (
                  <li key={key} className="p-3 hover:bg-gray-700 text-left">
                    <a href={value} onClick={handleMobileLinkClick} className="block w-full">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li className="w-full">
            <a href={routes.about} onClick={handleMobileLinkClick} className="block p-4 hover:bg-gray-700 w-full rounded">
              Company
            </a>
          </li>
          
          <li className="w-full">
            <a href={routes.pricing} onClick={handleMobileLinkClick} className="block p-4 hover:bg-gray-700 w-full rounded">
              Pricing
            </a>
          </li>

          <li className="w-full flex flex-col">
            <MobileDropdownButton
              title="Resources"
              isOpen={isResourcesOpen}
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            />
            {isResourcesOpen && (
              <ul className="w-full bg-[#0a0e14]">
                {Object.entries(routes.resources).map(([key, value]) => (
                  <li key={key} className="p-3 hover:bg-gray-700 text-left">
                    <a href={value} onClick={handleMobileLinkClick} className="block w-full">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 p-4 rounded z-20"
        style={{ backgroundColor: "#0e131c" }}
      >
        ☰
      </button>
    </>
  );
}
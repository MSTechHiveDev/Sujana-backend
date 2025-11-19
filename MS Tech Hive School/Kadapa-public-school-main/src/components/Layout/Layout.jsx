import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../sidebars/Sidebar';
import FloatingSocialMedia from '../sidebars/Whatsapp';
import AwardsSidebar from '../sidebars/Rightbar';
import LeftFloatingSidebar from '../sidebars/LeftSideBar';
import RightFloatingAwards from '../sidebars/Rightbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {/* SIDEBAR + CONTENT */}
      <div className="flex flex-1">
        {/* FIXED LEFT SIDEBAR */}
        {/* <aside className="hidden md:block w-[260px] sticky top-[70px] h-[calc(100vh-70px)]">
          <Sidebar />
        </aside> */}
        {/* <LeftFloatingSidebar /> */}

        {/* MAIN CONTENT – FULL HEIGHT SCROLL */}
        <main className="flex-1 overflow-y-auto">{children}</main>

        {/* <aside
          className="
            hidden md:block 
            w-[260px]
            sticky top-[80px]
            h-[calc(100vh-80px)]
            overflow-hidden
            border-l border-gray-800
          "
        >
          <AwardsSidebar />
        </aside> */}
        <RightFloatingAwards />
      </div>

      {/* FOOTER */}
      <Footer />

      <FloatingSocialMedia />
    </div>
  );
};

export default Layout;

"use client";

import React from "react";
import SidebarAffiliations from "./Affiliations";

export default function Sidebar() {
  return (
    <aside
      className="
        sticky top-[80px]
        h-[calc(100vh-80px)]
        w-full 
        flex flex-col 
        bg-[#0a0f1a] 
        border-r border-gray-800
      "
    >

      {/* AUTO-SCROLLING AFFILIATIONS LIST */}
      <div className="mt-2 flex-1 overflow-hidden">
        <SidebarAffiliations />
      </div>
    </aside>
  );
}

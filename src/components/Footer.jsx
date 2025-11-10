import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16">
      
      {/* Left side */}
      <div className="text-white text-[10px] lg:text-sm font-normal lg:font-semibold">
        Designed & Built by Rithick.
      </div>

      {/* Right side */}
      <div className="text-white text-[10px] lg:text-sm font-normal lg:font-semibold text-right">
        © {year} Rithick — All Rights Reserved
      </div>

    </div>
  )
}


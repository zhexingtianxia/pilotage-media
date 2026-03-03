import React from 'react';

export const PilotageLogo = ({ className = "w-10 h-10", textClassName = "text-2xl" }: { className?: string, textClassName?: string }) => {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Blue Shape */}
        <path d="M0 15 L30 40 L30 60 L0 85 V15 Z" fill="#2D63EA" />
        <path d="M0 15 L0 85 L35 50 Z" fill="#2D63EA" /> 
        {/* Actually, let's try to match the reference image more closely. 
           It looks like a vertical bar on the left with an arrow point cut out, or just a chevron.
           Looking at the blue/green breakdown:
           Left shape is blue. It looks like a trapezoid or a chevron pointing right.
           Middle shape is green chevron.
           Right shape is green chevron.
        */}
        <path d="M5 10 L40 50 L5 90 V70 L25 50 L5 30 V10 Z" fill="#2D63EA" />
        
        {/* Let's try a simpler geometric approximation based on the "arrow" motif */}
        {/* Left Blue Arrow Head/Chevron */}
        <path d="M10 10 L50 50 L10 90 L10 70 L30 50 L10 30 Z" fill="#2D63EA" />
        
        {/* Middle Green Chevron */}
        <path d="M40 10 L80 50 L40 90 L40 70 L60 50 L40 30 Z" fill="#2DD876" />
        
        {/* Right Green Chevron (smaller or partial?) 
           The reference shows 3 distinct shapes in some, 2 in others. 
           The main large logo shows:
           1. A blue shape on the left (looks like a half-arrow).
           2. A green chevron.
           3. Another green chevron.
        */}
      </svg>
      <div className={`font-bold tracking-tight uppercase leading-none ${textClassName}`}>
        <div className="text-[#2D63EA]">领航传媒</div>
        <div className="text-[#2DD876] text-[0.6em] tracking-widest">PILOTAGE</div>
      </div>
    </div>
  );
};

// A more accurate SVG construction based on the "breakdown" image
export const Logo = ({ className = "h-12", showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg className={className} viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        {/* Left Blue Shape: Vertical bar with arrow cutout on right? No, it points right. */}
        {/* Based on the blue/green gradient image:
            Leftmost is blue. It's a vertical block with a > cutout on the right? 
            Or is it a > shape?
            Let's look at the negative space.
            It looks like three ">" shapes nested.
            Left one is Blue. Middle is Green. Right is Green.
        */}
        <path d="M0 0 L40 50 L0 100 V80 L25 50 L0 20 V0 Z" fill="#2D63EA" />
        <path d="M35 0 L75 50 L35 100 V80 L60 50 L35 20 V0 Z" fill="#2DD876" />
        <path d="M70 0 L110 50 L70 100 V80 L95 50 L70 20 V0 Z" fill="#5DC46C" />
      </svg>
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="text-xl font-black text-gray-900 tracking-wide leading-none">领航传媒</span>
          <span className="text-xs font-bold text-gray-500 tracking-[0.2em] leading-none mt-1">PILOTAGE</span>
        </div>
      )}
    </div>
  );
};

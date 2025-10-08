import Link from "next/link";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function InternalLink({ href, children }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 relative group"
    >
      {/* Text with underline that sweeps */}
      <span className="relative">
        {children}
        {/* Static underline */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400"></span>
        {/* Animated underline that sweeps from left to right */}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-800 transition-all duration-300 ease-out group-hover:w-full"></span>
      </span>
      
      {/* Arrow icon */}
      <svg 
        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

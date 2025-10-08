interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
      
      {/* Arrow icon pointing to top-right */}
      <svg 
        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 17L17 7M17 7H7M17 7V17"
        />
      </svg>
    </a>
  );
}

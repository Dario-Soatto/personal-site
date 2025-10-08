import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import InternalLink from "@/components/InternalLink";

export default function Home() {
  return (
    <div className="flex" style={{ height: 'calc(100vh - 56px)' }}>
      {/* Left side - 1/3 on mobile, fixed width on desktop */}
      <div className="w-1/3 md:w-140 flex-shrink-0 border-r border-gray-300 p-6 overflow-y-auto" style={{ height: 'calc(100vh - 56px)' }}>
        <p>Hi! I'm</p>
        
        <p className="text-emphasis font-display" style={{ fontSize: '5.5rem' }}>Dario Soatto</p>
        
        <Image
          src="/SMG_Photos_-141 copy.jpg"
          alt="Dario Soatto"
          width={400}
          height={400}
          className="w-2/3 h-auto"
        />
        <br />
        <p>
          I study CS & Econonomics at Stanford. Broadly, I'm interested in understanding how technology impacts macroeconomic and geopolitical activity, building intelligent systems, and using AI to understand psychology/behavior. Since the rewards of the slot machines are still uncertain, I'm still very much in the exploration phase.
        </p>
        <br />
        <p>
          soatto@stanford.edu
        </p>
      </div>

      {/* Right side - Takes remaining space */}
      <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 56px)' }}>
        <div className="border-b border-gray-300 p-6">
          <p className="text-emphasis">01</p>
          <br />
          <p className="text-emphasis">Work</p>
          <br />
          <p>
            <span className="text-emphasis">Investing:</span> I invest in outlier young founders. Portfolio includes <ExternalLink href="https://context.ai/">Context AI</ExternalLink>, <ExternalLink href="https://www.hybrontech.com/">Hybron Tech</ExternalLink>, <ExternalLink href="https://judgmentlabs.ai/">Judgment Labs</ExternalLink>, <ExternalLink href="https://vigillabs.ai/">Vigil Labs</ExternalLink>, and <ExternalLink href="https://www.deepsim.io/">DeepSim</ExternalLink>. If you want to learn more or get involved, shoot me a note!
          </p>
          <br />
          <p>
            <span className="text-emphasis">May 2025 – Present: Building AI agents @ <ExternalLink href="https://context.ai/">Context AI</ExternalLink>.</span> Operations, engineering, growth, and design. I am blessed to work with and learn from this superstar team.
          </p>
          <br />
          <p>
            <span className="text-emphasis">March 2024 – September 2025: Investment team @ <ExternalLink href="https://www.luxcapital.com/">Lux Capital</ExternalLink>.</span> Worked with Shahin Farshchi to find and back generational companies. I was the youngest and longest serving student associate in firm history.
          </p>
          <br />
        </div>
        <div className="border-b border-gray-300 p-6">
        <p className="text-emphasis">02</p>
          <br />
          <p className="text-emphasis">Projects</p>
          <br />
          <p>
            Recently, I've been building (i.e. vibing) a potpourri of random apps, mostly related to AI, politics, or both. I'm still learning (and hopefully improving), but I hope you'll find something interesting! 
          </p>
          <br />
          <p className="text-emphasis">
            <InternalLink href="/projects">All projects</InternalLink>
          </p>
          <br />
        </div>
        <div className="border-b border-gray-300 p-6">
        <p className="text-emphasis">03</p>
          <br />
          <p className="text-emphasis">Writing</p>
          <br />
          <p>
          Every now and then, I have thoughts that are too complicated for a tweet. I mostly write about tech, investing, and life.
          </p>
          <br />
          <p className="text-emphasis">
            <InternalLink href="/writing">All writing</InternalLink>
          </p>
          <br />
        </div>
        <div className="border-b border-gray-300 p-6">
        <p className="text-emphasis">04</p>
          <br />
          <p className="text-emphasis">Adventures</p>
          <br />
          <p>
            I sometimes get the urge to do something adventurous and potentially risky. It usually involves moving a long distance.
          </p>
          <br />
          <p className="text-emphasis">
            <InternalLink href="/adventures">All adventures</InternalLink>
          </p>
          <br />
        </div>
        <div className="p-6">
        <p className="text-emphasis">05</p>
          <br />
          <p className="text-emphasis">Favorites</p>
          <br />
          <p>
            I keep track of my favorite books, blogs, movies, etc. If you have any recs please let me know!
          </p>
          <br />
          <p className="text-emphasis">
            <InternalLink href="/favorites">All favorites</InternalLink>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

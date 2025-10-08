'use client'

import { useState } from 'react';
import ExternalLink from "@/components/ExternalLink";

type Tab = 'books' | 'blogs' | 'channels' | 'movies';

export default function Favorites() {
  const [activeTab, setActiveTab] = useState<Tab>('books');

  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">05</p>
          <br />
          <p className="text-emphasis">Favorites</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab('books')}
            className={`pb-2 transition-colors ${
              activeTab === 'books' 
                ? 'text-emphasis border-b-2 border-black' 
                : 'hover:opacity-70'
            }`}
          >
            Books
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`pb-2 transition-colors ${
              activeTab === 'blogs' 
                ? 'text-emphasis border-b-2 border-black' 
                : 'hover:opacity-70'
            }`}
          >
            Blogs
          </button>
          <button
            onClick={() => setActiveTab('channels')}
            className={`pb-2 transition-colors ${
              activeTab === 'channels' 
                ? 'text-emphasis border-b-2 border-black' 
                : 'hover:opacity-70'
            }`}
          >
            Channels
          </button>
          <button
            onClick={() => setActiveTab('movies')}
            className={`pb-2 transition-colors ${
              activeTab === 'movies' 
                ? 'text-emphasis border-b-2 border-black' 
                : 'hover:opacity-70'
            }`}
          >
            Movies
          </button>
        </div>

        {/* Books */}
        {activeTab === 'books' && (
          <>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Thinking, Fast and Slow</span> - Daniel Kahneman
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">How to Win Friends and Influence People</span> - Dale Carnegie
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Freakonomics</span> - Steven Levitt & Stephen Dubner
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">The Righteous Mind</span> - Jonathan Haidt
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Radical Markets</span> - Eric Posner & Glen Weyl
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">The Art of War</span> - Sun Tzu
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Can't Hurt Me</span> - David Goggins
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">When Breath Becomes Air</span> - Paul Kalanithi
              </p>
            </div>
            <div className="py-6">
              <p>
                <span className="text-emphasis">Guns, Germs, and Steel</span> - Jared Diamond
              </p>
            </div>
          </>
        )}

        {/* Blogs */}
        {activeTab === 'blogs' && (
          <>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Stratechery</span> - Ben Thompson
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Semianalysis</span> - Dylan Patel
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">xkcd</span> - Randall Munroe
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Gwern</span> - Gwern Branwen
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Slate Star Codex</span> - Scott Alexander
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Silver Bulletin</span> - Nate Silver
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">The Upheaval</span> - N.S. Lyons
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Slow Boring</span> - Matthew Yglesias
              </p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p>
                <span className="text-emphasis">Noahpinion</span> - Noah Smith
              </p>
            </div>
            <div className="py-6">
              <p>
                <span className="text-emphasis">Overcoming Bias</span> - Robin Hanson
              </p>
            </div>
          </>
        )}

        {/* Channels */}
        {activeTab === 'channels' && (
          <>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Andrej Karpathy</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Kurzgesagt</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Oversimplified</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Half as Interesting</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Polymatter</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">CGP Grey</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Primer</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Fern</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Great Big Story</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Hoog</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">The B1M</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Atlas Pro</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Wendover Productions</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Economics Explained</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Real Engineering</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Mustard</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Brick Technology</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Brick Experiment Channel</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Thinker</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Louped</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Code Bullet</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">3Blue1Brown</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Big Think</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Primal Space</p>
            </div>
            <div className="py-6">
              <p className="text-emphasis">Now What You Think</p>
            </div>
          </>
        )}

        {/* Movies */}
        {activeTab === 'movies' && (
          <>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">The Shawshank Redemption</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Forrest Gump</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Life Is Beautiful</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Gladiator</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Everything Everywhere All At Once</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Darkest Hour</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">J. Edgar</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">The Departed</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Casablanca</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Jojo Rabbit</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">WALL-E</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Good Will Hunting</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Up</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Oppenheimer</p>
            </div>
            <div className="border-b border-gray-300 py-6">
              <p className="text-emphasis">Knives Out</p>
            </div>
            <div className="py-6">
              <p className="text-emphasis">Howl's Moving Castle</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

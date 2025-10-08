'use client'

import { useState } from 'react';
import ExternalLink from "@/components/ExternalLink";

export default function Projects() {
  const [view, setView] = useState<'favorites' | 'all'>('favorites');

  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section with Toggle */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <p className="text-emphasis">02</p>
            <br />
            <p className="text-emphasis">Projects</p>
          </div>
          
          {/* Toggle */}
          <div className="text-sm">
            <button
              onClick={() => setView('favorites')}
              className={view === 'favorites' ? 'text-emphasis' : 'hover:opacity-70 transition-opacity'}
            >
              Favorites
            </button>
            <span className="mx-2">|</span>
            <button
              onClick={() => setView('all')}
              className={view === 'all' ? 'text-emphasis' : 'hover:opacity-70 transition-opacity'}
            >
              All
            </button>
          </div>
        </div>

        {/* AILeaf - FAVORITE */}
        {(view === 'all' || view === 'favorites') && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">AILeaf</span> 10/25
            </p>
            <p>
              An AI-native LaTeX editor. Overleaf's AI edits suck and are paywalled, so I built Cursor for LaTeX.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/ai-leaf">Github</ExternalLink> <ExternalLink href="https://www.latex.soatto.com/">Link</ExternalLink>
            </p>
          </div>
        )}

        {/* Generative Debates - FAVORITE */}
        {(view === 'all' || view === 'favorites') && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">Generative Debates</span> 09/25
            </p>
            <p>
              Two generative agents debating politics. I was curious about the emergent behavior of AI agents with memory and reflective ability.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/political-debate">Github</ExternalLink> <ExternalLink href="https://www.gen.soatto.com/">Link</ExternalLink>
            </p>
          </div>
        )}

        {/* r/Politics Sentiment */}
        {view === 'all' && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">r/Politics Sentiment</span> 09/25
            </p>
            <p>
              Bias analysis of r/Politics's top post. I wanted to quantify the bias of the daily top post on the sub.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/politics-sentiment">Github</ExternalLink>
            </p>
          </div>
        )}

        {/* BibleGPT */}
        {view === 'all' && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">BibleGPT</span> 09/25
            </p>
            <p>
              Chatbot with RAG over the Bible. I wanted to learn how RAG works and have a way to quickly find out what the Bible says about a given topic.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/bible-gpt">Github</ExternalLink>
            </p>
          </div>
        )}

        {/* Meeting Transcriber */}
        {view === 'all' && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">Meeting Transcriber</span> 09/25
            </p>
            <p>
              Electron app for real time system and mic audio transcription. I wanted to build an open source Granola-type project that can be slotted into apps.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/granola">Github</ExternalLink>
            </p>
          </div>
        )}

        {/* Bot Royale */}
        {view === 'all' && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">Bot Royale</span> 09/25
            </p>
            <p>
              RL bot to play Clash Royale on an emulator. Clash Royale is the second greatest game of all time (after Minecraft).
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/clash-royale-bot">Github</ExternalLink>
            </p>
          </div>
        )}

        {/* ELO Ranker */}
        {view === 'all' && (
          <div className="border-b border-gray-300 py-6">
            <p className="mb-2">
              <span className="text-emphasis">ELO Ranker</span> 08/25
            </p>
            <p>
              ELO ranking system given 1v1 or 2v2 match results. This app was made to track spikeball games at the Context AI office.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/elo-ranker">Github</ExternalLink>
            </p>
          </div>
        )}

        {/* Twitter Political Compass - FAVORITE */}
        {(view === 'all' || view === 'favorites') && (
          <div className={view === 'favorites' ? 'py-6' : 'border-b border-gray-300 py-6'}>
            <p className="mb-2">
              <span className="text-emphasis">Twitter Political Compass</span> 08/25
            </p>
            <p>
              Input any Twitter user and get their location on the political compass. I built this to help people find echo chambers.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/political-compass">Github</ExternalLink> <ExternalLink href="https://www.compass.soatto.com/">Link</ExternalLink>
            </p>
          </div>
        )}

        {/* BranchGPT */}
        {view === 'all' && (
          <div className="py-6">
            <p className="text-emphasis mb-2">BranchGPT</p>
            <p>
              Chatbot with branching conversations. I often found myself wishing I could branch chat conversations, so I built it.
            </p>
            <p className="mt-4">
              <ExternalLink href="https://github.com/Dario-Soatto/claude-chat-branches">Github</ExternalLink>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

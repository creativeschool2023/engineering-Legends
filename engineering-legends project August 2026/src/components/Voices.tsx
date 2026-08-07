import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { voiceStoriesData } from '../data';
import { VoiceStory } from '../types';
import { Users, MessageSquare, Send, CheckCircle2, TrendingUp, HeartHandshake, AlertTriangle, ShieldCheck } from 'lucide-react';

interface VoicesProps {
  defaultTab?: string;
}

export default function Voices({ defaultTab = 'discourse' }: VoicesProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [stories, setStories] = useState<VoiceStory[]>(voiceStoriesData);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [storyText, setStoryText] = useState('');
  const [storyTopic, setStoryTopic] = useState<'burnout' | 'imposter' | 'success' | 'layoffs'>('burnout');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyText) return;

    setSubmitting(true);
    setTimeout(() => {
      const newStory: VoiceStory = {
        id: `story-${Date.now()}`,
        author: authorName || 'Anonymous Engineer',
        role: authorRole || 'Verified Systems Engineer',
        platform: 'community',
        topic: storyTopic,
        quote: `"${storyText.slice(0, 160)}..."`,
        fullStory: storyText,
        date: new Date().toISOString().split('T')[0],
        likes: 1
      };

      setStories([newStory, ...stories]);
      setSubmitting(false);
      setSubmitted(true);
      setAuthorName('');
      setAuthorRole('');
      setStoryText('');

      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const filteredStories = stories.filter(
    (story) => selectedTopic === 'all' || story.topic === selectedTopic
  );

  const getPlatformBorder = (platform: string) => {
    switch (platform) {
      case 'reddit': return 'border-t-4 border-t-[#FF4500]';
      case 'twitter': return 'border-t-4 border-t-[#38bdf8]';
      case 'linkedin': return 'border-t-4 border-t-[#0A66C2]';
      case 'youtube': return 'border-t-4 border-t-[#FF0000]';
      case 'instagram': return 'border-t-4 border-t-[#E4405F]';
      default: return 'border-t-4 border-t-[#b87333]';
    }
  };

  const getTopicBadge = (topic: string) => {
    switch (topic) {
      case 'burnout': return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
      case 'imposter': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'success': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'layoffs': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default: return 'bg-[#b87333]/20 text-[#b87333] border-[#b87333]/40';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col font-sans selection:bg-[#b87333] selection:text-[#0a0e17]">
      <Navigation />

      {/* Header Banner */}
      <section className="relative pt-32 pb-12 bg-[#0d1321] border-b border-[#b87333]/30 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px),
                              linear-gradient(to bottom, #b87333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#b87333]/50 text-[#b87333] font-mono text-xs tracking-widest uppercase">
            <Users className="w-4 h-4 text-[#d4af37]" />
            <span>INSTITUTIONAL SENTIMENT REPOSITORY: 1M+ VOICES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-slate-100 uppercase tracking-tight">
            Engineer <span className="text-[#b87333]">Voices</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-300 max-w-3xl">
            "Real unfiltered stories, burnout data, career transitions, and institutional sentiment from over 1M+ software, civil, and hardware engineers."
          </p>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 w-full">
        <div className="bg-[#111827] border border-[#b87333]/40 rounded-xl p-6 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#b87333]">1,000,000+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">VOICES COLLECTED</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#d4af37]">76,000,000</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">X IMPRESSIONS</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#2563eb]">500,000+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">LINKEDIN DISCOURSES</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">10,500,000</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">YOUTUBE SUBSCRIBERS</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Topic Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs uppercase">
          {['all', 'burnout', 'imposter', 'success', 'layoffs'].map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-lg tracking-wider transition-all ${
                selectedTopic === topic
                  ? 'bg-[#b87333] text-[#0a0e17] font-bold shadow-[0_0_12px_rgba(184,115,51,0.4)]'
                  : 'bg-[#111827] border border-[#94a3b8]/20 text-slate-300 hover:border-[#b87333] hover:text-[#b87333]'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className={`bg-[#0d1321] border border-[#94a3b8]/20 rounded-xl p-6 space-y-4 shadow-lg ${getPlatformBorder(
                story.platform
              )}`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="font-bold text-slate-100">{story.author}</span>
                  <div className="text-slate-400 text-[10px]">{story.role}</div>
                </div>
                <span className={`px-2.5 py-0.5 rounded border text-[10px] uppercase font-bold ${getTopicBadge(story.topic)}`}>
                  {story.topic}
                </span>
              </div>

              <blockquote className="font-serif italic text-sm sm:text-base text-slate-200 leading-relaxed border-l-2 border-[#b87333] pl-4">
                {story.quote}
              </blockquote>

              {story.fullStory && (
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {story.fullStory}
                </p>
              )}

              <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-slate-500 border-t border-[#94a3b8]/10">
                <span>SUBMITTED: {story.date}</span>
                <span className="text-[#b87333]">♥ {story.likes} LIKES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story Blueprint Form */}
        <section className="bg-[#0d1321] border-2 border-[#b87333] rounded-2xl p-6 sm:p-10 space-y-6 shadow-[0_0_35px_rgba(184,115,51,0.2)]">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#b87333] tracking-widest uppercase">
              ARCHIVAL TRANSMISSION
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-100 uppercase">
              Share Your Engineering Experience
            </h2>
            <p className="font-sans text-xs text-slate-400">
              Submit your experience anonymously or credited to be archived in the global sentiment index.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase mb-1">YOUR NAME / HANDLE (OPTIONAL)</label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Senior Hardware Lead"
                  className="w-full bg-[#111827] border border-[#b87333]/40 rounded p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#b87333]"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">ROLE & LOCATION</label>
                <input
                  type="text"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  placeholder="e.g. Civil Engineer (London)"
                  className="w-full bg-[#111827] border border-[#b87333]/40 rounded p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#b87333]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 uppercase mb-1">SELECT TOPIC CATEGORY</label>
              <select
                value={storyTopic}
                onChange={(e) => setStoryTopic(e.target.value as any)}
                className="w-full bg-[#111827] border border-[#b87333]/40 rounded p-3 text-slate-100 focus:outline-none focus:border-[#b87333]"
              >
                <option value="burnout">Burnout & Overwork</option>
                <option value="imposter">Imposter Syndrome & Growth</option>
                <option value="success">Engineering Success Story</option>
                <option value="layoffs">Layoffs & Transition</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 uppercase mb-1">YOUR TESTIMONY / STORY</label>
              <textarea
                rows={4}
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                placeholder="Describe your engineering challenges, burnout, structural breakthroughs, or career lessons..."
                className="w-full bg-[#111827] border border-[#b87333]/40 rounded p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#b87333]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#b87333] to-[#d4af37] text-[#0a0e17] font-bold uppercase tracking-widest rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span>TRANSMITTING TESTIMONY...</span>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#0a0e17]" />
                  <span>TESTIMONY ARCHIVED</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT TESTIMONY TO ARCHIVE</span>
                </>
              )}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

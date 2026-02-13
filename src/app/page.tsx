'use client';

import { Rubik_Glitch, Work_Sans } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

const rubik = Rubik_Glitch({
  weight: ['400'],
  variable: '--font-rubik',
  subsets: ['latin'],
});

const work = Work_Sans({
  weight: ['700'],
  variable: '--font-work',
  subsets: ['latin'],
});

const Socials = () => {
  const socials = [
    { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
    { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
    { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
    { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
    { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
  ];
  return (
    <div className='flex justify-center gap-5 text-3xl'>
        {socials.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-neutral-400 transition-colors duration-300 ease-in-out'
          >
            {link.icon}
          </a>
        ))}
      </div>
  );
};

const Title = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <h1 className={`font-[family-name:var(--font-rubik)] text-5xl md:text-8xl`}>
      {!isDone ? (
        <TypeAnimation
          sequence={[
            'heyitsjustjae',
            () => setIsDone(true),
          ]}
          speed={1}
          cursor={false}
          repeat={0}
        />
      ) : (
        <span>
          heyits<span className="turn-red">justjae
            <span className="glitch-slice" aria-hidden="true">
              justjae
            </span>
          </span>
        </span>
      )}
    </h1>
  );
};

const Nav = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`absolute font-[family-name:var(--font-work)] bottom-[14vh] md:bottom-[6vh] w-full flex justify-center gap-24 md:gap-120 text-xl md:text-4xl`}>
      <button 
        onClick={() => scrollTo('music')}
        className="hover:text-neutral-400 transition-colors duration-200 ease-in-out cursor-pointer uppercase tracking-widest"
      >
        Music
      </button>
      <button 
        onClick={() => scrollTo('shows')}
        className="hover:text-neutral-400 transition-colors duration-200 ease-in-out cursor-pointer uppercase tracking-widest"
      >
        Shows
      </button>
    </nav>
  );
};

const Music = () => {
  const trackLinks = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2262578648&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2253677699&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2233615868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2249860100&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2232810230&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2221764104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  ];

  return (
    <section id="music" className="w-full min-h-screen flex flex-col items-center justify-start px-4 pt-[16vh]">
      <h2 className="font-[family-name:var(--font-work)] text-4xl md:text-6xl uppercase mb-12 tracking-widest">
        Music
      </h2>
      
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {trackLinks.map((link, index) => (
          <iframe
            key={index}
            width="100%"
            height="100"
            src={link}
          ></iframe>
        ))}
      </div>
    </section>
  );
};

const Shows = () => {
  const showData = [
    {
      date: 'FEB 13',
      venue: "Valentine's Stoplight Mixer",
      city: 'Dallas, TX',
      ticketUrl: 'https://partiful.com/e/GqrizOIbHLQaseccN03Q',
    },
    {
      date: 'MAR 7',
      venue: 'AFER HTX',
      city: 'Houston, TX',
      ticketUrl: 'https://eventvikings.com/pulse/events/65f023cb-2b72-4c37-967f-5b3e1d20fdf7/ahr-houston-fest-2?ref=4c894e84-d157-4f61-b986-cd632926ccd7',
    },
  ];

  return (
    <section id="shows" className="w-full min-h-screen flex flex-col items-center justify-start px-4 pt-[24vh]">
      <h2 className="font-[family-name:var(--font-work)] text-4xl md:text-6xl uppercase mb-16 tracking-widest">
        Shows
      </h2>

      <div className="w-full max-w-4xl font-[family-name:var(--font-work)]">
        {showData.map((show, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-neutral-800 hover:bg-white/5 transition-colors duration-300 ease-in-out px-4 group"
          >
            {/* Date & Venue Info */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-red-700">
                {show.date}
              </span>
              <div>
                <p className="text-xl md:text-2xl uppercase tracking-tight">{show.venue}</p>
                <p className="text-neutral-500 text-sm md:text-base uppercase">{show.city}</p>
              </div>
            </div>

            {/* Ticket Button */}
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 px-8 py-2 border border-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Tickets
            </a>
          </div>
        ))}
        
        {showData.length === 0 && (
          <p className="text-center text-neutral-500 uppercase tracking-widest">
            No upcoming shows announced.
          </p>
        )}
      </div>
      <a
        href="mailto:jae.pena@outlook.com"
        className="font-[family-name:var(--font-work)] mt-auto py-6 flex justify-center text-neutral-500 hover:text-white transition-colors duration-300"
      >
        jae.pena@outlook.com
      </a>
    </section>
  );
};

export default function Home() {
  const [blurValue, setBlurValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far we've scrolled relative to the viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
    
      
      // Gradually increase blur up to 10px as we scroll down one full screen
      const newBlur = Math.min((scrollY / viewportHeight) * 2, 12); 
      setBlurValue(newBlur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`${rubik.variable} ${work.variable} w-full min-h-screen text-white`}>
      <section style={{ filter: `blur(${blurValue}px)` }} className="relative h-screen w-full flex flex-col justify-center items-center">
        <div className="absolute top-6 w-full">
          <Socials />
        </div>
        <Title />
        <Nav />
      </section>

      <Music />
      <Shows />
      
    </main>
  );
}

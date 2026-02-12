'use client';

import { Rubik_Glitch, Work_Sans } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';
import { useState } from 'react';

const rubik = Rubik_Glitch({
  weight: ['400'],
  variable: '--font-rubik',
});

const work = Work_Sans({
  weight: ['700'],
  variable: '--font-work',
});

const socials = [
  { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
  { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
  { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
  { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
];

const Socials = () => {
  return (
    <div className='flex justify-center gap-5 text-[clamp(1rem,1.75vw,2rem)]'>
        {socials.map((link) => (
          <a
            key={link.href} href={link.href} aria-label={link.label}
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
    <h1 className={`font-[family-name:var(--font-rubik)] text-[clamp(1rem,6vw,6rem)]`}>
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
    <nav className={`absolute font-[family-name:var(--font-work)] bottom-12 w-full flex justify-center gap-20 md:gap-120 text-xl md:text-4xl`}>
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

// const Music = () => { return };
// const Shows = () => { return };

export default function Home() {
  return (
    <main className={`${rubik.variable} ${work.variable} flex justify-center items-center w-full pt-40 md:pt-0`}>
      {/* Icon bar */}
      <div className="absolute top-6 w-full">
        <Socials />
      </div>

      {/* Title */}
      <Title />

      <Nav />

      {/* <Music /> */}
      {/* <Shows /> */}
      
    </main>
  );
}

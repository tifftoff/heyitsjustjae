'use client';

import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';
import { useState } from 'react';

const socials = [
  { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
  { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
  { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
  { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
];

const Title = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <h1 className='font-[family-name:var(--font-ocr)] text-[clamp(1rem,10vw,5rem)]'>
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

export default function Home() {
  return (
    <main className='flex justify-center items-center w-full'>
      {/* Icon bar */}
      <div className='absolute top-8 left-8 flex flex-col gap-4 md:gap-6 text-[clamp(2rem,4vw,2.5rem)] text-center'>
        {socials.map((link) => (
          <a
            key={link.href} href={link.href} aria-label={link.label}
            className='hover:text-neutral-400 transition-colors duration-300 ease-in-out'
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Title */}
      <Title />

      {/* Email */}
      <div className="absolute bottom-8 right-8 font-[family-name:var(--font-ocr)] text-2xl">
        <a 
          href="mailto:jae.pena@outlook.com" 
          className="group relative flex items-center justify-end"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 pointer-events-none">
            jae.pena@outlook.com
          </span>
          
          <span className="group-hover:text-gray-500 transition-colors duration-300">
            +contact
          </span>
        </a>
      </div>
    </main>
  );
}

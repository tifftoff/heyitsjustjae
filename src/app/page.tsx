'use client';

import { Rubik_Glitch, Work_Sans } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import tw from "tailwind-styled-components"

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

const SocialsContainer = tw.div`
  flex
  justify-center
  gap-5
  text-3xl
`;

const Socials = () => {
  const socials = [
    { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
    { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
    { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
    { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
    { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
  ];
  return (
    <SocialsContainer>
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
      </SocialsContainer>
  );
};

const TitleContainer = tw.h1`
  font-[family-name:var(--font-rubik)]
  text-5xl
  md:text-8xl
`;

const Title = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <TitleContainer>
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
    </TitleContainer>
  );
};

const NavContainer = tw.nav`
  absolute
  font-[family-name:var(--font-work)]
  bottom-[14vh]
  md:bottom-[6vh]
  w-full
  flex
  justify-center
  gap-24
  md:gap-120
  text-xl
  md:text-4xl
`;

const NavButton = tw.button`
  hover:text-neutral-400
  transition-colors
  duration-200
  ease-in-out
  cursor-pointer
  uppercase
  tracking-widest"
`;

const Nav = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavContainer>
      <NavButton onClick={() => scrollTo('music')}>
        Music
      </NavButton>
      <NavButton onClick={() => scrollTo('shows')}>
        Shows
      </NavButton>
    </NavContainer>
  );
};

const Pictures = () => {
  return null;
};

const MusicContainer = tw.section`
  w-full
  min-h-screen
  flex
  flex-col
  items-center
  justify-start
  px-4
  pt-[16vh]
`;

const Header = tw.h2`
  font-[family-name:var(--font-work)]
  text-4xl
  md:text-6xl
  uppercase
  mb-12
  tracking-widest
`;

const TrackContainer = tw.div`
  w-full
  max-w-3xl
  flex
  flex-col
  gap-6
`;

const Music = () => {
  const trackLinks = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2269961780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2266721348&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2262578648&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2253677699&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2233615868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2249860100&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  ];

  return (
    <MusicContainer id="music">
      <Header>
        Music
      </Header>
      
      <TrackContainer>
        {trackLinks.map((link, index) => (
          <iframe
            key={index}
            width="100%"
            height="100"
            src={link}
          ></iframe>
        ))}
      </TrackContainer>
    </MusicContainer>
  );
};

const ShowsContainer = tw.section`
  w-full
  min-h-screen
  flex
  flex-col
  items-center
  justify-start
  px-4
  pt-[24vh]
`;

const ShowList = tw.div`
  w-full
  max-w-4xl
  font-[family-name:var(--font-work)]
`;

const ShowListItem = tw.div`
  flex flex-col md:flex-row items-center justify-between py-6 border-b border-neutral-800 hover:bg-white/5 transition-colors duration-300 ease-in-out px-4 group
`;

const ShowData = tw.div`
  flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left
`;

const ShowDate = tw.span`
  text-2xl md:text-3xl font-bold tracking-tighter text-red-700
`;

const ShowVenue = tw.p`
  text-xl md:text-2xl uppercase tracking-tight
`;

const ShowCity = tw.p`
  text-neutral-500 text-sm md:text-base uppercase
`;

const Shows = () => {
  const showData = [
    {
      date: 'MAR 7',
      venue: 'AFER HTX',
      city: 'Houston, TX',
      ticketUrl: 'https://eventvikings.com/pulse/events/65f023cb-2b72-4c37-967f-5b3e1d20fdf7/ahr-houston-fest-2?ref=4c894e84-d157-4f61-b986-cd632926ccd7',
    },
  ];

  return (
    <ShowsContainer id="shows">
      <Header>
        Shows
      </Header>

      <ShowList>
        {showData.map((show, index) => (
          <ShowListItem key={index}>
            {/* Date & Venue Info */}
            <ShowData>
              <ShowDate>{show.date}</ShowDate>
              <div>
                <ShowVenue>{show.venue}</ShowVenue>
                <ShowCity>{show.city}</ShowCity>
              </div>
            </ShowData>

            {/* Ticket Button */}
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 px-8 py-2 border border-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Tickets
            </a>
          </ShowListItem>
        ))}
        
        {showData.length === 0 && (
          <p className="text-center text-neutral-500 uppercase tracking-widest">
            No upcoming shows announced.
          </p>
        )}
      </ShowList>
      <a
        href="mailto:jae.pena@outlook.com"
        className="font-[family-name:var(--font-work)] mt-auto py-6 flex justify-center text-neutral-500 hover:text-white transition-colors duration-300"
      >
        jae.pena@outlook.com
      </a>
    </ShowsContainer>
  );
};

const LandingContainer = tw.section`
  relative h-screen w-full flex flex-col justify-center items-center
`;

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
      <LandingContainer style={{ filter: `blur(${blurValue}px)` }}>
        <div className="absolute top-6 w-full">
          <Socials />
        </div>
        <Title />
        <Nav />
      </LandingContainer>

      <Pictures />
      <Music />
      <Shows />
      
    </main>
  );
}

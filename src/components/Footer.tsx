import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';

const socials = [
  { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
  { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
  { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
  { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
];

export function Footer() {
  return (
    <footer className="w-screen p-8 flex gap-[15px] text-[clamp(1.25rem,4vw,2rem)] text-center flex-wrap items-center justify-center">
        {socials.map((link) => (
          <a
            key={link.href} href={link.href} aria-label={link.label}
            className="hover:text-neutral-400 transition-colors duration-300 ease-in-out"
          >
            {link.icon}
          </a>
        ))}
      </footer>
  )
}
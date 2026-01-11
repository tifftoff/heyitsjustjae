import { FaXTwitter, FaInstagram, FaSoundcloud, FaTiktok, FaSpotify } from 'react-icons/fa6';

const socials = [
  { href: 'https://www.instagram.com/heyitsjustjae', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://tiktok.com/@heyitsjustjae', label: 'TikTok', icon: <FaTiktok /> },
  { href: 'https://soundcloud.com/heyitsjustjae', label: 'Soundcloud', icon: <FaSoundcloud /> },
  { href: 'https://open.spotify.com/user/jamesp12349?si=37b55767bf6d4216', label: 'Spotify', icon: <FaSpotify /> },
  { href: 'https://x.com/heyitsjustjae', label: 'X', icon: <FaXTwitter /> },
];

export function Sidebar() {
  return (
    <aside className='fixed top-8 left-8 flex flex-col gap-6 text-[clamp(1.75rem,4vw,2.5rem)] text-center'>
        {socials.map((link) => (
          <a
            key={link.href} href={link.href} aria-label={link.label}
            className='hover:text-neutral-400 transition-colors duration-300 ease-in-out'
          >
            {link.icon}
          </a>
        ))}
      </aside>
  )
}
'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className='flex justify-center items-center w-full'>
      <TypeAnimation
        sequence={['heyitsjustjae']}
        wrapper='h1'
        className='font-[family-name:var(--font-ocr)] text-[clamp(2.5rem,10vw,5rem)]'
        speed={1}
      />
    </main>
  );
}

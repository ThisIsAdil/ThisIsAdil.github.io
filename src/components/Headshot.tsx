// Responsive, optimized headshot. vite-imagetools generates AVIF + WebP at
// several widths at build time; the browser picks the smallest that fits.
import headshot from '../assets/professional-headshot.png?w=280;560;840&format=avif;webp&as=picture'
import { cn } from '../lib/cn'

export default function Headshot({ className }: { className?: string }) {
  return (
    <picture>
      {Object.entries(headshot.sources).map(([type, srcset]) => (
        <source
          key={type}
          type={type}
          srcSet={srcset}
          sizes="(min-width: 768px) 300px, 280px"
        />
      ))}
      <img
        src={headshot.img.src}
        width={headshot.img.w}
        height={headshot.img.h}
        alt="Adil Shaikh"
        loading="lazy"
        decoding="async"
        className={cn('aspect-[4/5] w-full object-cover object-top', className)}
      />
    </picture>
  )
}

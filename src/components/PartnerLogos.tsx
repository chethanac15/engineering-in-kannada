import React from 'react';
import partners from '../data/partners.json';

export function PartnerLogos() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Our Partners</h2>
      <div className="w-full flex justify-center">
        <p className="text-base text-gray-300 text-center leading-relaxed mb-8" style={{maxWidth: 800, width: "100%", paddingLeft: 32, paddingRight: 32}}>
          We collaborate with leading organizations to bring you the best engineering education.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 items-center justify-items-center">
          {(partners as Array<any>).map((partner) => (
            <a
              key={partner.name}
              href={partner.website || partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="flex items-center justify-center p-4 bg-white/5 rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('placeholder.png')) {
                    target.src = '/images/partners/placeholder.png';
                  }
                }}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <span className="text-gray-300">Interested in partnering with us?{' '}</span>
        <a
          href="mailto:chandansgowda167@gmail.com"
          className="text-primary hover:text-primary/80 underline"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
} 
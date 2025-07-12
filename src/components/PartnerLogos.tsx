import partnersData from '../data/partners.json';

interface Partner {
  id: number;
  name: string;
  logo: string;
  url: string;
  alt: string;
}

export function PartnerLogos() {
  const { partners } = partnersData;

  return (
    <section className="py-16 bg-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We collaborate with leading organizations to bring you the best engineering education in Kannada.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner: Partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
              aria-label={`Visit ${partner.name}`}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-12 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/120x48?text=${encodeURIComponent(partner.name)}`;
                }}
              />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            Interested in partnering with us?{' '}
            <a 
              href="mailto:contact@engineeringinkannada.com" 
              className="text-primary hover:text-primary/80 underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 
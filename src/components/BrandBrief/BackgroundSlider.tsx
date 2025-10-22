import { motion } from 'framer-motion';

const backgroundImages = [
  '/images/backgrounds/bg2.jpg.png', // Logo de la agencia
];

export const BackgroundSlider = () => {
  // Usar solo el logo de la agencia repetido
  const topImages = Array(7).fill('/images/backgrounds/bg2.jpg.png');
  const midImages = Array(7).fill('/images/backgrounds/bg2.jpg.png');
  const bottomImages = Array(7).fill('/images/backgrounds/bg2.jpg.png');

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Sección TOP */}
      <div className="flex absolute top-0 left-0 w-full h-1/3 overflow-hidden">
        {topImages.map((image, index) => (
          <div
            key={`top-${index}`}
            className="relative flex-shrink-0 mx-6 my-4 rounded-lg overflow-hidden shadow-2xl bg-gray-800"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '280px',
              height: '160px',
              transform: `rotate(${index * 1.5 - 3}deg) translateY(${Math.sin(index) * 10}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 ring-1 ring-white/15"></div>
          </div>
        ))}
      </div>

      {/* Sección MID */}
      <div className="flex absolute top-[65%] left-0 w-full h-1/2 transform -translate-y-1/2 overflow-hidden">
        {midImages.map((image, index) => (
          <div
            key={`mid-${index}`}
            className="relative flex-shrink-0 mx-8 my-4 rounded-lg overflow-hidden shadow-2xl bg-gray-800"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '260px',
              height: '150px',
              transform: `rotate(${-index * 1.2 + 2}deg) translateY(${Math.cos(index) * 8}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 ring-1 ring-white/15"></div>
          </div>
        ))}
      </div>

      {/* Sección BOTTOM */}
      <div className="flex absolute bottom-[-10%] left-0 w-full h-1/3 overflow-hidden">
        {bottomImages.map((image, index) => (
          <div
            key={`bottom-${index}`}
            className="relative flex-shrink-0 mx-4 my-4 rounded-lg overflow-hidden shadow-2xl bg-gray-800"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '240px',
              height: '140px',
              transform: `rotate(${index * 0.8 - 1.5}deg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 ring-1 ring-white/15"></div>
          </div>
        ))}
      </div>

      {/* Overlay principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
    </div>
  );
};
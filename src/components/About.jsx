import stackImage from '../assets/Hero Image.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="6" fill="none" transform="translate(4, 4)">
        <ellipse cx="60" cy="60" rx="20" ry="52" transform="rotate(30 60 60)" />
        <ellipse cx="60" cy="60" rx="20" ry="52" transform="rotate(90 60 60)" />
        <ellipse cx="60" cy="60" rx="20" ry="52" transform="rotate(150 60 60)" />
        <circle cx="60" cy="60" r="9" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.4 6c-6 0-11.7.5-16.7 1.5-14.8 2.6-17.5 8.1-17.5 18.2v13.3h34.9v4.4H16.3C6.1 43.4-2.7 49.6-5.5 61.3c-3.2 13.4-3.3 21.8 0 35.8 2.5 10.4 8.4 17.9 18.6 17.9h12v-16c0-11.6 10-21.8 22-21.8H86c9.8 0 17.6-8.1 17.6-17.9V25.7c0-9.5-8-16.6-17.6-18.2C79.9 6.5 71.4 6 63.4 6zM47 15c3.6 0 6.5 3 6.5 6.6 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5C40.5 18 43.4 15 47 15z"/>
      <path fill="#FFD43B" d="M64.6 122c6 0 11.7-.5 16.7-1.5 14.8-2.6 17.5-8.1 17.5-18.2V88.9H63.9v-4.4h64.8c10.2 0 19-6.2 21.8-17.9 3.2-13.4 3.3-21.8 0-35.8-2.5-10.4-8.4-17.9-18.6-17.9h-12v16c0 11.6-10 21.8-22 21.8H49.6c-9.8 0-17.6 8.1-17.6 17.9v29.6c0 9.5 8 16.6 17.6 18.2 6.1 1 14.6 1.5 22.6 1.5zm17.4-9c-3.6 0-6.5-3-6.5-6.6 0-3.6 2.9-6.5 6.5-6.5 3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.6-6.5 6.6z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const AgenticAIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="24" r="11" fill="#ff2a2a" />
      <circle cx="24" cy="88" r="11" fill="#ff6b6b" />
      <circle cx="104" cy="88" r="11" fill="#ff6b6b" />
      <circle cx="64" cy="64" r="13" fill="#ffffff" stroke="#ff2a2a" strokeWidth="4" />
      <path d="M64 37V51M40 78L54 68M88 78L74 68" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Agentic AI</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Mahalaxmi Somisetty — Full-Stack & Agentic AI Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
          <p className="text-base font-semibold mb-12 leading-relaxed max-w-3xl text-red-50/90">
            {aboutContent.paragraphExtra}
          </p>

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AgenticAIIcon />
            </div>
          </div>

          {/* Achievement Highlights */}
          <div data-aos="fade-up" data-aos-delay="700" className="mt-12 flex flex-col gap-3 max-w-2xl">
            {aboutContent.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                <p className="text-red-50 text-sm md:text-base font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

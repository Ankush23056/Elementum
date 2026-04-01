import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Colaborative & partnership",
      description: "Office of multiple interest content"
    },
    {
      title: "We talk about our weight",
      description: "The hanger US Air force digital experimental"
    },
    {
      title: "Piloting digital confidence",
      description: "Delta faucet content, social, digital",
      hasImage: true
    }
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden" id="services">

      {/* Winding Red Line Background */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-[300px] z-0 pointer-events-none hidden md:block overflow-hidden">
        <svg viewBox="0 0 800 300" fill="none" className="w-full h-full text-[#FF5252] opacity-70" preserveAspectRatio="xMaxYMin slice">
          {/* Curve matching the screenshot's top right flow */}
          <path d="M 900 0 C 600 100 500 250 300 150 C 100 50 100 300 0 250" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-5xl sm:text-6xl lg:text-[7rem] font-sans text-[#111827] leading-[1.05] tracking-tight">
            What we{' '}
            <span className="relative inline-block px-4 py-0 sm:py-1">
              <span className="relative z-10">can</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#dcfce7] rounded-full -z-10"></span>
            </span>
            <br />
            <span className="relative inline-block mt-2">
              offer
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-[105%] h-[12px] sm:h-[16px] text-[#fbbf24]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M5 10 L 195 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M30 18 L 160 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
              </svg>
            </span>{' '}
            you!
          </h2>
        </div>

        {/* Features List */}
        <div className="w-full">
          <div className="w-full border-t border-gray-200"></div>

          {features.map((feature, index) => (
            <div key={index} className="group relative w-full border-b border-gray-200 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer">

              {/* Left Description Column */}
              <div className="w-full md:w-[25%] mb-4 md:mb-0 pr-4">
                <p className="text-[#4b5563] text-sm md:text-[1.05rem] leading-relaxed max-w-[220px]">
                  {feature.description}
                </p>
              </div>

              {/* Center Title Column */}
              <div className="w-full md:w-[50%] relative flex items-center">
                <h3 className="relative z-10 text-3xl sm:text-4xl lg:text-[3rem] font-sans text-[#111827] tracking-tight">
                  {feature.title}
                </h3>

                {/* Decorative Circular Collage for 3rd item */}
                {feature.hasImage && (
                  <div className="absolute right-0 lg:right-[15%] top-1/2 -translate-y-[45%] w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-white shadow-xl -z-10 pointer-events-none opacity-80">
                    <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=300&fit=crop" alt="Abstract collage" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                )}
              </div>

              {/* Right Arrow Column */}
              <div className="w-full md:w-[25%] flex justify-end mt-6 md:mt-0 items-center">
                <svg className="w-16 sm:w-20 lg:w-28 text-[#111827] group-hover:translate-x-4 transition-transform duration-300" viewBox="0 0 100 20" fill="none" preserveAspectRatio="xMaxYMid slice">
                  <path d="M0 10 L 98 10 M 90 2 L 98 10 L 90 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

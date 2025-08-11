"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaBook, FaMusic, FaFutbol, FaCocktail, FaPenNib, FaArrowRight, FaLock, FaLockOpen } from "react-icons/fa";
import { GiPolarBear, GiMagnifyingGlass, GiFootprint, GiPathDistance, GiCakeSlice } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import AccessGate from '@/components/AccessGate';

const sections = [
  {
    title: "Happy Birthday, Senyor!",
    subtitle: "The sunshine of Casablanca ☀️",
    image: "/polar-bear.jpg", 
    description: "Wishing you a bright year ahead, May every day be as radiant as you are :) ",
    sticker: "/polar-bear.jpg", 
    icon: GiPolarBear,
    backMessage: "Like a Leo, you light up every room you enter. Your energy is contagious and your smile brightens everyone's day!"
  },
  {
    title: "Adventures in China",
    subtitle: "PhD Journey 🎓",
    image: "/china.jpg",
    description: "From Casablanca to China, your story inspires.",
    sticker: "/nerd.jpg", 
    icon: MdSchool,
    noFlip: true,
    note: "This story is yours to tell :)"
  },
  {
    title: "Physics & Books",
    subtitle: "Nerd Life 🤓",
    image: "/nerd.jpg", 
    description: "Exploring the universe, one equation at a time. Your curiosity knows no bounds!",
    sticker: "/book.png",
    icon: FaBook,
    backMessage: "From quantum mechanics to classic literature, your mind is a beautiful blend of science and art."
  },
  {
    title: "Cheers & Celebrations!",
    subtitle: "Good Times & Great Company 🥂",
    image: "/placeholder-beer.jpg", 
    description: "May your glass always be full and your heart even fuller!",
    sticker: "/wine.png",
    icon: FaCocktail,
    backMessage: "Makayn gha chrab"
  },
  {
    title: "Big Foot",
    subtitle: "Size 45 👣",
    image: "/bigfoot.jpg", 
    description: "Leaving a big mark everywhere you go, literally and figuratively!",
    sticker: "/big-foot.png",
    icon: GiFootprint,
    backMessage: "They say big feet mean big adventures ahead. You're definitely walking towards something amazing!"
  },
  {
    title: "Ben Howard",
    subtitle: "Musical Soul 🎵",
    image: "/placeholder-benhoward.jpg", 
    description: "Let the melodies of Ben Howard soundtrack your journey.",
    sticker: "/music.png",
    icon: FaMusic,
    backMessage: "From 'Old Pine' to 'Promise', his music speaks to your soul. Every song tells a story, just like you do."
  },
  {
    title: "Ink & Equations",
    subtitle: "Penguin Physics Ink 🐧",
    image: "/tattoo_1.jpg",
    description: "Nerdy Stuff",
    sticker: "/french.png",
    icon: FaPenNib,
    backMessage: "That penguin-diagram tattoo is going to be perfect! Just like how penguins see the world differently and make it more interesting, your unique perspective makes physics beautiful. Can't wait to see this nerdy art on your skin! 🐧⚛️"
  },
  {
    title: "FC Barcelona",
    subtitle: "Wait... A Madridista's Confession ⚽",
    image: "/barcelona.jpg",
    description: "God forbid, but let's do it! Celebrate B*rç*!",
    sticker: "/barcelona.png",
    icon: FaFutbol,
    backMessage: "A Madridista celebrating a Barcelona lover! 😄 Hala Madrid, but your Barça spirit is infectious!"
  },
  {
    title: "Diperloufa",
    subtitle: "Biggest Fan Ever! 🌟",
    image: "/envy.jpg",
    description: "No one loves diperloufa more than you? - the ultimate superfan!",
    sticker: "/diperloufa.png",
    icon: FaHeart,
    backMessage: "Your dedication to diperloufa is legendary! You're not just a fan, you're THE fan. Your passion is inspiring!"
  },
  {
    title: "Life Through Glasses",
    subtitle: "Clear Vision, Sharp Mind 👓",
    image: "/myope.jpg",
    description: "Seeing the world in your own unique, brilliant way.",
    sticker: "/glasses.png",
    icon: GiMagnifyingGlass,
    backMessage: "Behind those glasses are eyes that see beauty in physics, wisdom in books, and joy in simple moments. wa l3weer!"
  },
  {
    title: "Distance",
    subtitle: "Fez ↔ Beijing 🌍",
    image: "/placeholder-distance.png",
    description: "Miles apart but hearts connected across continents.",
    sticker: "/distance.png",
    icon: GiPathDistance,
    backMessage: "9,850 km kilometers separate Fez from Beijing, but friendship knows no distance. Every mile between us makes our bond stronger!",
    isDistance: true
  },
  {
    title: "Bakery Dreams",
    subtitle: "Our Sweet Connection 🥧",
    image: "/apple_tart.jpg", 
    description: "Sharing stories over apple tarts & other delicious treats.",
    sticker: "/bakery.png",
    icon: GiCakeSlice,
    backMessage: "I'll let you write something here!"
  },
];

export default function Home() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [flipped, setFlipped] = useState(Array(sections.length).fill(false));
  const [showReminder, setShowReminder] = useState(false);
  const [unlockedCards, setUnlockedCards] = useState(Array(sections.length).fill(false));
  const [showChineseLetter, setShowChineseLetter] = useState(false);
  const handleBlowOut = () => {
    setCandlesLit(false);
    setTimeout(() => setShowCards(true), 1200);
  };

  const handleFlip = (idx: number) => {
    if (sections[idx].noFlip) return;
    setFlipped((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const unlockCard = (idx: number) => {
    setUnlockedCards((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  const showReminderCard = () => {
    setShowReminder(true);
  };

  const showChineseLetterCard = () => {
    setShowChineseLetter(true);
  };

  return (
    <AccessGate>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700 font-sans p-4 sm:p-12 flex flex-col items-center justify-center" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight text-center px-4" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
          Happy Birthday, Senyor! 🎉
        </h1>
        <h2 className="text-2xl sm:text-3xl text-blue-100 mb-10 font-light text-center px-4" style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
          The sunshine of Casablanca ☀️ & The northern star of Beijing 🌟
        </h2>

        {/* Candle Animation Section */}
        {!showCards && (
          <div className="flex flex-col items-center mb-12">
            <div className="flex gap-2 flex-wrap justify-center max-w-2xl">
              {[...Array(26)].map((_, i) => (
                <span key={i} className="relative flex flex-col items-center">
                  <span className={`block w-2 h-8 bg-yellow-200 rounded-t-full border-b-2 border-yellow-600 ${candlesLit ? "animate-candle-flicker" : "opacity-30"}`}></span>
                  <span className={`block w-2 h-4 bg-blue-600 rounded-b-full ${candlesLit ? "" : "opacity-30"}`}></span>
                  <FaHeart className={`absolute -top-4 left-1/2 -translate-x-1/2 text-pink-400 ${candlesLit ? "animate-heart-beat" : "opacity-30"}`} size={18} />
                </span>
              ))}
            </div>
            <button
              onClick={handleBlowOut}
              className="mt-8 px-8 py-3 bg-blue-700 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-900 transition-all duration-300 flex items-center gap-2"
            >
              <FaHeart className="text-pink-400 animate-heart-beat" /> Blow out the candles!
            </button>
          </div>
        )}

        {/* Storytelling Cards Section */}
        {showCards && !showReminder && (
          <div className="w-full max-w-[90rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in px-4">
            {sections.map((section, idx) => {
              const IconComponent = section.icon;
              const isUnlocked = unlockedCards[idx];
              return (
                <div
                  key={idx}
                  className={`relative group h-[520px] ${section.noFlip && isUnlocked ? "cursor-default" : "cursor-pointer"}`}
                  onClick={() => isUnlocked ? handleFlip(idx) : unlockCard(idx)}
                >
                  {/* Blur Overlay for Locked Cards */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl z-30 flex items-center justify-center border border-white/30">
                      <div className="text-center space-y-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                          <FaLock className="text-blue-600 mx-auto animate-pulse" size={32} />
                        </div>
                        <p className="text-white font-semibold text-lg drop-shadow-lg">Click to Unlock</p>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                          <p className="text-white text-sm">{section.title}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Modern Card Container */}
                  <div className={`absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${flipped[idx] && !section.noFlip && isUnlocked ? "[transform:rotateY(180deg)]" : ""}`}>
                    {/* Front Side - Ultra Modern Design */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/20 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/30 [backface-visibility:hidden] overflow-hidden group-hover:shadow-[0_20px_60px_rgba(31,38,135,0.25)] transition-all duration-500">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating Icon - Fixed Positioning */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          <div className="bg-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full p-3 border-3 border-blue-300 group-hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center">
                            <IconComponent className="text-blue-700 drop-shadow-lg" size={24} />
                          </div>
                          {/* Unlock indicator */}
                          {isUnlocked && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-lg border-2 border-white">
                              <FaLockOpen className="text-white" size={8} />
                            </div>
                          )}
                          {/* Enhanced glow effect */}
                          <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                        </div>
                      </div>
                      
                      {/* Main Image Container - Adjusted for icon */}
                      <div className="relative w-full h-40 mt-20 mb-4 px-6">
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] border-2 border-white/50 group-hover:border-white/70 transition-all duration-300">
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={300}
                            height={160}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="px-6 pb-6 flex flex-col items-center text-center space-y-2 relative z-10">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent leading-tight tracking-tight">
                          {section.title}
                        </h3>
                        <p className="text-blue-600/80 italic text-sm font-medium tracking-wide">
                          {section.subtitle}
                        </p>
                        <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
                          {section.description}
                        </p>
                        
                        {/* Special handling for no-flip cards */}
                        {section.noFlip && isUnlocked && (
                          <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50 shadow-inner">
                            <p className="text-blue-700 text-xs font-semibold italic">{section.note}</p>
                          </div>
                        )}
                        
                        {/* Interactive hint */}
                        {!section.noFlip && isUnlocked && (
                          <div className="mt-auto pt-2">
                            <div className="flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 px-3 py-1 rounded-full border border-pink-200/50 shadow-sm group-hover:shadow-md transition-all duration-300">
                              <FaHeart className="text-pink-400 animate-heart-beat" size={10} />
                              <span className="text-pink-600 text-xs font-medium">Flip to reveal</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Back Side - Enhanced with Better Distance Animation */}
                    {!section.noFlip && isUnlocked && (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/30 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
                        
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                          {/* Regular back content for all cards including distance */}
                          <div className="space-y-4">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                              <FaHeart className="text-pink-500 animate-heart-beat mx-auto" size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-indigo-800 mb-2">
                              Sweet Secret... ✨
                            </h3>
                            <p className="text-indigo-700 text-sm leading-relaxed px-4">
                              {section.backMessage}
                            </p>
                          </div>
                          
                          {/* Animated Hearts */}
                          <div className="flex justify-center space-x-2">
                            <FaHeart className="text-pink-400 animate-heart-beat" size={16} />
                            <FaHeart className="text-pink-500 animate-heart-beat animation-delay-200" size={14} />
                            <FaHeart className="text-pink-600 animate-heart-beat animation-delay-400" size={16} />
                            <FaHeart className="text-pink-500 animate-heart-beat animation-delay-600" size={14} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Next/Heart Button */}
        {showCards && !showReminder && (
          <div className="mt-12 animate-fade-in">
            <button
              onClick={showReminderCard}
              className="group bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-8 py-4 rounded-full shadow-xl text-lg font-semibold transition-all duration-300 hover:scale-110 flex items-center gap-3"
            >
              <FaHeart className="animate-heart-beat group-hover:scale-125 transition-transform duration-300" size={24} />
              One more thing...
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        )}

        {/* Reminder Card */}
        {showReminder && (
          <div className="w-full max-w-2xl animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-white/20 text-center">
              <div className="mb-6">
                <div className="bg-pink-100 rounded-full p-4 inline-block mb-4 shadow-lg">
                  <FaHeart className="text-pink-500 animate-heart-beat" size={48} />
                </div>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-xl border-2 border-pink-200">
                <Image
                  src="/reminder.png"
                  alt="Kind Reminder"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-3xl font-bold text-pink-600 mb-3 drop-shadow-md">
                Kind Reminder 💝
              </h3>
              
              <p className="text-pink-800 text-xl leading-relaxed font-medium italic px-4">
              &ldquo;Tout va s&rsquo;arranger, c&rsquo;est faux, je sais qu&rsquo;tu sais&rdquo;
              </p>
              
              <div className="flex justify-center space-x-3 mt-8">
                <FaHeart className="text-pink-400 animate-heart-beat" size={24} />
                <FaHeart className="text-pink-500 animate-heart-beat animation-delay-200" size={20} />
                <FaHeart className="text-pink-600 animate-heart-beat animation-delay-400" size={24} />
                <FaHeart className="text-pink-500 animate-heart-beat animation-delay-600" size={20} />
                <FaHeart className="text-pink-400 animate-heart-beat animation-delay-800" size={24} />
              </div>
            </div>
            
            {/* CHINESE LETTER BUTTON - Only shows with reminder */}
            <div className="w-full flex justify-center my-10">
              <button
                onClick={showChineseLetterCard}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full shadow-xl text-lg font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3"
                style={{boxShadow: '0 10px 25px rgba(254, 202, 87, 0.5)'}}
              >
                <span className="text-2xl">📜</span>
                One last thing...
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}


        {/* Chinese Letter Popup */}
        {showChineseLetter && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="relative max-w-lg w-full mx-4">
              {/* Vintage Letter Background */}
              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl shadow-2xl border-8 border-amber-200 p-8 relative overflow-hidden">
                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/30 to-amber-200/20 pointer-events-none"></div>
                
                {/* Decorative vintage corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-amber-400 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-amber-400 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-amber-400 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-amber-400 rounded-br-lg"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  {/* Chinese Happy Birthday */}
                  <div className="space-y-4">
                    <div className="text-6xl font-bold text-amber-800 leading-tight" style={{fontFamily: "'Noto Serif SC', serif"}}>
                      生日快乐
                    </div>
                    <div className="text-2xl text-amber-700 font-medium">
                      Shēngrì kuàilè
                    </div>
                    <div className="text-lg text-amber-600 italic">
                      Mèng Ruì Dà!
                    </div>
                  </div>
                  
                  {/* Personal message */}
                  <div className="bg-amber-100/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-amber-300">
                    <p className="text-amber-800 text-base leading-relaxed font-medium">
                      520 
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="flex justify-center space-x-4">
                    <span className="text-3xl">🐉</span>
                    <span className="text-3xl">🎊</span>
                    <span className="text-3xl">💋</span>
                    <span className="text-3xl">🎂</span>

                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setShowChineseLetter(false)}
                    className="mt-6 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Kisses! -A ✨
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-16 text-blue-100 text-lg flex items-center gap-2 text-center px-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
          From A. | Made with <FaHeart className="text-pink-400 animate-heart-beat" /> for MRM | Open Source Birthday Card ✨
        </footer>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@400;700&display=swap');
          
          @keyframes candle-flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-candle-flicker {
            animation: candle-flicker 1s infinite;
          }
          @keyframes heart-beat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
          .animate-heart-beat {
            animation: heart-beat 1s infinite;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          .animation-delay-800 {
            animation-delay: 0.8s;
          }
          .animate-fade-in {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .perspective {
            perspective: 1200px;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </div>
    </AccessGate>
  );
}

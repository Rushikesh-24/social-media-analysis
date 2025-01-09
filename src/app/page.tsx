"use client";
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AccountDialog from "@/components/AccountDialog";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Header",{
      backgroundColor:"white",
      scrollTrigger:{
        trigger:"#Section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })
    gsap.fromTo(
      "#Text",
      { scale: 1.3, transformOrigin: "top center" },
      {
        letterSpacing: "0.09em",
        scale: 1,
        duration: 1,

        scrollTrigger: {
          trigger: "#Section",
          start: "20% bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }
    );
  },[])

  const features = [
    {
      title: "Analytics Growth",
      description: "Track your social media metrics with advanced analytics and insights",
      icon: "📈"
    },
    {
      title: "Engagement Boost",
      description: "Increase your engagement rates with AI-powered content suggestions",
      icon: "🚀"
    },
    {
      title: "Community Building",
      description: "Build and nurture an engaged community around your brand",
      icon: "🤝"
    }
  ];
  return (
    <div className={`w-full min-h-screen overflow-hidden font-ubuntu-condensed relative `}>
      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 " id="Header">
            <div className="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto">
              <div className="text-2xl font-bold hover:text-yellow-400 transition-colors">
                <a href="/" className="flex items-center gap-2">
                  <span className="size-8 bg-yellow-400 rounded-full"></span>
                  BOOST
                </a>
              </div>
              <nav className="block">
                <ul className="flex space-x-8">
                  <li>
                    <a href="#services" className="text-lg hover:text-yellow-400 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-lg hover:text-yellow-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-lg px-6 py-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Hero section */}
      <div className="relative w-full h-screen" id="Hero">
        <div className={`bg-[#f8e7dd] glaze z-0 fixed top-0 flex justify-center items-center w-full h-full`}>
          

          {/* Rest of the existing content */}
          <div className="md:w-[70%] lg:w-2/3 w-full h-2/3 flex justify-center items-start md:p-20 p-14 flex-col uppercase font-extrabold md:text-9xl text-7xl md:text-left text-center">
            <h1><span className="drop-shadow-[0_0px_100px_rgba(250,204,21,1)]">BOOST</span> Your</h1>
            <p>
              <span className="stroke">Social</span> Game
            </p>
            <div className="text-3xl bg-yellow-400 relative z-10 -rotate-6 -mt-2 p-2">
              Fly high, don't just glide.
            </div>
            <p className="text-xl normal-case md:w-full lg:w-[70%] sm:w-4/5 w-[90%] mt-10 font-normal font-sans text-center md:text-left view">
              Helping individuals grow and develop their social media accounts by
              providing insights and strategies to increase engagement and reach.
            </p>
            <AccountDialog/>
          </div>
          <div className="md:w-[30%] lg:w-1/3 hidden h-2/3 md:flex justify-center items-center relative">
            <div className="relative grid grid-cols-2 grid-rows-2 w-full h-full gap-0">
              <div className="size-52 rounded-full bg-red-300/65 blur-xl opacity-50 mx-10 my-10"></div>
              <div className="size-52 rounded-full bg-green-300/65 blur-xl opacity-50"></div>
              <div className="size-52 rounded-full bg-blue-300/65 blur-xl opacity-50"></div>
              <div className="size-52 rounded-full bg-yellow-300/65 blur-xl opacity-50 -mx-10 -my-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div  className="w-full flex flex-col relative z-20" id="Section">

      <div className={`h-screen bg-black text-white text-center uppercase px-20 flex justify-center items-center flex-col w-full sticky top-0 z-20`} id="Text">
        <p className="md:text-8xl lg:text-9xl text-5xl md:text-left text-center font-bold stroke-white">100% Satisfied</p>
        <p className="md:text-8xl lg:text-9xl text-5xl md:text-left text-center font-bold">Creators WORLDWIDE</p>
        <p className="text-3xl mt-10 leading-10 normal-case">We believe in building long-term work relationships with investors. Therefore, we are
        committed to providing excellent support throughout their journey.</p>
      </div>
      <div className="relative/ z-20 bg-black py-32 px-6 w-full sticky top-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-5xl md:text-7xl font-bold text-center mb-20">
            Unleash Your <span className="text-yellow-400">Social Potential</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-black p-8 rounded-2xl h-full border border-white/10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-white text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  <div className={`mt-6 flex items-center gap-2 text-yellow-400 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 view`}>
                    <span>Learn more</span>
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BOOST</h3>
            <p className="text-gray-400 view">Elevating your social presence to new heights.</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="view"><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li className="view"><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li className="view"><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="view">contact@boost.com</li>
              <li className="view">+1 (555) 123-4567</li>
              <li className="view">123 Social Street, NY 10001</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/10 px-4 py-2 rounded-full flex-grow" />
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 BOOST. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
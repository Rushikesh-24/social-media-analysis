"use client"
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
function InitComponent() {
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
  return (
    <div>
        
    </div>
  )
}

export default InitComponent
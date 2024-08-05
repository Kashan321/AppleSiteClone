import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {heroVideo, smallHeroVideo} from "../Utils/index"
import { useEffect, useState } from "react"
function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  useGSAP(() => {
    gsap.to("#hero", { opacity: 2, delay: 1.5, })
    gsap.to("#cta",{opacity:1, delay:2, y:-50, })
  }, [])

  const handleResize = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex flex-center flex-col'>
        <p id="hero" className='hero-title'>Iphone 15 pro</p>
        <div className="md:w-10/12 w-9/12">
        <video autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="text-xl font-normal">from $199/m or $999</p>
      </div>
    </section>
  )
}

export default Hero
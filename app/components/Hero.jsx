import './hero.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-main">
        <div className='hero-content'>
            <div className='hero-left'>
                <h1 className='hero-title'>Hello, I&apos;m</h1>
                <h1 className='hero-title'>Web Developer</h1>
                <p className='hero-text'>I turn ideas into products by crafting scalable front-end <br />products with great user experience</p>
                <button className='hero-btn'>Contact Me</button>
            </div>
            <div className='hero-right'>
                <Image priority className='hero-img' src={'/assets/hero-bg.png'} alt='hero-img' width={546} height={315}/>
            </div>
        </div>
    </section>
  )
}

export default Hero
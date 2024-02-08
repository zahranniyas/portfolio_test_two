'use client'
import { useState, useTransition } from 'react';
import Image from 'next/image'
import './about.css';
import TabButton from './TabButton';

const tabData = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul>
        <li>HTML, CSS & SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>BSc. in Computer Science - Kingston University, UK (Final Year)</li>
        <li>Pearson BTEC HND in Web & App Development from AMDT</li>
        <li>Advanced Diploma in UX Design from AMDT</li>
      </ul>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>Front-End Developer - Animatist (Pvt) Ltd (2021 - Present)</li>
        <li>Head of Taxation - Frontier Advisory (Pvt) Ltd (2018 - 2021)</li>
      </ul>
    )
  },
]

const About = () => {

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='about-main'>
      <div className='about-container'>

        <div className="about-left">
          <Image src={'/assets/skill-icon.png'} alt='skill-icon' width={200} height={200}/>
        </div>

        <div className="about-right">
          <h1 className='about-title'>About <span>Me</span></h1>
          <p className='about-text'>I’m a Web & App Developer with a passion for creating interactive and responsive web applications. I’m a quick learner and always look to expand my knowledge and skill set. I’m a team player and I’m excited to work with others to create amazing applications</p>
          <div>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>{' '}Skills{' '}</TabButton>

            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>{' '}Education{' '}</TabButton>

            <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>{' '}Experience{' '}</TabButton>
          </div>

          <div className='about-cont'>{tabData.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default About
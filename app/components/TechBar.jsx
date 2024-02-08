'use client'
import './techbar.css';
import Image from 'next/image';

const techData = [
    {
        id: 1,
        name: 'html',
        img: '/assets/html-logo.png'
    },
    {
        id: 2,
        name: 'react',
        img: '/assets/react-logo.png'
    },
    {
        id: 3,
        name: 'javascript',
        img: '/assets/js-logo.png'
    },
    {
        id: 4,
        name: 'nodejs',
        img: '/assets/node-logo.png'
    },
    {
        id: 5,
        name: 'css',
        img: '/assets/css-logo.png'
    },
]

const TechBar = () => {
  return (
    <section className='tech-main'>
        <div className='tech-container'>
            {techData.map(({name, img, id}) => {
                return(
                    <div key={id}>
                        <Image className='tech-img' src={img} alt={name} width={100} height={100} />
                    </div>
                )
            })

            }
        </div>
    </section>
  )
}

export default TechBar
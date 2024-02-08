import './stats.css'


const statsList = [
    {
        name: 'Happy Clients',
        value: 20
    },
    {
        name: 'Projects Completed',
        value: 50
    },
    {
        name: 'Lines of Code',
        value: 6000
    },
]

const Stats = () => {
  return (
    <section className='stats-main'>
        <div className='stats-container'>
            {statsList.map((achievements, index) => {
                return(
                    <div className='stats-item' key={index}>
                        <h1>{achievements.value}+</h1>
                        <p>{achievements.name}</p>
                    </div>

                )
            })}
        </div>
    </section>
  )
}

export default Stats
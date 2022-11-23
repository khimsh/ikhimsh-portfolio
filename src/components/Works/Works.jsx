import Work from '../Work/Work'
import data from '../../data.json'
import './works.scss'

const works = data.works

function Works() {
    return (
        <section className='works'>
            <h2 className='works__title'>My Works</h2>

            <div className='works__grid'>
                {works.map((work, key) => {
                    return <Work key={key} props={work} />
                })}
            </div>
        </section>
    )
}

export default Works

import './work.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Work({ props }) {
    const { title, desc, link, image } = props

    return (
        <article className='work'>
            <figure className='work__image'>
                <img src={image} alt={title} />
            </figure>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faEye} size='sm' />
                    view live website
                </a>
            </div>
        </article>
    )
}

export default Work

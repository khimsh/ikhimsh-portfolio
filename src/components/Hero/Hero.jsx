import HeroImgSVG from './HeroImgSVG'
import './hero.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {
    return (
        <section className='hero'>
            <div className='hero__texts'>
                <h1 className='hero__title'>Front-End development</h1>

                <ul className='social social--hero'>
                    <li className='social__item'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='mailto:mailto:i.khimsh@gmail.com'
                            className='social__link'
                            aria-label='email'
                        >
                            <FontAwesomeIcon icon={faEnvelope} size='xl' />
                        </a>
                    </li>
                    <li className='social__item'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://github.com/khimsh'
                            className='social__link'
                            aria-label='github'
                        >
                            <FontAwesomeIcon icon={faGithub} size='xl' />
                        </a>
                    </li>
                    <li className='social__item'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.linkedin.com/in/ia-khimsh/'
                            className='social__link'
                            aria-label='linkedin'
                        >
                            <FontAwesomeIcon icon={faLinkedin} size='xl' />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='hero__image'>
                <HeroImgSVG />
            </div>
        </section>
    )
}

export default Hero

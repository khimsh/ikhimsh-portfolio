import './contact.scss'

function Contact() {
    return (
        <section className='contact'>
            <h2 className='contact__title'>Get in touch</h2>

            <ul class='contact__social'>
                <li>
                    <a href='mailto:i.khimsh@gmail.com'>i.khimsh@gmail.com</a>
                </li>
                <li>
                    <a href='https://github.com/khimsh' target='_blank' rel='noopener noreferrer'>
                        github.com/khimsh
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ia-khimsh/' target='_blank' rel='noopener noreferrer'>
                        linkedin.com/in/ia-khimsh/
                    </a>
                </li>
                <li>
                    <a href='https://khimsh.github.io/resume/' target='_blank' rel='noopener noreferrer'>
                        resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contact

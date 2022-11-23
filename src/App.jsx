import { Helmet } from 'react-helmet'

import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'

function App() {
    return (
        <div className='App'>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
                <meta name='viewport' content='width=device-width' />
                <title>Front End Web Developer | Ia Khimsh</title>
                <link rel='canonical' href='https://ikhimsh.netlify.app/' />
            </Helmet>

            <div className='container'>
                <Header />
                <Hero />
                <Works />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App

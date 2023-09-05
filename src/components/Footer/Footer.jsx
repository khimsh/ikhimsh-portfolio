import './footer.scss'

const currentYear = new Date().getFullYear()

function Footer() {
    return <footer className='footer'>© iaKhimsh – 2020 – {currentYear}</footer>
}

export default Footer

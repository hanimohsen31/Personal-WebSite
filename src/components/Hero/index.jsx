import './Hero.css'

export const Hero = (props) => {
    const img = props.img
    return (
        <>
            <div className='hero'>
                <div className='heroImgContain'><img className='heroImg' src={img} alt='img' /></div>
                <div className='heroContent'>
                    <div className="heroText wow fadeInUp">
                        <h1>Create Your Own Dream Design ...</h1>
                        <h6>Start Making your dream come true today</h6>
                    </div>
                    <div className='heroButtons wow fadeInUp'>
                        <a href='/portfolio' rel="noreferrer">
                            <button className='btn btn-danger rounded-pill'>Show Portfolio</button>
                        </a>
                        <a href='https://wa.me/201116886029' rel="noreferrer" target='_blank'>
                            <button className='btn btn-outline-light rounded-pill' >Contact Us</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
import './MainAttractions.css';
const MainAttractions = () => {

    return (
        <>
            {/* <div className="main-attractions">
                <h2>MAIN ATTRACTIONS</h2>
                <div className='inner-container'>
                <img src="Divya kumar.webp" alt="" />
                    <div className='details'>
                        <p>Get ready to groove with Divya Kumar as they light up the stage!</p>
                        <div className='inner-details'>
                            <p>Dec 7, 2024</p>
                            <p>7:30pm</p>
                        </div>
                    </div>
                    
                </div>
                <div className='inner-container'>
                    <img src="djraya.webp" alt="" />
                </div>
                <div className='inner-container'>
                    <img src="dragon dance.webp" alt="" />
                </div>
            </div> */}

            <div className="first hero">
                <img src="Divya kumar.jpg" alt="" className="image"/>
                    <div className="text"></div>
                    <div className="main-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="date">
                        <p>7.12.2024</p>
                    </div>
                    <div className="hero-btn">
                        <a href="#">Learn More</a>
                    </div>
            </div>

            <div className="second hero">
                <img src="djraya.jpg" alt="" className="image"/>
                    <div className="text"></div>
                    <div className="main-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="date">
                        <p>6.12.2024</p>
                    </div>
                    <div className="hero-btn">
                        <a href="#">Learn More</a>
                    </div>
            </div>

            <div className="first third hero">
                <img src="dragon dance.jpg" alt="" className="image"/>
                    <div className="text"></div>
                    <div className="main-text">
                        <h2>Dragon Dance</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="date">
                        <p>6.12.2024</p>
                    </div>
                    <div className="hero-btn">
                        <p>7:30</p>
                    </div>
            </div>
        </>
    )
}

export default MainAttractions;
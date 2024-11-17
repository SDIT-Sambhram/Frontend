import './MainAttractions.css';
const MainAttractions = () => {

    return (
        <>
            <div className='main-container'>
                <h2>SPECIAL ATTRACTIONS</h2>
                <div className='hero-container'>

                    <div className="first hero">
                        <img src="Divya kumar.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DIVYA KUMAR</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>7.12.2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:30 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="second hero">
                        <img src="djraya.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DJ <br/>RAYA</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>6.12.2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:30 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="third hero">
                        <img src="dragon dance.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DRAGON DANCE</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>6.12.2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="fourth hero">
                        <img src="battle of bands.webp" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>BATTLE <br />OF BANDS</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>7.12.2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainAttractions;
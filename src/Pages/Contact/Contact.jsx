import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact">


                <div className="contact-box">
                    <div className="contact-heading">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-envelope fa-xl"></i><h2>Mail</h2>
                        </div>
                        <div className="contact-element">
                            <p>shreedevisambhram@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-phone fa-xl"></i><h2>Phone</h2>
                        </div>
                        <div className="contact-element">
                            <p>+91 9741152696</p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-location-dot fa-xl"></i><h2>Address</h2>
                        </div>
                        <div className="contact-element">
                            <p>Shree Devi Institute Of Technology, Kenjar, Near Mangalore International Airport, Karnataka - 574142</p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-headset fa-xl"></i><h2>Tech Support</h2>
                        </div>
                        <div className="contact-element">
                            <div className="contact-name">
                                <p>Abdulla Shafaz  </p><p><b>+91 75103 24437</b></p>
                            </div>
                            <div className="contact-name">
                                <p>Abhishek Kulal  </p><p>+91 81050 48276</p>
                            </div>
                            <div className="contact-name">
                                <p>Abhin M  </p><p>+91 95626 20848</p>
                            </div>



                        </div>
                    </div>
                    <hr />



                </div>
            </div>
        </>
    )
}

export default Contact;
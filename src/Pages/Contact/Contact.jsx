import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-heading">
                    <h2>Contact Us</h2>
                </div>

                <div className="contact-box">

                {/* <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-user fa-xl"></i><h2>Media team</h2>
                        </div>
                        <div className="contact-element">
                            <h4>Rohan shetty (Head) </h4><p>+91 99999999999999</p>
                        </div>
                        <div className="contact-element">
                            <h4>Rohan shetty (Head) </h4><p>+91 99999999999999</p>
                        </div>
                        <div className="contact-element">
                            <h4>Rohan shetty (Head) </h4><p>+91 99999999999999</p>
                        </div>
                    </div> */}
                    
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
                            <p>Abdulla Shafaz : <b>+91 7510324437</b></p>
                            <p>Abhishek Kulal : 999999999999999</p>
                            <p>Abhin M : 9562620848</p>
                        </div>
                    </div>
                    <hr />



                </div>
            </div>
        </>
    )
}

export default Contact;
import './Footer.css'

const Footer = () =>{
    return(
        <>
        <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Contact Us</h4>
          <ul class="links icon">
            <li><a href="https://www.instagram.com/sambhram.24" target="_blank"><i class=" fa-brands fa-instagram" ></i>Instagram</a></li>
            <li><a href="tel:+91 9741152696"><i class="fa-solid fa-phone" ></i>+91 9741152696</a></li>
            <li><a href="mailto:shreedevisambhram@gmail.com"><i class="fa-solid   fa-envelope" ></i>shreedevisambhram@gmail.com</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="https://sambhram-assets.s3.ap-south-1.amazonaws.com/Privacy+Policy.pdf" target="_blank">Privacy Policy</a></li>
            <li><a href="https://sambhram-assets.s3.ap-south-1.amazonaws.com/Terms+and+Conditions.pdf" target="_blank">Terms & Conditions</a></li>
          </ul>
        </div>


        <div class="footer-col">
          <h4>Address</h4>
          <p>
            Shree Devi Institute Of Technology, Kenjar, Near Mangalore International Airport, 
            Karnataka - 574142
          </p>
        </div>
      </div>
    </section>
        </>
    )
}

export default Footer;
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import "./AboutComponent.css"

const AboutComponent = () => {
  const prevEventImages = [
    { src: "/images/sambhram-prev1.jpg", alt: "Cultural Performance" },
    { src: "/images/sambhram-prev2.jpg", alt: "Technical Exhibition" },
    { src: "/images/sambhram-prev3.jpg", alt: "Dance Competition" },
    { src: "/images/sambhram-prev4.jpg", alt: "Technical Workshop" },
    { src: "/images/sambhram-prev5.jpg", alt: "Award Ceremony" },
    { src: "/images/sambhram-prev6.jpg", alt: "Student Projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="about-component">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.h1 variants={itemVariants}>
          About Our Institute
        </motion.h1>
        
        <motion.div 
          className="about-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="card-content">
            <div className="card-text">
              <h2>Shree Devi Institute of Technology</h2>
              <p>Established in 2006, Kenjar, Mangaluru</p>
              <p>Affiliated to Visvesvaraya Technological University, Belagavi</p>
              <p>Recognized by All India Council for Technical Education (AICTE), New Delhi</p>
            </div>
            <motion.div 
              className="card-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src="/images/college-building.jpg" alt="College Building" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="about-description"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="description-content">
            <motion.div 
              className="description-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src="/images/campus-life.jpg" alt="Campus Life" />
            </motion.div>
            <div className="description-text">
              <p>Our institution stands as a beacon of academic brilliance in the field of Engineering, Management and Computer applications. Established with a vision to nurture future innovators and problem solvers, the institute has consistently upheld its commitment to excellence since its inception.</p>
              
              <p>The meticulously designed curriculum integrates theoretical learning with hands-on experiences ensuring that graduates can apply their knowledge to real world challenges. The institute takes pride in its modern infrastructure with state-of-the-art laboratories.</p>
              
              <p>Shree Devi Institute of Technology is more than an academic institution, it is a dynamic ecosystem where passion meets purpose, and where the young minds are nurtured to lead, innovate and make a lasting impact on the world.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="sambhram-section"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <h2>About Shree Devi Sambhram</h2>
          <div className="event-details">
            <span className="event-date">December 6th - 7th, 2024</span>
            <span className="venue">Shree Devi Institute of Technology, Airport Road, Kenjar, Mangaluru</span>
          </div>
          <div className="sambhram-content">
            <div className="sambhram-text">
              <div className="sambhram-description">
                <p>SHREE DEVI SAMBHRAM, A National Level Technical & Cultural Fest organized by Shree Devi Institute of Technology. This technical and cultural extravaganza gives an opportunity to collect and rekindle the strength, creativity, skills and all that will lead you to the zenith.</p>
                
                <p>The two days fest is meant to usher fresh ideas and redefine the dimensions of knowledge. Shree Devi Sambhram hosts a galaxy of events aimed at boosting the technical skills inherited in youth.</p>
                
                <p>With a plethora of technical and cultural events waiting to be explored and unravelled, this is the ultimate place to rediscover oneself. This forms the heart and soul of the festival and seeks to provide a common platform for the best brains to interact and nurture their ideas and transforming them into reality.</p>
                
                <p className="highlight">Our aim is simple - Explore and Exhibit the talents. We aim to help students to come out as pioneers with the social and professional values which are vital for technical excellence.</p>
              </div>
            </div>
            <motion.div 
              className="sambhram-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src="/images/sambhram-event.jpg" alt="Sambhram Event" />
            </motion.div>
          </div>
          <motion.div 
            className="previous-events"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3>Previous Event Highlights</h3>
            <div className="event-gallery">
              {prevEventImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  variants={imageVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div className="image-container">
                    <img src={image.src} alt={image.alt} />
                    <div className="image-overlay">
                      <p>{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutComponent
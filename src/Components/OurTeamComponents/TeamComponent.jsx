import React, { useEffect, useRef } from 'react';
import './TeamComponent.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import abhishekImage from './images//abhishek.jpg';
import abdhullaImage from './images/1000324130.jpg';
import mukeshImage from './images/mukesh.jpg';
import adithyaImage from './images/adithya.jpg';
import fahizImage from './images/fahiz.jpg';
import shanifImage from './images/shanif.jpg';
import devdarshImage from './images/devdarsh.jpg';
import surajImage from './images/suraj.jpg';
import abhinImage from './images/ABHIN_M_4SH21CS007.jpg';
import rohanImage from './images/rohan.jpg';

const teamMembers = {
  team: [
    {
      name: "Abhishek Kulal",
      role: "Website Lead",
      image: abhishekImage, // Updated image reference
      github: "https://github.com/lead",
      linkedin: "https://linkedin.com/in/lead",
      isHead: true
    },
    {
      name: "Abdhulla Shafaz KU",
      role: "Website Co-Lead",
      image: abdhullaImage, // Updated image reference
      github: "https://github.com/colead",
      linkedin: "https://linkedin.com/in/colead",
      isCoHead: true
    },
    {
      name: "Abhin M",
      role: "Frontend Developer",
      image: abhinImage,
      github: "https://github.com/dev1",
      linkedin: "https://linkedin.com/in/dev1"
    },
    {
      name: "Dhanya Kamath",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev2",
      linkedin: "https://linkedin.com/in/dev2"
    },
    {
      name: "K Mukesh",
      role: "Full Stack Developer",
      image: mukeshImage, // Updated image reference
      github: "https://github.com/dev3",
      linkedin: "https://linkedin.com/in/dev3"
    },
    {
      name: "Suraj MP",
      role: "UI/UX Developer",
      image: surajImage,
      github: "https://github.com/dev4",
      linkedin: "https://linkedin.com/in/dev4"
    },
    {
      name: "Isha",
      role: "Database Engineer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev5",
      linkedin: "https://linkedin.com/in/dev5"
    },
    {
      name: "Cheeranjeevi",
      role: "API Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev6",
      linkedin: "https://linkedin.com/in/dev6"
    },
    {
      name: "Appuraj",
      role: "Cloud Engineer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev9",
      linkedin: "https://linkedin.com/in/dev9"
    },
    {
      name: "Shreyas",
      role: "Quality Assurance Engineer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev10",
      linkedin: "https://linkedin.com/in/dev10"
    }
  ]
};

const specialContributors = {
  team: [
    {
      name: "Fahiz",
      role: "Technical Support",
      image: fahizImage, // Updated image reference
      github: "https://github.com/fahiz",
      linkedin: "https://linkedin.com/in/fahiz"
    },
    {
      name: "Adithya",
      role: "Design Contributor",
      image: adithyaImage, // Updated image reference
      github: "https://github.com/adithya",
      linkedin: "https://linkedin.com/in/adithya"
    },
    {
      name: "Shanif",
      role: "Development Support",
      image: shanifImage, // Updated image reference
      github: "https://github.com/shanif",
      linkedin: "https://linkedin.com/in/shanif"
    },
    {
      name: "Devdarsh",
      role: "Technical Advisor",
      image: devdarshImage, // Updated image reference
      github: "https://github.com/devdarsh",
      linkedin: "https://linkedin.com/in/devdarsh"
    },
    {
      name: "Yadhukrishna",
      role: "Development Support",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/yadhukrishna",
      linkedin: "https://linkedin.com/in/yadhukrishna"
    },
    {
      name: "Sanjana",
      role: "Development Support",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/yadhukrishna",
      linkedin: "https://linkedin.com/in/yadhukrishna"
    }
  ]
};

const HeadCard = () => {
  return (
    <div className="sambhram-head-card">
      <div className="sambhram-head-image">
        <img src={rohanImage} alt="Team Head" />
      </div>
      <div className="sambhram-head-info">
        <h2>Rohan Shetty</h2>
        <p className="sambhram-head-role">Sambhram Student Coordinator</p>
        <p className="sambhram-head-description">
          Leading our talented team with vision and expertise, driving innovation and excellence in every project.
        </p>
        <div className="sambhram-social-links sambhram-head-social">
          <a href="https://github.com/teamlead" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/teamlead" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

const TeamErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Team Component Error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div className="error-container">Failed to load team section. Please refresh the page.</div>;
  }

  return children;
};

const useIntersectionObserver = (options) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold || 0.2,
      rootMargin: options.rootMargin || '0px',
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
};


const TeamMemberCard = ({ member }) => {
  const cardRef = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px',
  });
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const cardClassName = `sambhram-team-member-card ${
    member.isHead ? 'head-member' : member.isCoHead ? 'co-head-member' : ''
  } ${imageLoaded ? 'loaded' : ''}`;

  return (
    <div className={cardClassName} ref={cardRef}>
      <div className="sambhram-image-container">
        <img 
          src={member.image} 
          alt={member.name} 
          className="sambhram-member-image" // Updated className
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=Member';
            setImageLoaded(true);
          }}
          loading="lazy"
        />
        {!imageLoaded && <div className="image-placeholder" />}
      </div>
        <h3>{member.name}</h3>
        <p className="sambhram-member-role">{member.role}</p>
        {(member.isHead || member.isCoHead) && (
          <>
            <p className="leader-description">
              {member.isHead ? 
                "Leading the team with technical excellence and innovation, driving our vision forward with expertise and dedication." :
                "Supporting the team's success through technical guidance and collaborative leadership, ensuring project excellence."
              }
            </p>
            {/* <div className="leader-stats">
              <span>Experience: {member.isHead ? "10+ years" : "8+ years"}</span>
              <span>Projects: {member.isHead ? "50+" : "40+"}</span>
            </div> */}
          </>
        )}
        <div className="sambhram-social-links">
            <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div className="sambhram-team-section" ref={sectionRef}>
      <h2 data-text={title}>{title}</h2>
      <div className="sambhram-team-members">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamComponent = () => {
    return (
      <TeamErrorBoundary>
        <div className="sambhram-team-container">
            <h1>Our Team</h1>
            <HeadCard />
            <TeamSection title="Website Team" members={teamMembers.team} />
            <TeamSection title="Special Contributors" members={specialContributors.team} />
        </div>
      </TeamErrorBoundary>
    );
};

export default React.memo(TeamComponent);
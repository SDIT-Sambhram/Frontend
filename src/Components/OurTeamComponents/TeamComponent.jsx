import React, { useEffect, useRef } from 'react';
import './TeamComponent.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = {
  team: [
    {
      name: "Team Lead Name",
      role: "Technical Lead",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/lead",
      linkedin: "https://linkedin.com/in/lead",
      isHead: true
    },
    {
      name: "Co-Lead Name",
      role: "Technical Co-Lead",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/colead",
      linkedin: "https://linkedin.com/in/colead",
      isCoHead: true
    },
    {
      name: "Developer 1",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev1",
      linkedin: "https://linkedin.com/in/dev1"
    },
    {
      name: "Developer 2",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev2",
      linkedin: "https://linkedin.com/in/dev2"
    },
    {
      name: "Developer 3",
      role: "Full Stack Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev3",
      linkedin: "https://linkedin.com/in/dev3"
    },
    {
      name: "Developer 4",
      role: "UI/UX Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev4",
      linkedin: "https://linkedin.com/in/dev4"
    },
    {
      name: "Developer 5",
      role: "Database Engineer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev5",
      linkedin: "https://linkedin.com/in/dev5"
    },
    {
      name: "Developer 6",
      role: "API Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev6",
      linkedin: "https://linkedin.com/in/dev6"
    }
  ]
};

const HeadCard = () => {
  return (
    <div className="head-card">
      <div className="head-image">
        <img src="https://via.placeholder.com/200" alt="Team Head" />
      </div>
      <div className="head-info">
        <h2>Team Lead Name</h2>
        <p className="head-role">Project Lead & Technical Director</p>
        <p className="head-description">
          Leading our talented team with vision and expertise, driving innovation and excellence in every project.
        </p>
        <div className="social-links head-social">
          <a href="https://github.com/teamlead" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/teamlead" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-20px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardClassName = `team-member-card ${
    member.isHead ? 'head-member' : member.isCoHead ? 'co-head-member' : ''
  }`;

  return (
    <div className={cardClassName} ref={cardRef}>
        <img src={member.image} alt={member.name} className="member-image" />
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        {(member.isHead || member.isCoHead) && (
          <>
            <p className="leader-description">
              {member.isHead ? 
                "Leading the team with technical excellence and innovation, driving our vision forward with expertise and dedication." :
                "Supporting the team's success through technical guidance and collaborative leadership, ensuring project excellence."
              }
            </p>
            <div className="leader-stats">
              <span>Experience: {member.isHead ? "10+ years" : "8+ years"}</span>
              <span>Projects: {member.isHead ? "50+" : "40+"}</span>
            </div>
          </>
        )}
        <div className="social-links">
            <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('animate', entry.isIntersecting);
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-section" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="team-members">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamComponent = () => {
    return (
        <div className="team-container">
            <h1>Our Team</h1>
            <HeadCard />
            <TeamSection title="Website Team" members={teamMembers.team} />
        </div>
    );
};

export default TeamComponent;
import React, { useEffect, useRef } from 'react';
import './TeamComponent.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = {
  frontend: [
    {
      name: "Developer 1",
      role: "Frontend Lead",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev1",
      linkedin: "https://linkedin.com/in/dev1"
    },
    {
      name: "Developer 2",
      role: "UI/UX Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev2",
      linkedin: "https://linkedin.com/in/dev2"
    },
    {
      name: "Developer 3",
      role: "React Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev3",
      linkedin: "https://linkedin.com/in/dev3"
    },
    {
      name: "Developer 4",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev4",
      linkedin: "https://linkedin.com/in/dev4"
    }
  ],
  backend: [
    {
      name: "Developer 5",
      role: "Backend Lead",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev5",
      linkedin: "https://linkedin.com/in/dev5"
    },
    {
      name: "Developer 6",
      role: "Database Engineer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev6",
      linkedin: "https://linkedin.com/in/dev6"
    },
    {
      name: "Developer 7",
      role: "API Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev7",
      linkedin: "https://linkedin.com/in/dev7"
    },
    {
      name: "Developer 8",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev8",
      linkedin: "https://linkedin.com/in/dev8"
    }
  ],
  fullstack: [
    {
      name: "Developer 9",
      role: "Full Stack Lead",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev9",
      linkedin: "https://linkedin.com/in/dev9"
    },
    {
      name: "Developer 10",
      role: "Full Stack Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev10",
      linkedin: "https://linkedin.com/in/dev10"
    },
    {
      name: "Developer 11",
      role: "MERN Stack Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev11",
      linkedin: "https://linkedin.com/in/dev11"
    },
    {
      name: "Developer 12",
      role: "Full Stack Developer",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/dev12",
      linkedin: "https://linkedin.com/in/dev12"
    }
  ]
};

const TeamMemberCard = ({ member }) => {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-member-card" ref={cardRef}>
        <img src={member.image} alt={member.name} className="member-image" />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
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
            <TeamSection title="Frontend Development Team" members={teamMembers.frontend} />
            <TeamSection title="Backend Development Team" members={teamMembers.backend} />
            <TeamSection title="Full Stack Development Team" members={teamMembers.fullstack} />
        </div>
    );
};

export default TeamComponent;
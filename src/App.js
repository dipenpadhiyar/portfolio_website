import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "./assets/profile.jpg"; // Add your profile photo in the assets folder

const App = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/dipenpadhiyar/"
      );
      const data = await response.json();
      setCommits(data.slice(0, 5)); // Limit to 5 recent commits
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  };

  return (
    <Container>
      {/* Header Section */}
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileImage src={profilePic} alt="Profile" />
        <h1>Dipenkumar Padhiyar</h1>
        <p>🧑🏼‍💻 | MLOps Engineer</p>
      </Header>

      {/* Projects Section */}
      <Section id="projects">
        <h2>Projects</h2>
        <ProjectList>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                margin: "1rem",
                borderRadius: "8px",
                background: "#fff",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </ProjectList>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2>Skills</h2>
        <div align="center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            height="30"
            alt="c logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            height="30"
            alt="cplusplus logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            height="30"
            alt="csharp logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            height="30"
            alt="python logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
            height="30"
            alt="jupyter logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            height="30"
            alt="linux logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
            height="30"
            alt="ubuntu logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            height="30"
            alt="android logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            height="30"
            alt="androidstudio logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            height="30"
            alt="javascript logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            height="30"
            alt="typescript logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            height="30"
            alt="react logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            height="30"
            alt="html5 logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            height="30"
            alt="css3 logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg"
            height="30"
            alt="anaconda logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
            height="30"
            alt="blender logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            height="30"
            alt="bootstrap logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            height="30"
            alt="figma logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            height="30"
            alt="git logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            height="30"
            alt="github logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            height="30"
            alt="mongodb logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
            height="30"
            alt="pandas logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg"
            height="30"
            alt="putty logo"
          />
          <img width="12" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            height="30"
            alt="tensorflow logo"
          />
        </div>
        <SkillList>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill}
            </motion.li>
          ))}
        </SkillList>
      </Section>

      {/* GitHub Commits Section */}
      <Section id="commits">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=dipenpadhiyar&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
          height="150"
          alt="languages graph"
        />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <h2>Contact Me</h2>
        <p>
          <FaEnvelope /> Email:{" "}
          <a href="mailto:dipen0padhiyar@gmail.com">dipen0padhiyar@gmail.com</a>
        </p>
        <SocialLinks>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/dipenpadhiyar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/dipen0padhiyar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>
        </SocialLinks>
      </Section>

      <Footer>
        <p>&copy; 2025 Dipenkumar Padhiyar. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

// Sample Data
const projects = [
  {
    title: "🗄️🤖 servbot",
    description: "ServBot is a unified solution that combines a lightweight ServerAPI SDK for server monitoring with an interactive Ollama chatbot, enabling real-time server insights through a conversational interface.",
    link: "https://github.com/dipenpadhiyar/servbot",
  },
  {
    title: "🗄️ File Server Manager",
    description: "A web-based File Server Manager for my Linux server setup on an old laptop with 1TB storage, accessible via djserver.live. It supports file operations like upload, download, and delete with basic authentication and a mobile-friendly interface.",
    link: "https://github.com/dipenpadhiyar/file_manager_code",
  },
  {
    title: " 🎬 Movie Recommendation Systems Dashboard",
    description: " Power BI dashboard designed to compare the performance of two movie recommendation systems: Content-Based and Collaborative Filtering. It provides key insights through visualizations like accuracy trends, user ratings, and top recommended movies, helping users understand how both systems perform across various metrics.",
    link: "https://github.com/dipenpadhiyar/Movie_Recommendation_PowerBi_project",
  },
];

const skills = [
  "Docker",
  "Kubernetes",
  "CI/CD (Jenkins, GitLab CI)",
  "AWS (S3, Lambda, SageMaker)",
  "Azure DevOps",
  "Python",
  "TensorFlow",
  "Scikit-Learn",
  "Prometheus & Grafana",
  "MLflow",
];

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #f3f4f6, #e3e8ec);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Header = styled(motion.header)`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Section = styled.section`
  margin: 2rem 0;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
  }
`;

const CommitList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const CommitItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  a {
    color: #0073b1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  a {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: #555;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #0073b1;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  p {
    font-size: 0.9rem;
    color: #888;
  }
`;

export default App;

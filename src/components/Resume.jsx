import React, { useState, useEffect } from 'react';
import './Resume.css';
import pdfStyles from './ResumePDF.css?raw';


const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('education');
  const [isDownloading, setIsDownloading] = useState(false);



  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);




  const resumeData = {
    personal: {
      name: "Mohammed Maibu",
      title: "Java Full Stack Developer",

      contact: {
        mobile: "+91 9502579872",
        email: "mdmaibu8418@gmail.com",
        location: "Hyderabad, Telangana"
      },


    },

    objective: "A motivated Full-Stack Developer skilled in building complete applications with javascript,react,java,python and SQL. I am passionate about creating user-friendly products that drive results, having contributed to a 25% reduction in website bounce rates by enhancing interactivity. I am seeking to join a talented team to build impactful technology.",






    education: [
      {
        degree: "B.Tech (computer science and Engineering)",
        institution: "Joginpally B.R Engineering",
        year: "2026",
        grade: "CGPA: 81.1%",
        icon: "🎓"
      }
    ],



    skills: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
      backend: ["java", "MySQL"],
      languages: ["Java", "C", "python", "Data Structures and Algorithms "],
      tools: ["Git", "GitHub", "VS Code", "Postman"]
    },



    experience: [
      {
        title: "Full Stack Developer",
        company: "Larch soft Pvt Ltd",
        location: "remote",
        period: "April 2025 – Present",
        stack: "SQL,React.js,python",
        achievements: [
          "Enhanced website interactivity by implementing smooth animations and transitions with GSAP and Framer Motion, reducing bounce rates by 25% across multiple devices",
          "Developed a dynamic Resume Generator web application using HTML, CSS ,Boostrap ,Python and Mysql enabling users to input data and generate professional resumes with seamless front-end and back-end integration",
          "Enhanced full-stack development skills by implementing form handling, data validation, and optimized database queries, while aligning project goals with academic objectives under faculty mentorship"
        ]
      }
    ],




    projects: [
      {
        type: "PYTHON FULL STACK PROJECT",
        name: "AgriPridict",
        period: "Jan 2026 – April 2026",
        icon: "🌾",
        details: [
          "Developed an AI-powered agriculture application using Python, Flask, HTML, CSS, and Bootstrap for crop recommendation and plant disease detection",
          "Implemented Machine Learning and Random Forest algorithms for crop recommendation based on soil and environmental parameters",
          "Used CNN and Deep Learning techniques to detect and classify plant diseases from leaf images",
          "Integrated weather and agricultural data to provide suitable crop recommendations and disease prediction results"
        ]
      },



      {
        type: "PYTHON BACKEND PROJECT",
        name: "Justdial Extractor Tool",
        period: "February 2025 – March 2025",
        icon: "🔍",
        details: [
          "Developed a Python-based backend API using Flask and Selenium to automate data extraction from the Justdial website",
          "Implemented Selenium automation to search Justdial based on user-provided categories and locations and extract relevant business information",
          "Created REST APIs to trigger the extraction process and return the collected data directly to the application",
          "Designed the backend workflow to collect, process, and render extracted Justdial data through API responses"
        ]
      },

      {
        type: "CORE JAVA PROJECT",
        name: "Smart Banking Management System",
        period: " july 2026 – Aug 2026",
        icon: "🏦",
        details: [
          "Developed a console-based banking management system using Core Java and Object-Oriented Programming principles",
          "Implemented customer and account management features including customer registration, account creation, account closure, and customer details",
          "Developed banking transactions such as deposit, withdrawal, fund transfer, balance checking, and transaction history",
          "Used Java Collections, Exception Handling, Streams, and Multithreading to manage in-memory banking data and transaction processing",
          "Implemented user registration and login functionality with role-based access for Admin and Customer users"
        ]
      },

    ]
  };




  const sections = [
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];






  const generatePDF = () => {
    setIsDownloading(true);

    const printWindow = window.open('', '_blank');

    const pdfContent = `

    <!DOCTYPE html>

    <html>

    
    <head>

        <title>${resumeData.personal.name} - Resume</title>
        
        <style> ${pdfStyles} </style>

    </head>


    <body>

        <div class="header">

            <h1 class="name">${resumeData.personal.name}</h1>

            <p class="title">${resumeData.personal.title}</p>

            <div class="contact-info">

                <span>📞 ${resumeData.personal.contact.mobile}</span>
                <span>✉️ ${resumeData.personal.contact.email}</span>

                <span>🔗 <a href="${resumeData.personal.portfolio}">linkedin.com/in/Mohammed-Maibu</a></span>

            </div>
        </div>





        <div class="section">
            <p class="objective-text">${resumeData.objective}</p>
        </div>




        <div class="section">

            <h2 class="section-title">Skills</h2>
            
            <div class="skills-container">

                <div class="skill-category">

                    <div class="skill-category-title">FrontEnd:</div>

                    <div class="skill-items">${resumeData.skills.frontend.join(', ')}</div>

                </div>
                
                <div class="skill-category">

                    <div class="skill-category-title">BackEnd:</div>

                    <div class="skill-items">${resumeData.skills.backend.join(', ')}</div>

                </div>
                
                <div class="skill-category">

                    <div class="skill-category-title">Languages:</div>

                    <div class="skill-items">${resumeData.skills.languages.join(', ')}</div>

                </div>
                
                <div class="skill-category">

                    <div class="skill-category-title">Tools & Platforms:</div>

                    <div class="skill-items">${resumeData.skills.tools.join(', ')}</div>

                </div>





            </div>

        </div>






        <div class="section">

            <h2 class="section-title">Experience</h2>

            ${resumeData.experience.map(exp => `
              <div class="experience-item">
              <div class="exp-header">
              
              
            <div>

                <div class="exp-title">${exp.title}</div>

                <div class="exp-company">${exp.company} (${exp.location})</div>

              </div>
              
              
              <div class="exp-period">${exp.period}</div>
              
              </div>
              
              <div class="exp-stack">Stack Used: ${exp.stack}</div>
              
              <div class="bullet-list">${exp.achievements.map(achievement => `<div class="bullet-item">${achievement}</div>`).join('')}</div>

          </div>
          
          `).join('')}
          
      </div>









        <div class="section">

            <h2 class="section-title">Projects</h2>


            ${resumeData.projects.map(project => `


                <div class="project-item">


                    <div class="exp-header">



                        <div>

                            <div class="project-type">${project.type}</div>

                            <div class="project-name">${project.name}</div>

                        </div>
                        
                  <div class="project-period">${project.period}</div>

              </div>
              
      <div class="bullet-list"> ${project.details.map(detail => `<div class="bullet-item">${detail}</div>`).join('')} </div>
      
      
      </div>

 `).join('')}

</div>


// =================================================================================================================================================





        <div class="section">

            <h2 class="section-title">Education</h2>

            ${resumeData.education.map(edu => `

                <div class="education-item">

                    <div class="exp-header">

                        <div>

                            <div class="education-degree">${edu.degree}</div>

                            <div class="education-institution">${edu.institution}</div>

                        </div>

                        <div class="education-details">${edu.year} | ${edu.grade}</div>

                    </div>

                </div>

            `).join('')}

        </div>


        <div class="portfolio-link">

            <strong>🌐 Portfolio:</strong>

            <a href="${resumeData.personal.portfolio}">
                ${resumeData.personal.portfolio}
            </a>

        </div>


    </body>

    </html>`;



    // =================================================================================================================================================



    printWindow.document.write(pdfContent);
    printWindow.document.close();



    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
        setIsDownloading(false);
      }, 500);
    };
  };



  // =================================================================================================================================================

  const EducationSection = () => (
    <div style={styles.sectionContent}>

      {

        resumeData.education.map((edu, index) => (


          <div key={index} style={{ ...styles.educationCard, animationDelay: `${index * 0.2}s` }} className="education-slide">


            <div style={styles.eduIcon} className="bounce-icon">{edu.icon}</div>

            <div style={styles.eduContent}>


              <h4 style={styles.eduDegree}>{edu.degree}</h4>


              <p style={styles.eduInstitution}> {edu.institution} </p>


              <div style={styles.eduDetails}>


                <span style={styles.eduYear}> {edu.year} </span>



                <span style={styles.eduGrade}>{edu.grade} </span>

              </div>

            </div>

          </div>

        ))
      }

    </div>
  );



  // =================================================================================================================================================


  const SkillsSection = () => (
    <div style={styles.sectionContent}>

      <div style={styles.skillsGrid}>

        <div
          style={styles.skillCategory}
          className="skills-fade-in"
        >

          <h4 style={styles.skillTitle}>
            Frontend
          </h4>

          <div style={styles.skillTags}>

            {
              resumeData.skills.frontend.map((skill, index) => (

                <span
                  key={index}
                  style={{
                    ...styles.skillTag,
                    animationDelay: `${index * 0.1}s`
                  }}
                  className="skill-pop"
                >
                  {skill}
                </span>

              ))
            }

          </div>

        </div>


        <div
          style={styles.skillCategory}
          className="skills-fade-in"
        >

          <h4 style={styles.skillTitle}>
            Backend
          </h4>

          <div style={styles.skillTags}>

            {
              resumeData.skills.backend.map((skill, index) => (

                <span
                  key={index}
                  style={{
                    ...styles.skillTag,
                    animationDelay: `${index * 0.1 + 0.5}s`
                  }}
                  className="skill-pop"
                >
                  {skill}
                </span>

              ))
            }

          </div>

        </div>


        <div
          style={styles.skillCategory}
          className="skills-fade-in"
        >

          <h4 style={styles.skillTitle}>
            Languages
          </h4>

          <div style={styles.skillTags}>

            {
              resumeData.skills.languages.map((skill, index) => (

                <span
                  key={index}
                  style={{
                    ...styles.skillTag,
                    animationDelay: `${index * 0.1 + 1}s`
                  }}
                  className="skill-pop"
                >
                  {skill}
                </span>

              ))
            }

          </div>

        </div>


        <div
          style={styles.skillCategory}
          className="skills-fade-in"
        >

          <h4 style={styles.skillTitle}>
            Tools & Platforms
          </h4>

          <div style={styles.skillTags}>

            {
              resumeData.skills.tools.map((skill, index) => (

                <span
                  key={index}
                  style={{
                    ...styles.skillTag,
                    animationDelay: `${index * 0.1 + 1.5}s`
                  }}
                  className="skill-pop"
                >
                  {skill}
                </span>

              ))
            }

          </div>

        </div>

      </div>

    </div>
  );




  // =================================================================================================================================================


  const ExperienceSection = () => (

    <div style={styles.sectionContent}>

      {
        resumeData.experience.map((exp, index) => (

          <div
            key={index}
            style={{
              ...styles.experienceCard,
              animationDelay: `${index * 0.3}s`
            }}
            className="experience-slide"
          >

            <div style={styles.expHeader}>

              <div>

                <h4 style={styles.expTitle}>
                  {exp.title}
                </h4>

                <p style={styles.expCompany}>
                  {exp.company} ({exp.location})
                </p>

              </div>

              <div style={styles.expPeriod}>
                {exp.period}
              </div>

            </div>

            <p style={styles.expStack}>
              Stack: {exp.stack}
            </p>

            <div style={styles.expAchievements}>

              {
                exp.achievements.map((achievement, idx) => (

                  <div
                    key={idx}
                    style={styles.achievementItem}
                  >

                    <span style={styles.achievementBullet}>
                      •
                    </span>

                    <span>
                      {achievement}
                    </span>

                  </div>

                ))
              }

            </div>

          </div>

        ))
      }

    </div>
  );



  // =================================================================================================================================================


  const ProjectsSection = () => (

    <div style={styles.sectionContent}>

      {
        resumeData.projects.map((project, index) => (

          <div
            key={index}
            style={{
              ...styles.projectCard,
              animationDelay: `${index * 0.3}s`
            }}
            className="project-slide"
          >

            <div style={styles.projectHeader}>

              <div
                style={styles.projectIcon}
                className="rotate-icon"
              >
                {project.icon}
              </div>

              <div style={{ flex: 1 }}>

                <div style={styles.projectType}>
                  {project.type}
                </div>

                <h4 style={styles.projectName}>
                  {project.name}
                </h4>

                <p style={styles.projectPeriod}>
                  {project.period}
                </p>

              </div>

            </div>


            <div style={styles.projectDetails}>

              {
                project.details.map((detail, idx) => (

                  <div
                    key={idx}
                    style={styles.projectDetailItem}
                  >

                    <span style={styles.projectBullet}>
                      •
                    </span>

                    <span>
                      {detail}
                    </span>

                  </div>

                ))
              }

            </div>

          </div>

        ))
      }

    </div>
  );




  // =================================================================================================================================================


  const renderActiveSection = () => {

    switch (activeSection) {

      case 'education':
        return <EducationSection />;

      case 'skills':
        return <SkillsSection />;

      case 'experience':
        return <ExperienceSection />;

      case 'projects':
        return <ProjectsSection />;

      default:
        return <EducationSection />;

    }

  };



  // =================================================================================================================================================
  return (

    <section id="resume" style={styles.section}>

      <div style={styles.container}>

        <div style={{ ...styles.header, transform: `translateY(${isVisible ? 0 : 50}px)`, opacity: isVisible ? 1 : 0, }} className="header-animation">

          <h2 style={styles.title} className="gradient-title"> Resume </h2>


          <div style={styles.titleUnderline} className="expanding-line" />


          <div style={styles.personalInfo} className="personal-fade-in">


            <h3 style={styles.name} className="name-glow">{resumeData.personal.name}</h3>


            <p style={styles.subtitle} className="typewriter-subtitle"> {resumeData.personal.title}</p>


            <div style={styles.contactInfo}>


              <span style={styles.contactItem}>📱 {resumeData.personal.contact.mobile}</span>

              <span style={styles.contactItem}>📧 {resumeData.personal.contact.email}</span>

              <span style={styles.contactItem}>📍 {resumeData.personal.contact.location}</span>

            </div>

          </div>

          {/* =========================================================================================================================================== */}


          <div style={styles.objective} className="objective-slide">

            <h4 style={styles.objectiveTitle}> Objective </h4>

            <p style={styles.objectiveText}>{resumeData.objective}</p>

          </div>

        </div>

        {/* =========================================================================================================================================== */}


        <div style={styles.navigation}>

          {
            sections.map((section, index) => (


              <button key={section.id} onClick={() => setActiveSection(section.id)


              }

                style={{
                  ...styles.navButton, ...(activeSection === section.id ?
                    styles.navButtonActive : {}), animationDelay: `${index * 0.1}s`
                }} className="nav-button-slide">

                <span style={styles.navIcon}>{section.icon}</span>

                <span>{section.label}</span>

              </button>

            ))
          }

        </div>



        {/* =========================================================================================================================================== */}


        <div style={styles.contentArea} className="content-fade">

          {
            renderActiveSection()
          }

        </div>



        {/* =========================================================================================================================================== */}


        <div style={styles.downloadSection} className="download-fade">


          <button style={{ ...styles.downloadButton, opacity: isDownloading ? 0.7 : 1, cursor: isDownloading ? 'not-allowed' : 'pointer' }}

            className="download-pulse" onClick={generatePDF} disabled={isDownloading} >



            <span style={styles.downloadIcon}> {isDownloading ? '⏳' : '📄'}</span>


            <span>

              {

                isDownloading ? 'Generating PDF...' : 'Download Full CV'

              }

            </span>





            <span style={styles.downloadArrow}> ↓ </span>


          </button>

        </div>

      </div>



      {/* =========================================================================================================================================== */}


      <div style={styles.bgElement1} className="floating-bg" />

      <div style={styles.bgElement2} className="floating-bg" />

      <div style={styles.bgElement3} className="floating-bg" />



    </section>

  );

};



// =================================================================================================================================================


const styles = {



  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
    color: '#ffffff',
    position: 'relative',
  },




  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  },




  header: {
    textAlign: 'center',
    marginBottom: '50px',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },




  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '15px',
  },




  titleUnderline: {
    height: '4px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    margin: '0 auto 40px',
    borderRadius: '2px',
  },




  personalInfo: {
    marginBottom: '40px',
    transform: 'translateY(20px)',
  },




  name: {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#e2e8f0',
  },




  subtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    marginBottom: '25px',
    maxWidth: '600px',
    margin: '0 auto 25px',
  },




  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },




  contactItem: {
    fontSize: '1rem',
    color: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },



  objective: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '25px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-50px)',
  },



  objectiveTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#3b82f6',
  },




  objectiveText: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
  },




  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },




  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px',
    color: '#cbd5e1',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
    transform: 'translateY(30px)',
  },




  navButtonActive: {
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    borderColor: 'transparent',
    transform: 'translateY(0) scale(1.05)',
  },




  navIcon: {
    fontSize: '1.1rem',
  },




  contentArea: {
    minHeight: '400px',
    marginBottom: '50px',
  },



  sectionContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },




  educationCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-50px)',
  },



  eduIcon: {
    fontSize: '2.5rem',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    flexShrink: 0,
  },



  eduContent: {
    flex: 1,
  },




  eduDegree: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#e2e8f0',
  },




  eduInstitution: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    marginBottom: '10px',
  },




  eduDetails: {
    display: 'flex',
    gap: '20px',
  },




  eduYear: {
    fontSize: '0.95rem',
    color: '#3b82f6',
    fontWeight: '600',
  },




  eduGrade: {
    fontSize: '0.95rem',
    color: '#10b981',
    fontWeight: '600',
  },




  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },



  skillCategory: {
    padding: '25px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },




  skillTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#3b82f6',
  },




  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },



  skillTag: {
    padding: '8px 16px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'white',
    transform: 'scale(0)',
  },




  experienceCard: {
    padding: '25px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-50px)',
  },



  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '15px',
  },




  expTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: '5px',
  },




  expCompany: {
    fontSize: '1.1rem',
    color: '#94a3b8',
  },




  expPeriod: {
    fontSize: '0.95rem',
    color: '#3b82f6',
    fontWeight: '600',
  },




  expStack: {
    fontSize: '0.95rem',
    color: '#8b5cf6',
    fontWeight: '600',
    marginBottom: '15px',
  },




  expAchievements: {
    marginTop: '15px',
  },




  projectCard: {
    padding: '25px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateY(30px)',
  },




  projectHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '15px',
  },




  projectIcon: {
    fontSize: '3rem',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #10b981, #3b82f6)',
    borderRadius: '50%',
    flexShrink: 0,
  },




  projectType: {
    fontSize: '0.9rem',
    color: '#8b5cf6',
    fontWeight: '600',
    marginBottom: '5px',
  },




  projectName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: '5px',
  },




  projectPeriod: {
    fontSize: '0.9rem',
    color: '#3b82f6',
    fontWeight: '500',
  },




  projectDetails: {
    marginTop: '15px',
  },




  projectDetailItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
  },




  projectBullet: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    flexShrink: 0,
    marginTop: '2px',
  },




  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '12px',
    fontSize: '1rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
  },




  achievementBullet: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    flexShrink: 0,
    marginTop: '2px',
  },




  downloadSection: {
    textAlign: 'center',
  },




  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px 35px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },




  downloadIcon: {
    fontSize: '1.3rem',
  },




  downloadArrow: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },



  bgElement1: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    width: '80px',
    height: '80px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },



  bgElement2: {
    position: 'absolute',
    top: '60%',
    right: '8%',
    width: '60px',
    height: '60px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },



  bgElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '100px',
    height: '100px',
    background: 'rgba(6, 182, 212, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
};

export default Resume;
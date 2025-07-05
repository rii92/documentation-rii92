import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>Portfolio</Heading>
        <p className={styles.hero__subtitle}>Welcome to my portfolio</p>
        <h2>Hello, I'm <b>Rio Febri</b></h2>
        <h3 style={{fontWeight: 400, marginBottom: 24}}>A passionate full-stack developer focused on creating intuitive and engaging digital experiences.</h3>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="#contact">Get in Touch</Link>
          <Link className="button button--primary button--lg" to="#work" style={{marginLeft: '1rem'}}>View Work</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Portfolio - Rio Febri" description="Full-stack developer portfolio, web & mobile development, UI/UX, backend, and more.">
      <HomepageHeader />
      <main>
        <section id="profile" className={styles.profileSection}>
          <h2 className={styles.profileTitle}>About Me</h2>
          <h3>Professional Web Developer & Designer</h3>
          <p className={styles.profileDesc}>
            With over 5 years of experience in web development and design, I specialize in creating beautiful, functional, and user-centered digital experiences. My approach combines creativity with technical expertise to build innovative solutions.
          </p>
        </section>
        <section id="services" className={styles.servicesSection}>
          <h2>My Services</h2>
          <p>Providing comprehensive solutions for your digital needs with expertise in multiple domains.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💻</div>
              <div className={styles.serviceTitle}>Web Development</div>
              <p>Creating responsive and dynamic websites using modern frameworks and technologies.</p>
              <div className={styles.serviceStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>React</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Next.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Node.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Laravel</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Flutter</span>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📱</div>
              <div className={styles.serviceTitle}>Mobile Development</div>
              <p>Building native and cross-platform mobile applications for iOS and Android.</p>
              <div className={styles.serviceStack}><span className="badge badge--secondary" style={{color: '#111'}}>Flutter</span></div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎨</div>
              <div className={styles.serviceTitle}>UI/UX Design</div>
              <p>Designing intuitive and engaging user interfaces with great user experience.</p>
              <div className={styles.serviceStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>Figma</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Canva</span>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <div className={styles.serviceTitle}>Backend Development</div>
              <p>Developing robust and scalable backend solutions and APIs.</p>
              <div className={styles.serviceStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>Node.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Python</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>PHP</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>MySQL</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>MongoDB</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>DynamoDB</span>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className={styles.projectsSection}>
          <h2>Featured Projects</h2>
          <p>A showcase of my recent development work and projects</p>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <h3>Data Analytics<br/><small>Crypto Analysis Tool</small></h3>
              <p>Interactive cryptocurrency analysis platform built with Python and Streamlit. Features trend analysis, potential coin identification, and demo account access.</p>
              <div style={{fontSize: '0.95rem', marginBottom: 8}}>
                <b>Demo Access:</b><br/>Username: <code>admin</code><br/>Password: <code>indodax123</code>
              </div>
              <div className={styles.projectStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>Python</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Streamlit</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Pandas</span>
              </div>
              <div className={styles.projectDemo}>
                <a href="#" className="button button--sm button--primary" target="_blank" rel="noopener">Live Demo</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Full Stack Development<br/><small>Ngambiskuy - E-Learning Platform</small></h3>
              <p>All-in-One platform for learning, teaching, and exam simulations. Built with Laravel, featuring courses, forums, and interactive exam systems.</p>
              <div className={styles.projectStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>Laravel</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>PHP</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>MySQL</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Tailwind CSS</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Alpine.js</span>
              </div>
              <div className={styles.projectDemo}>
                <a href="#" className="button button--sm button--primary" target="_blank" rel="noopener">Live Demo</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Data Visualization<br/><small>Employee Attendance Visualization</small></h3>
              <p>An interactive web-based application for visualizing employee attendance data with filtering capabilities.</p>
              <div className={styles.projectStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>React.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Chart.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Tailwind CSS</span>
              </div>
              <div className={styles.projectDemo}>
                <a href="#" className="button button--sm button--primary" target="_blank" rel="noopener">Live Demo</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Data Analytics<br/><small>Population Data Visualization</small></h3>
              <p>Interactive dashboard for Kabupaten Sanggau population trends and demographics.</p>
              <div className={styles.projectStack}>
                <span className="badge badge--secondary" style={{color: '#111'}}>React.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>Chart.js</span>
                <span className="badge badge--secondary" style={{color: '#111'}}>API Integration</span>
              </div>
              <div className={styles.projectDemo}>
                <a href="#" className="button button--sm button--primary" target="_blank" rel="noopener">Live Demo</a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contactSection}>
          <h2>Get in Touch</h2>
          <p>Interested in working together or want to know more? Reach out to me!</p>
          <a href="mailto:riofebri@example.com" className="button button--secondary button--lg">Contact Me</a>
        </section>
      </main>
    </Layout>
  );
}

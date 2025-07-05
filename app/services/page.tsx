// app/services/page.tsx
"use client"

import styles from './services.module.css'
import Image from 'next/image'
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

import {
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaLayerGroup,
  FaSearch,
  FaBullhorn,
  FaCalendarAlt,
  FaVideo,
  FaPenNib,
  FaEnvelopeOpenText,
  FaChartBar,
  FaPalette,
  FaGlobe,
  FaPrint,
  FaObjectGroup,
  FaCameraRetro,
} from 'react-icons/fa'

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      const el = containerRef.current;
      if (!el) return;

      el.style.visibility = "visible";

      // Select both h1 and p elements
      const elements = el.querySelectorAll<HTMLElement>("h1, p");
      if (!elements.length) return;

      elements.forEach((node) => {
        const result = splitText(node);
        if (!result?.words) return;

        animate(
          result.words,
          { opacity: [0, 1], y: [10, 0] },
          { type: "spring", duration: 2, bounce: 0, delay: stagger(0.05) }
        );
      });
    });
  }, []);


  return (


    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textcontainer} ref={containerRef}>
            <h1 className={`${styles.heroTitle} h1`}>Our Services</h1>
            <p className="p">
              We build digital experiences that deliver impact — from web to content and design.
            </p>
          </div>

        </div>
        <div className={styles.heroImage}>
          <Image src="/images/services-hero.jpg" alt="Our Services"
            width={1200}      // <-- original image width
            height={600}      // <-- original image height
            style={{ width: '100%', height: 'auto' }} // for responsiveness
          />
        </div>
      </section>

      {/* Web Development Section */}
      <section className={styles.serviceCard}>
        <div className={styles.left}>
          <h2><FaCode className={styles.iconHeading} /> Web Development</h2>
          <p className={styles.highlight}>
            We build fast, responsive, and SEO-optimized websites that elevate your brand and convert visitors into clients.
          </p>

          <ul className={styles.breakdown}>
            <li>
              <strong><FaCode className={styles.icon} /> Frontend & Backend Development</strong><br />
              Modern UIs using React, Next.js, or Vue. Backend logic with Node.js, Express, Django. Clean, modular code.
            </li>
            <li>
              <strong><FaCogs className={styles.icon} /> Custom Functionality</strong><br />
              Auth systems, dashboards, bookings. Shopify, Stripe integrations. Admin with role-based access.
            </li>
            <li>
              <strong><FaMobileAlt className={styles.icon} /> Responsive Design</strong><br />
              Mobile-first, pixel-perfect UI. Speed-optimized and WCAG-accessible layouts.
            </li>
            <li>
              <strong><FaLayerGroup className={styles.icon} /> CMS & Headless Integration</strong><br />
              WordPress, Strapi, Sanity, or custom CMS. Empower your team to manage content.
            </li>
            <li>
              <strong><FaSearch className={styles.icon} /> SEO & Performance Optimization</strong><br />
              Meta tags, OG, fast loads, Lighthouse scoring, and Core Web Vitals ready.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.rightSticky}>
            <Image src="/images/web.jpg" alt="Web Development" className={styles.rightImg} width={500} height={350} />
          </div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section className={styles.serviceCard}>
        <div className={styles.left}>
          <h2><FaBullhorn className={styles.iconHeading} /> Content Marketing</h2>
          <p className={styles.highlight}>
            We craft compelling content strategies and creatives that engage, rank, and convert — across all platforms.
          </p>

          <ul className={styles.breakdown}>
            <li>
              <strong><FaCalendarAlt className={styles.icon} /> Social Media Strategy</strong><br />
              360° monthly calendars. Hashtags, timing, and brand tone.
            </li>
            <li>
              <strong><FaVideo className={styles.icon} /> Reels & Short-Form Content</strong><br />
              Scriptwriting, edits, hooks for IG Reels, Shorts, TikTok.
            </li>
            <li>
              <strong><FaPenNib className={styles.icon} /> SEO Blogs & Articles</strong><br />
              Keyword research, writing that ranks, topic clusters & pillars.
            </li>
            <li>
              <strong><FaEnvelopeOpenText className={styles.icon} /> Email Campaigns & Newsletters</strong><br />
              CTA-driven emails via Mailchimp, Klaviyo, SendGrid.
            </li>
            <li>
              <strong><FaChartBar className={styles.icon} /> Analytics & Performance Tracking</strong><br />
              Monthly reports on top content, insights, and improvements.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.rightSticky}>
            <Image src="/images/content.jpg" alt="Content Marketing" className={styles.rightImg} width={500} height={350} />
          </div>
        </div>
      </section>

      {/* Graphic Designing Section */}
      <section className={styles.serviceCard}>
        <div className={styles.left}>
          <h2><FaPalette className={styles.iconHeading} /> Graphic Designing</h2>
          <p className={styles.highlight}>
            Designs that don’t just look good — they tell your story, build your identity, and grab attention.
          </p>

          <ul className={styles.breakdown}>
            <li>
              <strong><FaGlobe className={styles.icon} /> Branding & Identity Design</strong><br />
              Logos, guidelines, typography, colors. Aligning vision + visuals.
            </li>
            <li>
              <strong><FaPenNib className={styles.icon} /> Social Media Creatives</strong><br />
              Carousels, stories, banners, ads — all consistent and on-brand.
            </li>
            <li>
              <strong><FaPrint className={styles.icon} /> Print-Ready Materials</strong><br />
              Flyers, brochures, packages — export-ready (PSD, PDF, PNG, AI).
            </li>
            <li>
              <strong><FaObjectGroup className={styles.icon} /> UX/UI Design</strong><br />
              Web & app interfaces. Figma, Adobe XD, Webflow layouts.
            </li>
            <li>
              <strong><FaCameraRetro className={styles.icon} /> Visual Asset Production</strong><br />
              Thumbnails, posters, branded templates — sharp & scalable.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.rightSticky}>
            <Image src="/images/graphic.jpg" alt="Graphic Design" className={styles.rightImg} width={500} height={350} />
          </div>
        </div>
      </section>
    </div>
  )
}
// function Stylesheet() {
//   return (
//     <style>{`
//             .textcontainer {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 width: 100%;
//                 max-width: 420px;
//                 text-align: left;
//                 visibility: hidden;
//             }

//             .split-word {
//                 will-change: transform, opacity;
//             }
//         `}</style>
//   )
// }

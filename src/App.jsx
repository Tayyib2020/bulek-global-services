import React,{useEffect,useRef} from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import {company} from './data/siteContent.js';
const business={'@context':'https://schema.org','@type':'RealEstateAgent',name:company.name,description:company.description,telephone:'+2349032325595',email:company.email,address:{'@type':'PostalAddress',streetAddress:'Plot F13, Funtaj Road, Kango',addressLocality:'Kuje',addressRegion:'FCT',addressCountry:'NG'}};
export default function App(){const main=useRef(null);useEffect(()=>{if(!main.current||!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('reveal-play');observer.unobserve(entry.target)}}},{threshold:0,rootMargin:'0px 0px -40px 0px'});main.current.querySelectorAll('.section > .container').forEach(section=>observer.observe(section));return()=>observer.disconnect()},[]);return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" ref={main}><Hero/><About/><Services/><Gallery/><Contact/></main><Footer/><script type="application/ld+json">{JSON.stringify(business)}</script></>}

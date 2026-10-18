import React from 'react';
import {services} from '../data/siteContent.js';
import {Photo,SectionTitle,Icon} from './Header.jsx';
export default function Services(){return <section id="services" className="section services"><div className="container"><SectionTitle label="OUR SERVICES">What We Do</SectionTitle><p className="section-intro">We provide real estate services to help clients explore housing and land opportunities.</p><div className="service-grid">{services.map(service=><article className="service-card" key={service.title}><Photo name={service.image} alt={service.alt}/><div className="service-body"><span className="service-icon"><Icon type={service.icon}/></span><h3>{service.title}</h3><p>{service.description}</p></div></article>)}</div></div></section>}

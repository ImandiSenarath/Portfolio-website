import React from 'react';
import './Research.css';
import { ExternalLink, FileText, Calendar, Users, Award, Image as ImageIcon } from 'lucide-react';

import CertSymposium from '../assets/Certificate 01 symposium .jpeg';
import AwardImg from '../assets/awrd.jpeg';
import SPresent from '../assets/s present.jpeg';
import IRCCert from '../assets/irc certificate.jpeg';
import Presenting from '../assets/presenting.jpeg';
import Presenting01 from '../assets/presenting01.jpeg';


const Research = () => {
  const researchItems = [
    {
      title: 'Agricultural Mobile Apps in Sri Lanka: A Systematic Review',
      authors: 'SPIPK Seanrath ,  Dr. RMM Pradeep and Ms. LDTT De Silva',
      venue: '6th Student Symposium of the Faculty of Computing (SSFOC 2026) at General Sir John Kotelawala Defence University (KDU)',
      year: '2026',
      description: 'PRISMA-guided systematic review synthesizes Sri Lanka-specific evidence (2000–2025) to evaluate mobile and web-based agricultural platforms, focusing on their functional coverage for paddy farmers and agricultural officers. The study highlights a fragmented digital ecosystem and identifies key gaps such as the lack of integrated platforms supporting weather insights, pest alerts, farm data management, and two-way communication.This research serves as a prior study for my Final Year Research Project (FYP), providing a strong foundation for designing an integrated, farmer-centered digital solution.',
      tags: ['DigitalAgriculture', 'SystematicReview', 'Sri Lanka'],

      images: [
        { src: CertSymposium, alt: 'Symposium Certificate' },
        { src: AwardImg, alt: 'Award Ceremony' },
        { src: SPresent, alt: 'Presenting Research' }
      ]
    },
    {
      title: 'USER INTERFACE DESIGN GUIDELINES FOR DIGITALLY LOW-LITERATE USERS: A CASE STUDY OF BOARDING HOUSE OWNERS IN RATMALANA, SRI LANKA',
      authors: 'HSPLM Pathirana1#, SPIPK Senerath1 and RMM Pradeep1',
      venue: 'General Sir John Kotelawala Defence University18TH INTERNATIONAL RESEARCH CONFERENCE - COMPUTING Track underTechnical Sessions III - Human-Centred and Sustainable Digital Solutions| Paper ID: 142',
      year: '2026',
      description: 'This study bridges the gap between theoretical UI principles and real-world usability challenges by developing practical, culturally adapted interface guidelines for digitally low-literate users in Sri Lanka. Through literature analysis and usability evaluation with boarding house owners, the research proposes inclusive design recommendations focusing domain-specific solutions.',
      tags: ['UI/UX', 'Digital Literacy', 'Inclusive Design', 'Sri Lanka'],
      pdf: 'https://www.researchgate.net/publication/396389459_User_Interface_Design_Guidelines_for_Digitally_Low-Literate_Users_A_Case_Study_of_Boarding_House_Owners_in_Ratmalana_Sri_Lanka',
      images: [
        { src: IRCCert, alt: 'IRC Certificate' },
        { src: Presenting, alt: 'Presenting Research' },
        { src: Presenting01, alt: 'Research Presentation' }
      ]
    }
  ];

  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>

        <div className="research-list">
          {researchItems.map((item, index) => (
            <div key={index} className="research-card glass-card animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="research-header">
                <div className="research-icon-wrapper">
                  <FileText className="research-icon" size={24} />
                </div>
                <div className="research-main-info">
                  <h3 className="research-title">{item.title}</h3>
                  <div className="research-meta">
                    <span className="meta-item">
                      <Users size={14} />
                      {item.authors}
                    </span>
                    <span className="meta-item">
                      <Calendar size={14} />
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="research-content">
                <p className="research-venue"><strong>Venue:</strong> {item.venue}</p>
                <p className="research-desc">{item.description}</p>

                <div className="research-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="research-tag">{tag}</span>
                  ))}
                </div>

                {item.images && (
                  <div className="research-gallery">
                    <div className="gallery-header">
                    </div>
                    <div className="gallery-grid">
                      {item.images.map((img, idx) => (
                        <div key={idx} className="gallery-item">
                          <img src={img.src} alt={img.alt} />
                          <div className="gallery-caption">{img.caption}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="research-actions">
                <a href={item.pdf} className="btn btn-secondary research-btn">
                  <FileText size={18} />
                  Link
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

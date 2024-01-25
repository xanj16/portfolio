import "./portfolio.css";

import IMG1 from "../../assets/Flexcavo.png";
import IMG2 from "../../assets/Meetnative.png";
import IMG3 from "../../assets/Mobinspire.png";
import IMG4 from "../../assets/Raise.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "La Bella",
      img: IMG1,
      description:
        "It is the website for enjoying music",
      technologies: "React.js | Pixel-perfect | SCSS | Styled Component",
      link: "https://www.youtube.com/watch?v=2jTwoSFdfSI&pp=ygUTYmVhdXR5IGFuZCB0aGUgYmVhdA%3D%3D",
    },
    {
      id: 2,
      title: "Linda",
      img: IMG2,
      description:
        "Ser linda es tan wow.",
      technologies: "React | React Native | Android | iOS",
      link: "https://www.youtube.com/watch?v=bRkIL13jVXU&pp=ygUEY3V0ZQ%3D%3D",
    },
    {
      id: 3,
      title: "Confianza",
      img: IMG3,
      description:
        "la confianza es la clave",
      technologies: "Nginx | PHP | MySQL | jQuery",
      link: "https://www.youtube.com/watch?v=kggHPK2yprQ&pp=ygUQbWlzcyBpbmRlcGVuZGVudA%3D%3D",
    },
    {
      id: 4,
      title: "Pluviophile",
      img: IMG4,
      description:
        "Love the rain with me.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "https://www.youtube.com/watch?v=dglBgJSMr-E&pp=ygUEcmFpbg%3D%3D",
    },
    {
      id: 5,
      title: "Potsave",
      img: IMG5,
      description:
        "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
      technologies: "React | Next.js | Lodash | Tailwind CSS",
      link: "https://dev-pwa.potsave.com/",
    },
    {
      id: 6,
      title: "Health",
      img: IMG6,
      description:
        "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
      technologies: "Angular | Drupal | Nginx | TypeScript",
      link: "https://healthcare.utah.edu/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

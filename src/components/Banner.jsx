import React from "react";
import styles from './Banner.module.css';

import tunnelsEditor from "../assets/screens/tunnels-editor.png";
import orgsFinal from "../assets/screens/orgs-final.png";
import dnsResolveAndBlock from "../assets/screens/dns-resolve-and-block.png";
import dnsPanel from "../assets/screens/dns-panel.png";
import dnsBlock from "../assets/screens/dns-block.png";
import darkMode from "../assets/screens/dark-mode.png";
import customDns from "../assets/screens/custom-dns.png";

const galleryImages = [
  {
    src: tunnelsEditor,
    width: 1300,
    height: 500,
    caption: "Tunnels Editor",
  },
	  {
    src: customDns,
    width: 800,
    height: 450,
    caption: "Custom DNS",
  },
	{
    src: darkMode,
    width: 800,
    height: 450,
    caption: "Dark Mode",
  },
   {
    src: darkMode,
    width: 1300,
    height: 600,
    caption: "Dark Mode",
  },
  {
    src: orgsFinal,
    width: 900,
    height: 400,
    caption: "Organizations",
  },
  {
    src: dnsResolveAndBlock,
    width: 800,
    height: 450,
    caption: "DNS Resolve and Block",
  },
  {
    src: dnsPanel,
    width: 800,
    height: 500,
    caption: "DNS Panel",
  },
  {
    src: dnsBlock,
    width: 800,
    height: 450,
    caption: "DNS Block",
  },
  
];

const Banner = (props) => {
  return (
    <div className={`${styles.banner} ${props.tag1}`}>
      <div className={styles.topText}>
        <h1 className="text bigtitle text-black">{props.title}</h1>
        <p className="subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
      </div>

      <div className={styles.imageGrid}>
        {galleryImages.map((image, index) => {
          let containerClassName = styles.imageContainer;
          
          // Assign different grid areas based on index
          if (index === 0) {
            containerClassName += ` ${styles.tall1}`; // First image takes 3 rows
          } else if (index === 1) {
            containerClassName += ` ${styles.normal}`; // Single cell
          } else if (index === 2) {
            containerClassName += ` ${styles.wide1}`; // Wide image spanning 2 columns
          } else if (index === 3) {
            containerClassName += ` ${styles.tall2}`; // Second tall image spanning 2 rows
          } else if (index === 4) {
            containerClassName += ` ${styles.normal}`; // Single cell
          } else if (index === 5) {
            containerClassName += ` ${styles.wide2}`; // Second wide image spanning 2 columns
          } else {
            containerClassName += ` ${styles.normal}`; // All others are normal single cells
          }

          return (
            <div key={index} className={containerClassName}>
              <img 
                src={image.src} 
                alt={image.caption}
                className={styles.image}
              />
              <div className={styles.caption}>{image.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;



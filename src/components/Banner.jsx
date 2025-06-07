import React from "react";
import styles from "./Banner.module.css";

import tunnelsEditor from "../assets/screens/tunnels-editor.png";
import dnsPanel from "../assets/screens/dns-panel.png";
import darkMode from "../assets/screens/dark-mode.png";
import customDns from "../assets/screens/custom-dns.png";

const galleryImages = [
  {
    src: dnsPanel,
    width: 1300,
    height: 500,
    caption: "DNS Panel",
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
    src: tunnelsEditor,
    width: 800,
    height: 500,
    caption: "Tunnels Editor",
  },
];

const Banner = (props) => {
  return (
    <div className={`${styles.banner} ${props.tag1}`}>
      <div className={styles.topText}>
        <h1 className="text bigtitle text-black">{props.title}</h1>
        <p
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
        ></p>
      </div>

      <div className={styles.imageGrid}>
        {galleryImages.map((image, index) => {
          let containerClassName = styles.imageContainer;

          if (index === 0) {
            containerClassName += ` ${styles.tall1}`;
          } else if (index === 1) {
            containerClassName += ` ${styles.wide1}`;
          } else if (index === 2) {
            containerClassName += ` ${styles.tall2}`;
          } else if (index === 3) {
            containerClassName += ` ${styles.tall3}`;
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

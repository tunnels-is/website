import React, { useEffect } from "react";

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
  {
    src: darkMode,
    width: 800,
    height: 450,
    caption: "Dark Mode",
  },
];

const Banner = (props) => {

	useEffect(() => {
			$('#myMosaic').Mosaic({ 
	});
	}, [])

	return (<div className={"banner viewport-hifde " + props.tag1}>

		<div className="top-text">
			<h1 className="text bigtitle">{props.title}</h1>
			<p className="subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}>
			</p>
		</div>

	
		<div id="myMosaic">
        {galleryImages.map((image, index) => (
						<img src={image.src} width={image.width} height={image.height}/>
				))}
      </div>

	</div>)
}

export default Banner;



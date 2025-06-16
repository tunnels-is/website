import React from "react";

const Banner = (props) => {
  return (<div className={"banner viewport-hide " + props.tag1}>

    <div className="top-text">
      <h1 className="text bigtitle">{props.title}</h1>
      <p className="subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}>
      </p>
    </div>

    <div class="mosaic-grid">
      <div class="mosaic-item item-1">
        <img src={props.img1} alt="A web UI table showing server locations, IPs, and IDs." />
      </div>
      <div class="mosaic-item item-2">
        <img src={props.img2} alt="A web UI showing DNS settings with fields for Server IP, Port, and DNS providers." />
      </div>
      <div class="mosaic-item item-5">
        <img src={props.img5} alt="A terminal-style log output showing debug and info messages with timestamps." />
      </div>
    </div>


  </div>)
}

export default Banner;

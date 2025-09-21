import React from "react";

const Banner = (props) => {
  return (<div className={"banner viewport-hide " + props.tag1}>

    <div className="top-text">
      <h1 className="text tb t1">Next Generation</h1>
      <h1 className="text tb t2">Networking Solution</h1>
      <p className="subtitle">
        In this section we will put some amazing text!
      </p>
    </div>

    <div className="topics">
      <div className="cta-button t">Free And OpenSource</div>
      <div className="cta-button t">Tunnels Security</div>
      <div className="cta-button t">Public VPN</div>
      <div className="cta-button t">Homelab</div>
      <div className="cta-button t">Cloud And Baremetal</div>
      <div className="cta-button t">IoT Networks</div>
      <div className="cta-button t">Office Networks</div>
      <div className="cta-button t">LAN over WAN</div>
      <div className="cta-button t">Personal VPN</div>
      <div className="cta-button t">DNS Security</div>
    </div>



  </div>)
}

export default Banner;

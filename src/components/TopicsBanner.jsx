import React from "react";
import { useNavigate } from "react-router-dom";

const TopicsBanner = (props) => {
  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    navigate(`/${topic}`);
  };

  return (
    <div className={"banner viewport-hide " + props.tag1}>

      <div className="top-text">
        <h1 className="text tb t1">Next Generation</h1>
        <h1 className="text tb t2">Networking Solution</h1>
        <p className="subtitle">
          In this section we will put some amazing text!
        </p>
      </div>

      <div className="topics">
        <div className="cta-button t" onClick={() => handleTopicClick("free-and-opensource")}>Free And OpenSource</div>
        <div className="cta-button t" onClick={() => handleTopicClick("tunnels-security")}>Tunnels Security</div>
        <div className="cta-button t" onClick={() => handleTopicClick("public-vpn")}>Public VPN</div>
        <div className="cta-button t" onClick={() => handleTopicClick("homelab")}>Homelab</div>
        <div className="cta-button t" onClick={() => handleTopicClick("cloud-and-baremetal")}>Cloud And Baremetal</div>
        <div className="cta-button t" onClick={() => handleTopicClick("iot-networks")}>IoT Networks</div>
        <div className="cta-button t" onClick={() => handleTopicClick("office-networks")}>Office Networks</div>
        <div className="cta-button t" onClick={() => handleTopicClick("lan-over-wan")}>LAN over WAN</div>
        <div className="cta-button t" onClick={() => handleTopicClick("personal-vpn")}>Personal VPN</div>
        <div className="cta-button t" onClick={() => handleTopicClick("dns-security")}>DNS Security</div>
      </div>
    </div>
  )
}

export default TopicsBanner;

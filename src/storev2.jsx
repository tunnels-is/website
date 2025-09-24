const DATA = "data_";
import { LayersIcon } from '@radix-ui/react-icons';
import axios from 'axios';
const Version = "2.0.7"

var CFG = {
  MenuURL: "https://raw.githubusercontent.com/tunnels-is/website/main/docs/menu.json",
  DocMenu: { "BaseURL": "", "Menu": [] },
  // Temporary content that can be used as placeholder
  TmpContent: {
    Diagrams: {
      DSMALL: {
        Title: "Multi Route VPN + LAN",
        Content: "",
        Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/gen-vpn-multiplex-v2.svg",
      },
      DBIG: {
        Title: "Encryption and Security",
        Content: "Tunnels implements modern cryptographic protocols and handshaking procedures. <br/></br>Supported encryption types are AES128/256 and chacha20 poly1305. Supported handshake types are elliptic curve p521 and X25519.<br/><br/>Authentication and Authorization use a combination of user/password and certificates. <br/><br/> Every step of the encryption and handshake process is handled by golang standard library methods, we do not hand-roll our own encryption schemes or functions.",
        Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-encryption.svg",
      },
    },

  },
  Content: {
    Diagrams: {
    },
    Pages: {
      Homelab: {},
      FreeAndOpenSource: {
        Sections: {
          Banner: {
            Link: "https://github.com/tunnels-is",
            Title: "Tunnels is free and open source",
            Text: "All of our features and free and available in the open source version, no paywalls, no hidden fees.",
          },
          WhyOpenSource: {
            Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          JoinOurCommunity: {
            Text: "Join our community to contribute or follow our development. \n links are in the footer!",
          },
        }
      },
      TunnelsSecurity: {},
      PublicVPN: {},
      CloudAndBareMetal: {},
      IoTNetworks: {},
      OfficeNetworks: {},
      LanOverWan: {},
      PersonalVPN: {},
      DNSSecurity: {},
    }
  },
  ContactSales: {
    Title: "Contact Us",
    Link: "mailto:support@tunnels.is",
    LinkTitle: "support@tunnels.is"
  },
  Download: {
    Title: "Download",
    Subtitle: "click here for all available releases",
    AllLink: "https://github.com/tunnels-is/tunnels/releases/latest",
    MacOS: "https://github.com/tunnels-is/tunnels/releases/download/v" + Version + "/tunnels_" + Version + "_Darwin_arm64.tar.gz",
    Windows: "https://github.com/tunnels-is/tunnels/releases/download/v" + Version + "/tunnels_" + Version + "_Windows_amd64.zip",
    Linux: "https://github.com/tunnels-is/tunnels/releases/download/v" + Version + "/tunnels_" + Version + "_Linux_amd64.tar.gz",
  },
}

export default CFG;

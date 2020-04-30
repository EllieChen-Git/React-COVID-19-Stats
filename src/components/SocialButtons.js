import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

const siteUrl = "https://covid-19-stats-aus-tw.netlify.app/";
const title =
  "Check out this cool website for COVID-19 data visualisation & comparison between Australia and Taiwan";

const SocialButtons = () => (
  <div className="social-container">
    <div className="social-buttons">
      <FacebookShareButton
        url={siteUrl}
        quote={title + ":" + siteUrl}
        hashtag={"#covid19"}
      >
        <FacebookIcon round={true} />
      </FacebookShareButton>
    </div>
    <div className="social-buttons">
      <FacebookMessengerShareButton url={siteUrl} appId="521270401588372">
        <FacebookMessengerIcon round />
      </FacebookMessengerShareButton>
    </div>
    <div className="social-buttons">
      <EmailShareButton
        url={siteUrl}
        subject={title}
        body={"Check out this cool website" + siteUrl}
      >
        <EmailIcon round={true} />
      </EmailShareButton>
    </div>
    <div className="social-buttons">
      <LineShareButton url={siteUrl} title={title}>
        <LineIcon round={true} />
      </LineShareButton>
    </div>
    <div className="social-buttons">
      <LinkedinShareButton url={siteUrl} title={title}>
        <LinkedinIcon round={true} />
      </LinkedinShareButton>
    </div>
    <div className="social-buttons">
      <TwitterShareButton
        url={siteUrl}
        title={title}
        hashtags={["covid19", "australia", "taiwan", "coronavirus"]}
      >
        <TwitterIcon round={true} />
      </TwitterShareButton>
    </div>
    <div className="social-buttons">
      <WhatsappShareButton url={siteUrl} title={title}>
        <WhatsappIcon round={true} />
      </WhatsappShareButton>
    </div>
    <p>
      &copy;
      {new Date().getFullYear()} Ellie Chen - All Rights Reserved
    </p>
  </div>
);

export default SocialButtons;

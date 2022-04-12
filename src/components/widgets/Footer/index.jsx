import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-2">
              <div className=" cdbHSY Box-cYwFwn byZIfc">
                <a aria-current="page" title="Maze" href="/">
                  <img
                    draggable="false"
                    width="58"
                    height="58"
                    src="data:image/png;base64,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"
                    alt="Maze logo sign"
                    className="rounded"
                  />
                </a>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-3">
                  <p className="fw-600">Product</p>
                  <div className=" bPYykC Box-cYwFwn byZIfc">
                    <div>
                      <a title="Pricing" href="/pricing/">
                        <p>Pricing</p>
                      </a>
                    </div>
                    <div>
                      <a title="Enterprise" href="/enterprise/">
                        <p>Enterprise</p>
                      </a>
                    </div>
                    <div>
                      <a title="Integrate" href="/platform/integrations/">
                        <p>Integrate</p>
                      </a>
                    </div>
                    <div>
                      <a href="/product-updates" rel="noreferrer noopener">
                        <p>What's New</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/blog/customer-stories/"
                        rel="noreferrer noopener"
                      >
                        <p>Customers</p>
                      </a>
                    </div>
                    <div>
                      <a title="Templates" href="/templates/">
                        <p>Templates</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://status.maze.co/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <p>System Status</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <p className="fw-600">Use Cases</p>
                  <div className=" bPYykC Box-cYwFwn byZIfc">
                    <div>
                      <a
                        title="Concept &amp; Idea Validation"
                        href="/use-cases/concept-and-idea-validation/"
                      >
                        <p>Concept &amp; Idea Validation</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Wireframe &amp; Usability Testing "
                        href="/use-cases/wireframe-and-usability-testing/"
                      >
                        <p>Wireframe &amp; Usability Testing </p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Content &amp; Copy Testing"
                        href="/use-cases/content-and-copy-testing/"
                      >
                        <p>Content &amp; Copy Testing</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Feedback &amp; Satisfaction"
                        href="/use-cases/feedback-and-satisfaction/"
                      >
                        <p>Feedback &amp; Satisfaction</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <p className="fw-600">Resources</p>
                  <div className=" bPYykC Box-cYwFwn byZIfc">
                    <div>
                      <a title="Blog" href="/blog/">
                        <p>Blog</p>
                      </a>
                    </div>
                    <div>
                      <a title="Collections" href="/collections/">
                        <p>Collections</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://help.maze.co/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <p>Help Center</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Getting Started with Maze"
                        href="/guides/maze-101-guide/"
                      >
                        <p>Getting Started with Maze</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Usability Testing Guide"
                        href="/guides/usability-testing/"
                      >
                        <p>Usability Testing Guide</p>
                      </a>
                    </div>
                    <div>
                      <a title="UX Research Guide" href="/guides/ux-research/">
                        <p>UX Research Guide</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Guide to Product Discovery"
                        href="/guides/product-discovery/"
                      >
                        <p>Guide to Product Discovery</p>
                      </a>
                    </div>
                    <div>
                      <a
                        title="Scaling Research Playbook"
                        href="/resources/scaling-research-playbook"
                      >
                        <p>Scaling Research Playbook</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/blog/maze-question-bank/"
                        rel="noreferrer noopener"
                      >
                        <p>Question Bank</p>
                      </a>
                    </div>
                    <div>
                      <a title="Podcast" href="/podcast/">
                        <p>Podcast</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <p className="fw-600">Company</p>
                  <div className=" bPYykC Box-cYwFwn byZIfc">
                    <div>
                      <a title="About Us" href="/about-us/">
                        <p>About Us</p>
                      </a>
                    </div>
                    <div>
                      <a title="Careers" href="/careers/">
                        <p>Careers</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.notion.so/mazedesign/Press-Kit-421d405e76154662a547ce9ef2a3f018?d=94d76534-849f-4ea8-a827-1a8d8dd1594c"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <p>Press Kit</p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://help.maze.design/hc/en-us/requests/new"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <p>Contact Us</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div end="xs" className="row">
            <div className="col-6">
              <div className="d-flex align-item-center">
                <div className="pe-2">Copyright © 2022 ACV</div>
                <div className="ps-2 pe-2">
                  <a title="Terms of service" href="/tos/">
                    Terms of service
                  </a>
                </div>
                <span className="divider" />
                <div className="ps-2 pe-2">
                  <a title="Privacy policy" href="/privacy-policy/">
                    Privacy policy
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-6">
              <div className="d-flex">
                <div className=" dBtZAc Box-cYwFwn byZIfc">
                  <a
                    href="https://www.facebook.com/mazedesignHQ/"
                    title="Facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      width="10"
                      height="20"
                      src="https://www.datocms-assets.com/38511/1606926599-iconfacebook.svg"
                      alt="Facebook icon"
                      className="Footerstyled__FooterSocialImg-a7qyp3-5 folICI"
                    />
                  </a>
                </div>
                <div className=" fJmizp Box-cYwFwn byZIfc">
                  <a
                    href="https://www.linkedin.com/company/mazedesign"
                    title="Linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      width="21"
                      height="19"
                      src="https://www.datocms-assets.com/38511/1606926639-iconlinkedin.svg"
                      alt="Linkedin icon"
                      className="Footerstyled__FooterSocialImg-a7qyp3-5 folICI"
                    />
                  </a>
                </div>
                <div className=" fJmizp Box-cYwFwn byZIfc">
                  <a
                    href="https://twitter.com/mazedesignhq"
                    title="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      width="19"
                      height="16"
                      src="https://www.datocms-assets.com/38511/1606926621-icontwitter.svg"
                      alt="Twitter icon"
                      className="Footerstyled__FooterSocialImg-a7qyp3-5 folICI"
                    />
                  </a>
                </div>
                <div className=" fJmizp Box-cYwFwn byZIfc">
                  <a
                    href="https://www.instagram.com/mazedesignhq/"
                    title="Instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      width="17"
                      height="16"
                      src="https://www.datocms-assets.com/38511/1606926656-iconinsta.svg"
                      alt="Instagram icon"
                      className="Footerstyled__FooterSocialImg-a7qyp3-5 folICI"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

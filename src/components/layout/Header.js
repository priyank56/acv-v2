import React from "react";
import * as Icon from "react-feather";

import "styles/layout.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a aria-current="page" title="Maze" href="/">
          <img
            draggable="false"
            width="58"
            height="58"
            src="/logo192.png"
            alt="Maze logo sign"
            className="rounded"
          />
        </a>
        <button
          className="navbar-toggler px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample1"
          aria-controls="navbarExample1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon.Menu />
        </button>

        <div className="collapse navbar-collapse ms-3" id="navbarExample1">
          <ul
            className="navbar-nav me-auto ps-lg-0"
            style={{ paddingLeft: "0.15rem" }}
          >
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarProducts"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div
                className="dropdown-menu w-100 m-0 p-0"
                aria-labelledby="navbarProducts"
              >
                <div overflow="hidden" className="nav-container pt-4 pb-5">
                  <div className="container px-4">
                    <div className="row justify-content-center">
                      <div className="col-md-3">
                        <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                          <div className="border-bottom mb-4 sc-bdvvaa sc-gsDJrp hZfQVt jXLjZO Flex-fdCmZB fKbRKc">
                            <div className="float-start pe-3 sc-bdvvaa gZrIkC Box-cYwFwn byZIfc">
                              <img
                                draggable="false"
                                src="https://www.datocms-assets.com/38511/1639586901-maze-by-use-case.svg"
                                alt="By use case"
                                // style="max-width:24px;height:auto"
                              />
                            </div>
                            <p
                              //   style="letter-spacing:0.06em"
                              className="Text-jBexRX Text__StyledText-sc-12egtmw-0 fpYGqy"
                            >
                              By use case
                            </p>
                          </div>
                          <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                            <div
                              //   style="gap:28px 0"
                              className="sc-hKwCoD dgEjxi"
                            >
                              <div className="sc-eCImvq hBziiI">
                                <div
                                  //   style="gap:28px 0"
                                  className="sc-bdvvaa sc-gsDJrp hKmdYz jXLjZO Flex-fdCmZB jQeDCS"
                                >
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/use-cases/wireframe-and-usability-testing/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Wireframe &amp; Usability Test{" "}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/use-cases/concept-and-idea-validation/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Concept &amp; Idea Validation
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/use-cases/content-and-copy-testing/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Content &amp; Copy Testing
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/use-cases/feedback-and-satisfaction/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Feedback &amp; Satisfaction
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 kmNCXo">
                        <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                          <div className="border-bottom mb-4 sc-bdvvaa sc-gsDJrp hZfQVt jXLjZO Flex-fdCmZB fKbRKc">
                            <div className="float-start pe-3 sc-bdvvaa gZrIkC Box-cYwFwn byZIfc">
                              <img
                                draggable="false"
                                src="https://www.datocms-assets.com/38511/1639586863-maze-by-feature.svg"
                                alt="By Feature"

                                // style="max-width:24px;height:auto"
                              />
                            </div>
                            <p
                              //   style="letter-spacing:0.06em"

                              className="Text-jBexRX Text__StyledText-sc-12egtmw-0 fpYGqy"
                            >
                              By Feature
                            </p>
                          </div>
                          <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                            <div
                              //   style="gap:28px 0"
                              className="d-flex flex-column sc-hKwCoD dgEjxi"
                            >
                              <div className="sc-eCImvq dvdPZw">
                                <div
                                  //   style="gap:28px 0"
                                  className="sc-bdvvaa sc-gsDJrp hKmdYz jXLjZO Flex-fdCmZB jQeDCS"
                                >
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/prototype-testing/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Prototype Testing
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/tree-testing/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Tree Testing
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/five-second-test/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            5-Second Test
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/surveys/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Surveys
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/testers-panel/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Panel
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="sc-eCImvq dvdPZw">
                                <div
                                  //   style="gap:28px 0"
                                  className="sc-bdvvaa sc-gsDJrp hKmdYz jXLjZO Flex-fdCmZB jQeDCS"
                                >
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/card-sorting"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Card Sorting
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/features/clips-video-recordings/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Video Recordings
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/platform/reach/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Participant Management
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                          <div className="border-bottom mb-4 sc-bdvvaa sc-gsDJrp hZfQVt jXLjZO Flex-fdCmZB fKbRKc">
                            <div className="float-start pe-3 sc-bdvvaa gZrIkC Box-cYwFwn byZIfc">
                              <img
                                draggable="false"
                                src="https://www.datocms-assets.com/38511/1639586965-by-role.svg"
                                alt="By role"

                                // style="max-width:24px;height:auto"
                              />
                            </div>
                            <p
                              //   style="letter-spacing:0.06em"

                              className="Text-jBexRX Text__StyledText-sc-12egtmw-0 fpYGqy"
                            >
                              By role
                            </p>
                          </div>
                          <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                            <div
                              //   style="gap:28px 0"
                              className="sc-hKwCoD dgEjxi"
                            >
                              <div className="sc-eCImvq hBziiI">
                                <div
                                  //   style="gap:28px 0"
                                  className="sc-bdvvaa sc-gsDJrp hKmdYz jXLjZO Flex-fdCmZB jQeDCS"
                                >
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/roles/product-designers/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Designers
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/roles/product-managers/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Product Managers
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/roles/product-marketers/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            Product Marketers
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    display="block"
                                    className="SubNavigationItemstyled__SubNavigationInternalLink-vjf25j-0 galzfd"
                                    href="/roles/user-researchers/"
                                  >
                                    <div className="sc-bdvvaa sc-gsDJrp itMAzf jXLjZO Flex-fdCmZB jQeDCS">
                                      <div className="sc-bdvvaa itMAzf Box-cYwFwn byZIfc">
                                        <div className="sc-bdvvaa sc-gsDJrp jZgdhz jXLjZO Flex-fdCmZB jQeDCS">
                                          <p className="Text-jBexRX Text__StyledText-sc-12egtmw-0 cXmvEL SubNavigationItemstyled__SubNavigationLinkLabel-vjf25j-2 gKqyUc">
                                            UX Researchers
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solution
              </a>

              <div
                className="dropdown-menu w-100 mt-0"
                aria-labelledby="navbarDropdown"
              >
                <div className="container">
                  <div className="row my-4">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Lorem ipsum
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Dolor sit
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Amet consectetur
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Adipisicing elit
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Explicabo voluptas
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Perspiciatis quo
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Laudantium maiores
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Provident dolor
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div className="list-group list-group-flush">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Iste quaerato
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Est iure
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Praesentium
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Laboriosam
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="list-group list-group-flush">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Saepe
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Vel alias
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Sunt doloribus
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          Cum dolores
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse ms-3" id="navbarExample1">
          <ul
            className="navbar-nav ms-auto ps-lg-0"
            style={{ paddingLeft: "0.15rem" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registration">
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React, { useEffect } from 'react';
import * as Icon from 'react-feather';
import ContentScroller from 'components/widgets/ContentScroller';
import Cta from 'components/widgets/Cta';
import Footer from 'components/widgets/Footer';
import Header from 'components/layout/Header';
import CtaButton from 'components/blocks/CtaButton';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="hero-main bg-dark">
        <div className="hero-container pt-5 pb-5 bg-lght">
          <div className="container">
            <div className="mb-5">
              <div className="row row-grid align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2">
                  <figure className="w-100">
                    <img
                      alt="ACV - Tangible IT"
                      src="/assets/images/contents/teacher-collborating.png"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5 text-start">
                  <h1 className="main-heading">
                    It is time to expand your{' '}
                    <span className="text-brand">online classes</span>
                  </h1>

                  <p className="text-muted mt-4">
                    👋 Welcome to ACV, Your learning and collaboration hub. Here
                    you can find information about your classes, make
                    connections with other students and teachers and chat in a
                    safe space.
                  </p>
                  <div className="mt-4">
                    <CtaButton
                      name="Request a demo"
                      link="/demo"
                      icon={<Icon.ArrowRight className="ms-2" />}
                      className="mt-2 me-3"
                    />
                    <button
                      href="https://docs.acv.app/"
                      target="_blank"
                      className="btn btn-danger brand-btn btn-neutral mt-2 me-3"
                    >
                      Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="slice slice-lg dash-section bg-dark">
        <div className="container">
          <div className="row justify-content-lg-end">
            <div className="col-lg-5 text-end">
              <h6 className="display-4 text-brand fw-bolder">7x24</h6>
              <p className="mb-3 fs-5 text-dark-muted">
                Check attendance behavior anytime, anywhere.
              </p>
            </div>
            <div className="col-lg-6">
              <h2 className="sub-heading fw-bolder">
                ACV dashboards are updated in real time
              </h2>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src="/assets/images/contents/small/img1.png"
                      className="img-fluid img-center"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="title mb-2">Preload classes</h5>
                  <p className="detail">
                    Import your institution's official calendar from your school
                    systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src="/assets/images/contents/small/img2.png"
                      className="img-fluid img-center"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="title mb-2">Take assists</h5>
                  <p className="detail">
                    Audit the assists taken or perform assistances in
                    substitution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src="/assets/images/contents/small/img3.png"
                      className="img-fluid img-center"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="title mb-2">Analyze behaviors</h5>
                  <p className="detail">
                    For this you have 4 interesting information boards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="row justify-content-center space-x">
        <div className="col-lg-8 order-lg-2 shadow-xl rounded-5 overflow-hidden bg-white box-content p-2 pt-0 videoScreen">
          <div className="w-100 items-center videoScreenElem">
            <div className="w-3 h-3 rounded-5 bg-danger"></div>
            <div className="w-3 h-3 rounded-5 bg-warning ms-2"></div>
            <div className="w-3 h-3 rounded-5 bg-success ms-2"></div>
          </div>
          <div className="w-100 overflow-hidden"></div>
        </div>
      </div> */}
      <section className="slice slice-lg cmp-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="sub-heading mb-5">
                Everything you need to
                <span className="text-brand"> collaborate</span> online
              </h2>
            </div>
          </div>
          <div className="row mt-5 text-start">
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard"
                        src="/assets/images/contents/small/img2.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Brainstorm</div>

                  <div className="fs-6 mt-2">
                    Ideate with your team in real time or asynchronously.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard-miro"
                        src="/assets/images/contents/small/img1.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Plan</div>

                  <div className="fs-6 mt-2">
                    Create a strategy, set OKRs, and roadmap your work.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard-miro"
                        src="/assets/images/contents/small/img3.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Plan</div>

                  <div className="fs-6 mt-2">
                    Create a strategy, set OKRs, and roadmap your work.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard-miro"
                        src="/assets/images/contents/small/img1.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Plan</div>

                  <div className="fs-6 mt-2">
                    Create a strategy, set OKRs, and roadmap your work.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard-miro"
                        src="/assets/images/contents/small/img3.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Plan</div>

                  <div className="fs-6 mt-2">
                    Create a strategy, set OKRs, and roadmap your work.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-5">
                <div className="card-item mb-3">
                  <div className="com-el-image">
                    <picture>
                      <img
                        className="w-100"
                        alt="brainstorm-online-whiteboard-miro"
                        src="/assets/images/contents/small/img2.png"
                      />
                    </picture>
                  </div>
                </div>

                <div className="card-item">
                  <div className="h4 fw-bold">Plan</div>

                  <div className="fs-6 mt-2">
                    Create a strategy, set OKRs, and roadmap your work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentScroller />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;

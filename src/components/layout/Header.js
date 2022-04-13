import React from 'react';
import * as Icon from 'react-feather';

import 'styles/layout.css';

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
            style={{ paddingLeft: '0.15rem' }}
          >
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>

              <div
                className="dropdown-menu w-100 mt-0"
                aria-labelledby="productsDropdown"
              >
                <div className="container">
                  <div className="row my-3">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <div className="overflow-hidden rounded-2">
                            <img
                              src="/assets/images/contents/small/img1.png"
                              className="img-fluid img-center"
                              alt="Illustration"
                            />
                          </div>
                          <h5 className="title mt-3 mb-2 text-brand fw-600">
                            Attendance
                          </h5>
                          <p className="detail fs-6 mb-0">
                            For this you have 4 interesting information boards.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <div className="overflow-hidden rounded-2">
                            <img
                              src="/assets/images/contents/small/img2.png"
                              className="img-fluid img-center"
                              alt="Illustration"
                            />
                          </div>
                          <h5 className="title mt-3 mb-2 text-brand fw-600">
                            Dashboard
                          </h5>
                          <p className="detail fs-6 mb-0">
                            For this you have 4 interesting information boards.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <div className="overflow-hidden rounded-2">
                            <img
                              src="/assets/images/contents/small/img3.png"
                              className="img-fluid img-center"
                              alt="Illustration"
                            />
                          </div>
                          <h5 className="title mt-3 mb-2 text-brand fw-600">
                            Whiteboard
                          </h5>
                          <p className="detail fs-6 mb-0">
                            For this you have 4 interesting information boards.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <div className="">
                            <img
                              src="https://images.ctfassets.net/w6r2i5d8q73s/5NdleXapyAkSmj2SHHX7qR/50817736057c904210a6aa010efb856a/XSS-Meet.png?fm=webp"
                              className="img-fluid img-center"
                              alt="Illustration"
                            />
                          </div>
                          <h5 className="title mt-3 mb-2 text-brand fw-600">
                            Collection
                          </h5>
                          <p className="detail fs-6 mb-0">
                            For this you have 4 interesting information boards.
                          </p>
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
            style={{ paddingLeft: '0.15rem' }}
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

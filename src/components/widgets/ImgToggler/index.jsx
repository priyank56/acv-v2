import './ImgToggler.css';

const ImgToggler = () => {
  return (
    <div className="space-t">
      <div className="rounded-5 bg-white pb-4 tog-container">
        <div className="toggler-navs d-flex align-content-center">
          <lable
            aria-current="page"
            title="ACV"
            className="d-flex align-self-center"
          >
            <img
              draggable="false"
              width="48"
              height="48"
              src="/logo192.png"
              alt="ACV logo"
              className="rounded"
            />
          </lable>
          <h5 className="fs-6 ps-5 pe-5 report-header">Reports by</h5>
          <lable
            aria-current="page"
            title="ACV"
            className="db-navs fs-6 ps-2 pe-2 d-flex align-self-center"
          >
            Subject
          </lable>
          <lable
            aria-current="page"
            title="ACV"
            className="db-navs fs-6 ps-2 pe-2 d-flex align-self-center"
          >
            Student
          </lable>
          <lable
            aria-current="page"
            title="ACV"
            className="db-navs fs-6 ps-2 pe-2 d-flex align-self-center"
          >
            Teacher
          </lable>
          <lable
            aria-current="page"
            title="ACV"
            className="db-navs fs-6 ps-2 pe-2 d-flex align-self-center"
          >
            Special
          </lable>
        </div>
        <img
          src="/assets/images/dashboard.png"
          width="100%"
          alt="Dashboard Img"
        />
      </div>
    </div>
  );
};

export default ImgToggler;

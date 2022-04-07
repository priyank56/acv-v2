import './ImgToggler.css';

const ImgToggler = () => {
  return (
    <div className="space-t">
      <div className="rounded-5 bg-white pb-4 tog-container">
        <div className="toggler-navs d-flex align-content-center">
          <a
            aria-current="page"
            title="ACV"
            href="/"
            className="d-flex align-self-center"
          >
            <img
              draggable="false"
              width="48"
              height="48"
              src="/logo192.png"
              alt="ACV logo"
              class="rounded"
            />
          </a>
        </div>
        <img src="/assets/images/dashboard.png" width="100%" />
      </div>
    </div>
  );
};

export default ImgToggler;

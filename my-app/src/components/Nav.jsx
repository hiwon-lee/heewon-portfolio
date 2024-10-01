export default function Nav() {
  return (
    <div
      id="navbar-example"
      className="mainGradient"
      style={{ zIndex: '99999' }}
    >
      <nav className="navbar navbar-expand-lg navbar-light pb-0 w-100">
        <button
          style={{ border: 'none' }}
          className="navbar-toggler mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse px-1 px-lg-5 w-100"
          id="navbarSupportedContent"
        >
          <ul
            className="nav nav-pills justify-content-end d-flex flex-nowrap w-100 text-center"
            role="tablist"
          >
            <li className="nav-item flex-fill">
              <a
                className="nav-link text-light py-2 active"
                href="#scrollspyHeading1"
                style={{ backgroundColor: 'transparent' }}
              >
                About
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a
                className="nav-link text-light py-2 "
                href="#scrollspyHeading2"
              >
                Skills
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a
                className="nav-link text-light py-2 "
                href="#scrollspyHeading3"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a
                className="nav-link text-light py-2 "
                href="#scrollspyHeading4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

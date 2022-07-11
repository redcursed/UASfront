import Link from "next/link";
import Script from "next/script";
const SideBars = ({ children }) => {
  return (
    <div>
      <div className="container-fluid" bg-color="dark">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="#"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link href="/admin">
                    <a className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link href="/admin/datablog">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Data Blog
                          </span>{" "}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/createblog">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Tambah blog
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};

export default SideBars;

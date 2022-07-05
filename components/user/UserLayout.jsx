import Nav from "./Nav";
import Script from "next/script";

const UserLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <div className="footer fixed-bottom bg-dark">
        <h5 className="text-light text-center">Footer</h5>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
    </>
  );
};

export default UserLayout;

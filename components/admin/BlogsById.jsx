import { useRouter } from "next/router";
import { useState } from "react";

const BlogsByid = () => {
  const [id, setid] = useState("");
  const router = useRouter();
  const getBlgByid = (e) => {
    e.preventDefault();
    router.push({
      pathname: "datablog",
      query: { id: id },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getBlgByid}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Mahasiswa By Nim"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />

            <input
              type="submit"
              value="Cari"
              className="btn btn-success ms-2 fs-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogsByid;

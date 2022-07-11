import { useRouter } from "next/router";
import { useState } from "react";

const UserByid = () => {
  const [id, setId] = useState("");
  const router = useRouter();
  const getBlgById = (e) => {
    e.preventDefault();
    router.push({
      pathname: "blog",
      query: { id: id },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getBlgById}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Blog By Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
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

export default UserByid;

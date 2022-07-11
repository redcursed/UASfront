import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateBlog = () => {
  //deklarasi state
  const [_id, setId] = useState("");
 
  const [_date, setDate] = useState("");
  const [_tag, setTag] = useState("");

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { id, date, tag } = router.query;

  useEffect(() => {
    if (typeof id == "string") {
      setId(id);
    }
   
    if (typeof date == "string") {
      setDate(date);
    }
    if (typeof tag == "string") {
      setTag(tag);
    }
  }, [id,  date, tag]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/blog/${_id}`, {
          id: _id,
          
          date: _date,
          tag: _tag,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/admin/datablog");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3">
            Edit Data Blog
          </h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="id"
                type="text"
                placeholder="ID"
                value={_id}
                onChange={(e) => setid(e.target.value)}
              />
            </div>
          </div>

        

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="date"
                type="text"
                placeholder="date"
                value={_date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="prodi"
                type="text"
                placeholder="tag"
                value={_tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;

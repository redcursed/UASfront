import { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [id, setId] = useState("");

  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/blog", {
          id,

          date,
          tag,
        })
        .then((response) => {
          console.log(response);
        });
      alert("Penambahan Data sukses");
      clearInput();
    } catch (e) {
      throw Error(e.message);
    }
  }
  const clearInput = () => {
    setId("");

    setDate("");
    setTag("");
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Data</h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="id"
                type="text"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label htmlFor="id">id</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="date"
                type="text"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="date">Date</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="tag"
                type="text"
                placeholder="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <label htmlFor="tag">Tag</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-revverse">
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

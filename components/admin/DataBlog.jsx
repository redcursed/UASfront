import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const DataBlog = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusBlog(id) {
    // setDeleting(true)
    try {
      const response = await axios.delete(`http://localhost:5000/blog/${id}`);

      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Blog dengan ${id} telah terhapus`);
    } catch (error) {
      console.log({ message: error.message });
    }

    router.push("/admin/datablog");
  }
  return (
    <div className="container">
      <h3>Data</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>

            <th>Date</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blg, idx) => (
            <tr key={idx}>
              <td>{blg.id}</td>
              <td>{blg.date}</td>
              <td>{blg.tag}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/admin/updateblog?id=${blg.id}
                                        &date=${blg.date}
                                        &tag=${blg.tag}`}
                  >
                    <a>Edit</a>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    value={blg.id}
                    onClick={(e) => hapusBlog(e.target.value)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataBlog;

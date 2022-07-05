import DataMahasiswa from "../../components/admin/DataMahasiswa";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import MahasiswaByNim from "../../components/admin/MahasiswaByNim";

const dataMahasiswa = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutAdmin>
      <MahasiswaByNim />
      <DataMahasiswa data={data} />
    </LayoutAdmin>
  );
};

export async function getServerSideProps({ query }) {
  const nim = query.nim;
  console.log(nim);
  let url = "http://localhost:5000/mahasiswa";
  if (typeof nim === "string") {
    url = `http://localhost:5000/mahasiswa/${nim}`;
  }
  //  fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default dataMahasiswa;

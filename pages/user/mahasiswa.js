import Form from "../../components/Form";
import UserLayout from "../../components/user/UserLayout";
import { useRouter } from "next/router"; // import library router

export default function mahasiswa() {
  const router = useRouter();
  const { id, nama } = router.query; // deklarasi parametr yg dikirimkan

  return (
    <UserLayout>
      <div className="container">
        <h3>Halaaman mahasiswa</h3>
        <p>selamaat datang</p>
        <p>
          id : {id} nama: {nama}
        </p>
        <Form />
      </div>
    </UserLayout>
  );
}

import { useRouter } from "next/dist/client/router";
const nim = () => {
  const mahasiswa = [
    { nim: "1120101862", nilai: "AB" },
    { nim: "1120101863", nilai: "A" },
    { nim: "1120101864", nilai: "B" },
  ];
  const router = useRouter();
  const { nim } = router.query;
  const data = mahasiswa.find((m) => m.nim == nim);
  return (
    <>
      <p>nim : {nim}</p>
      <p>nilai : {data.nilai}</p>
    </>
  );
};

export default nim;

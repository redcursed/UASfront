import DataUser from "../../components/user/DataUser";
import UserByid from "../../components/user/UserById";
import UserLayout from "../../components/user/UserLayout";


const blog = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <UserLayout>
     
      <DataUser data={data} />
    </UserLayout>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  console.log(id);
  let url = "http://localhost:5000/blog";
  if (typeof id === "string") {
    url = `http://localhost:5000/blog/${id}`;
  }
  // fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default blog;
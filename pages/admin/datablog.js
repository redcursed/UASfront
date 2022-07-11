import DataBlog from "../../components/admin/DataBlog";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import BlogByid from "../../components/admin/BlogsById";


const dataBlog = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutAdmin>
      <BlogByid/>
      
      <DataBlog data={data} />
    </LayoutAdmin>
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

export default dataBlog;
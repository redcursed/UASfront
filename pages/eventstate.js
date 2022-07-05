import EventState from "../components/user/EventState";
import Nav from "../components/Nav";
const eventstate = () => {
  return (
    <>
      <Nav />
      <div className="container m-4">
        <EventState />
      </div>
    </>
  );
};

export default eventstate;

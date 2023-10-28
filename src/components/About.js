import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About = () => {
  return (
    <div className="aboutpage page-padding">
      <h1>This page is for About Page</h1>
      <h2>Description goes here</h2>
      <UserFunction name={"Nandu Jasthi"} location={"Bengaluru"} />
      <UserClass name={"Nandu Jasthi(Class)"} location={"Bengaluru"} />
    </div>
  );
};

export default About;

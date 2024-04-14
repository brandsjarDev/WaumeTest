import LinearStepper from "@components/multiForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import HomeCard from "@components/homeCard";
import moochy from "@public/assets/images/moochy.png";
import sausage from "@public/assets/images/sausage.png";
import ThemeButton from "@components/themeButton";
import Hero from "@components/hero";
import Nav from "@components/Nav";

const Home = () => (
  <>
    <div className="">
      <Nav className="bg-secondaryLight" />
      <Hero />
    </div>
  </>
);

export default Home;

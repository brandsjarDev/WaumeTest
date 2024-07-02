import dynamic from "next/dynamic";

// Importing Navbar and LinearStepper dynamically with SSR disabled
const DynamicNavbar = dynamic(() => import("@components/Nav"), {
  ssr: false,
});

const DynamicLinearStepper = dynamic(() => import("@components/multiForm"), {
  ssr: false,
});

const Home = () => (
  <>
    <DynamicLinearStepper />
  </>
);

export default Home;

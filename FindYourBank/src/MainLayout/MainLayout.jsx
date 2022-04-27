import { Navbar } from "./components";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar children={children}/>
    </div>
  );
};

export default MainLayout;

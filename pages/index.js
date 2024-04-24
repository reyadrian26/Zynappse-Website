/** COMPONENTS */
import UnderConstructionWrapper from "components/generics/UnderConstructionWrapper";
import MainLayout from "layout/main";
import HomeComponent from "components/Home";

const Home = (props) => {

  let mainLayoutProps = {
    ...props,
    hasMetaTags: true,
  };

  return (
    <MainLayout { ...mainLayoutProps }>
      <HomeComponent {...props} />
    </MainLayout>
  );
};

export default UnderConstructionWrapper(Home);
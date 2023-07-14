/** LIBRARIES */
import dynamic from "next/dynamic";

/** COMPONENTS */
const Content = dynamic(() => import("./Content"));
const Background = dynamic(() => import("./Background"));

const index = () => {
  return (
    <div>
      <Background />
      <Content />
    </div>
  );
};

export default index;

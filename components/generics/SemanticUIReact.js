/** LIBRARIES */
import dynamic from "next/dynamic";

/** SEMANTIC */
const Container = dynamic(() => import("semantic-ui-react").then(({ Container }) => Container));
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));
const Loader = dynamic(() => import("semantic-ui-react").then(({ Loader }) => Loader));

export {
    Container,
    Header,
    Loader,
};

/** LIBRARIES */
import dynamic from "next/dynamic";

/** SEMANTIC */
const Container = dynamic(() => import("semantic-ui-react").then(({ Container }) => Container));
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));
const Loader = dynamic(() => import("semantic-ui-react").then(({ Loader }) => Loader));

const List = dynamic(() => import("semantic-ui-react").then(({ List }) => List));
const ListItem = dynamic(() => import("semantic-ui-react").then(({ ListItem }) => ListItem));


export {
    Container,
    Header,
    Loader,
    List,
    ListItem
};

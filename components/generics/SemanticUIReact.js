/** LIBRARIES */
import dynamic from "next/dynamic";

/** SEMANTIC */
const Container = dynamic(() => import("semantic-ui-react").then(({ Container }) => Container));
const Header = dynamic(() => import("semantic-ui-react").then(({ Header }) => Header));
const Loader = dynamic(() => import("semantic-ui-react").then(({ Loader }) => Loader));
const MenuItem = dynamic(() => import("semantic-ui-react").then(({ MenuItem }) => MenuItem));
const Menu = dynamic(() => import("semantic-ui-react").then(({ Menu }) => Menu));
const Segment = dynamic(() => import("semantic-ui-react").then(({ Segment }) => Segment));
const Button = dynamic(() => import("semantic-ui-react").then(({ Button }) => Button));
const GridRow = dynamic(() => import("semantic-ui-react").then(({ GridRow }) => GridRow));
const GridColumn = dynamic(() => import("semantic-ui-react").then(({ GridColumn }) => GridColumn));
const Grid = dynamic(() => import("semantic-ui-react").then(({ Grid }) => Grid));
const Image = dynamic(() => import("semantic-ui-react").then(({ Image }) => Image));
const Icon = dynamic(() => import("semantic-ui-react").then(({ Icon }) => Icon));
const ListItem = dynamic(() => import("semantic-ui-react").then(({ ListItem }) => ListItem));
const List = dynamic(() => import("semantic-ui-react").then(({ List }) => List));
const Transition = dynamic(() => import("semantic-ui-react").then(({ Transition }) => Transition));

export {
    Container,
    Header,
    Loader,
    MenuItem,
    Menu,
    Segment,
    Button,
    GridRow,
    GridColumn,
    Grid,
    Image,
    ListItem, 
    List,
    Icon,
    Transition
};

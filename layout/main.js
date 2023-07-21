/** LIBRARIES */
import React, { 
    useState, 
    useEffect, 
} from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/** COMPONENTS */
const Head = dynamic(() => import("components/generics/Head.js"));
const LoaderComponent = dynamic(() => import("components/generics/Loader.js"));
const Header = dynamic(() => import("components/generics/Header"));

/** STYLES */
import style from "styles/main.module.scss";

import { SetValue } from "actions";

const MainLayout = (props) => {
    let {
        children, 
        authenticated, 
        hasMetaTags,
        mainContainerStyle,
        hasHeader
    } = props;

    const [isLoading, setIsLoading] = useState(true)

    const useComponentDidMount = (callback) => useEffect(callback, []);

    useComponentDidMount(() => {
        setIsLoading(false);
    });

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {})
    );

    let headerProps = { ...props }

    let onRenderContentComponent = "";

    if (
        !isLoading ||
        (
            !isLoading && 
            !authenticated
        )
    ) { onRenderContentComponent = childrenWithProps; } 
    else { onRenderContentComponent = (<LoaderComponent />); }
    
    let onRenderNavigationComponents = (
        <div>
            {                     
                hasHeader &&
                (<Header { ...headerProps } />)
            }
            <div 
                className={ [
                    style.content, 
                    isLoading 
                        ? style.displayNone 
                        : ""
                ].join(" ") }>         

                <div className={ style.mainGridContainer }>
                    {
                        <div>
                            { onRenderContentComponent } 
                        </div>
                    }
                </div>
            </div>
        </div>
    );


    return (
        <div
            className={ [
                mainContainerStyle 
                    ? mainContainerStyle 
                    : "", 
                style.posRelative
            ].join(" ") }>
            {
                hasMetaTags &&
                (<Head { ...props } />)
            }
            { onRenderNavigationComponents }

        </div>
    );

}

function mapStateToProps(state) {
    var { Default } = state;
    const props = { Default };
    return props;
}

function mapDispatchToProps(dispatch) {
    const actions = { setValue: SetValue };
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
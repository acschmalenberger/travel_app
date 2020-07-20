    import {
        warningCardHeader,
        successCardHeader,
        dangerCardHeader,
        infoCardHeader,
        primaryCardHeader,
        roseCardHeader,
        grayColor
    } from "../Styles/material-dashboard-react.js";
    
    const cardIconStyle = {
        cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            borderRadius: "10px",
            backgroundColor: "#e7834b",
            padding: "30px",
            marginTop: "-65px",
            marginRight: "30px",
            float: "left"
        }
        },
        warningCardHeader,
        successCardHeader,
        dangerCardHeader,
        infoCardHeader,
        primaryCardHeader,
        roseCardHeader
    };
    
    export default cardIconStyle;
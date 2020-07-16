import React from "react";
import classnames from "classnames";
 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

 // core components
import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Button from "../Button/index.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import styles from "./style.js";
import CardPlanningForm from "../CardPlanningForm/index.js";
import CardPlanningTabs from "../CardPlanningTabs/index.js";

const useStyles = makeStyles(styles);

    export default function CardPlanningDeck(props) {

        const [value, setValue] = React.useState(0);
        const handleChange = (event, value) => {
        setValue(value);
        };
        const classes = useStyles();
        const { headerColor, plainTabs, tabs, title, rtlActive } = props;
        const cardTitle = classnames({
            [classes.cardTitle]: true,
            [classes.cardTitleRTL]: rtlActive
        });
        
        return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <Card>
                    <CardPlanningTabs />
                    <CardBody>
                      <GridContainer>
                        <CardPlanningForm />
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                    <Button color="primary">Update Trip</Button>
                    </CardFooter>
                  </Card>
                </GridItem>
            </GridContainer>
        </div>
        );
}

{/* <GridContainer>
<GridItem xs={12} sm={12} md={6}>
  <CustomTabs
    title="Tasks:"
    headerColor="primary"
    tabs={[
      {
        tabName: "Bugs",
        tabIcon: BugReport,
        tabContent: (
          <Tasks
            checkedIndexes={[0, 3]}
            tasksIndexes={[0, 1, 2, 3]}
            tasks={bugs}
          />
        )
      },
      {
        tabName: "Website",
        tabIcon: Code,
        tabContent: (
          <Tasks
            checkedIndexes={[0]}
            tasksIndexes={[0, 1]}
            tasks={website}
          />
        )
      },
      {
        tabName: "Server",
        tabIcon: Cloud,
        tabContent: (
          <Tasks
            checkedIndexes={[1]}
            tasksIndexes={[0, 1, 2]}
            tasks={server}
          />
        )
      }
    ]}
  />
</GridItem> */}
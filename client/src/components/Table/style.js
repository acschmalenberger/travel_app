import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont
} from "../Styles/material-dashboard-react.js";

const TableStyle = theme => ({
    warningTableHeader: {
        color: warningColor[0]
    },
    primaryTableHeader: {
        color: primaryColor[0]
    },
    dangerTableHeader: {
        color: dangerColor[0]
    },
    successTableHeader: {
        color: successColor[0]
    },
    infoTableHeader: {
        color: infoColor[0]
    },
    roseTableHeader: {
        color: roseColor[0]
    },
    grayTableHeader: {
        color: grayColor[0]
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
<<<<<<< HEAD
    },
    tableHeadCell: {
=======
        },
        tableHeadCell: {
        fontWeight: "bold",
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
        color: "inherit",
        ...defaultFont,
        "&, &$tableCell": {
            fontSize: "1em"
        }
    },
    tableCell: {
        ...defaultFont,
<<<<<<< HEAD
        color: grayColor[1],
=======
        color: grayColor [1],
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
        lineHeight: "1.42857143",
        padding: "12px 8px",
        verticalAlign: "middle",
        fontSize: "0.8125rem"
    },
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    tableHeadRow: {
        height: "56px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    },
    tableBodyRow: {
        height: "48px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    }
});

export default TableStyle;

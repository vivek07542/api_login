export const coloumnConfig = [
    {   
        coloumnName: "Name",
        coloumnType: "regular",
        className : "col-md-2 col-12 text-break ",
        dataColoumn: "name",
        color: "#555",
        backgroundColor: "white",
        fontSize: "10px",
        linkTo: "null",
        sortExpression: "name"
    },
    
    {
        coloumnName: "Type",
        coloumnType: "regular",
        className : "col-md-2 col-12",
        dataColoumn: "type",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "white",
        linkTo: "null",
        sortExpression: "type"
    },
    {
        coloumnName: "Status",
        coloumnType: "rectangle",
        className : "col-md-2 col-12",
        dataColoumn: "status",
        color: "",
        fontSize: "10px",
        backgroundColor: "",
        linkTo: "null",
        sortExpression: "status"
    },
    
    {
        coloumnName: "Enrolment Type",
        coloumnType: "regular",
        className : "col-md-2 col-12",
        dataColoumn: "description",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "white",
        linkTo: "null",
        sortExpression: "enrolmentType"
    },
    {
        coloumnName: "Last Updated",
        coloumnType: "special",
        className: "col-md-2 col-12",
        dataColoumn: "updatedAt;owner;updatedBy",
        specialColumnClass : "d-flex justify-content-md-around",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "",
        linkTo: "null",
        sortExpression: "lastUpdated"
    },
    {
        coloumnName: "Owners(S)",
        coloumnType: "circle",
        className : "col-md-1 col-12",
        dataColoumn: "owner",
        userIcon_Class:"mx-md-auto",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "",
        linkTo: "null",
        sortExpression: "owners"
    },
    {
        coloumnName: "Tags",
        coloumnType: "cylinder",
        className : "col-md-2 col-12 text-break ",
        dataColoumn: "tags",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "",
        linkTo: "null",
        sortExpression: "tags",
    },
    {
        coloumnName: "Action",
        coloumnType: "actionSpecial",
        className : "col-md-2 col-12",
        dataColoumn: "_id",
        color: "#555",
        fontSize: "10px",
        backgroundColor: "",
        linkTo: "null",
        sortExpression: "",
    }
]
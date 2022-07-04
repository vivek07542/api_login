import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const homeTaskConfig = [
    {
        collapseName: "GET",
        task: [
            {
                name: "Patient",iconCondition:true, category: "wip", bgColor: "orange", boxImage: <BsIcons.BsPersonFill />, selected: false, shape: "square",
                inputForm: [{
                    col:"col-12",
                    name: "gender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Gender",
                    className:"form-control",
                    options: [{ value:"", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
                },
                {   
                    col:"col-6",    
                    name: "selectOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorGender",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    },
                    {
                        col:"col-12",
                        name: "birthDate",
                        rules: "Field Is Required",
                        InputType: "input",
                        condition: "inline",
                        label: "Date Of Birth",
                        className:"form-control",
                        type:"date"
                    },
                    {
                        col:"col-6",
                        name: "selectOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Select Operator",
                        className:"form-control",
                        options: [
                        { value: "", label: "Please Select" },
                        { value:"=",label : "Is Equal To"},
                        { value: "!=", label: "Is Not Equal To" },
                        { value: ">", label: "Is Less Than" },
                        { value: ">=", label: "Is Less Than or Equal To" },
                        { value: "<", label: "Is Greater Than" },
                        { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    }]
            },
            { name: "Observation",iconCondition:true, category: "wip", bgColor: "skyblue",boxImage: <BsIcons.BsClockFill/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
        ]
    },
    {
        collapseName: "COMPUTE",
        task: [
            { name: "Compute Avg",iconCondition:true, category: "wip", bgColor: "Blue",boxImage: <AiIcons.AiOutlineCalculator/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Compute Max",iconCondition:true, category: "wip", bgColor: "Blue",boxImage: <AiIcons.AiOutlineCalculator/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Compute Min",iconCondition:true, category: "wip", bgColor: "Blue",boxImage: <AiIcons.AiOutlineCalculator/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]}
        ]
    },
    {
        collapseName: "TRIGGER",
        task: [
            { name: "Event",iconCondition:true, category: "wip", bgColor: "yellow",boxImage: <BsIcons.BsCalendar/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Schedule",iconCondition:true, category: "wip", bgColor: "skyblue",boxImage: <BsIcons.BsClockFill/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Delta",iconCondition:true, category: "wip", bgColor: "purple", boxImage: <MdIcons.MdStackedBarChart/>, selected: false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Send Email",iconCondition:true, category: "wip", bgColor: "red",boxImage: <IoIcons.IoMdMail/>,selected:false,shape:"square",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]}
        ]
    },
    {
        collapseName: "ACTION",
        task: [
            { name: "Event",iconCondition:true, category: "wip", bgColor: "orange",boxImage: <BsIcons.BsCalendar/>,selected:false,shape:"circle",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Schedule",iconCondition:true, category: "wip", bgColor: "pink",boxImage: <BsIcons.BsClockFill/>,selected:false,shape:"circle",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
            { name: "Delta",iconCondition:true, category: "wip", bgColor: "skyblue",boxImage: <MdIcons.MdStackedBarChart/>,selected:false,shape:"circle",inputForm: [{
                col:"col-12",
                name: "gender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Gender",
                className:"form-control",
                options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
            },
            {   
                col:"col-6",    
                name: "selectOperatorGender",
                rules: "Field Is Required",
                InputType: "select",
                condition: "flex",
                label: "Select Operator",
                className:"form-control",
                options: [
                { value: "", label: "Please Select" },
                { value:"=",label : "Is Equal To"},
                { value: "!=", label: "Is Not Equal To" },
                { value: ">", label: "Is Less Than" },
                { value: ">=", label: "Is Less Than or Equal To" },
                { value: "<", label: "Is Greater Than" },
                { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                },
                {
                    col:"col-12",
                    name: "birthDate",
                    rules: "Field Is Required",
                    InputType: "input",
                    condition: "inline",
                    label: "Date Of Birth",
                    className:"form-control",
                    type:"date"
                },
                {
                    col:"col-6",
                    name: "selectOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                },
                {
                    col:"col-6",
                    name: "channelOperatorBirth",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Channel Operator",
                    className:"form-control",
                    options: [
                        { value: "", label: "Please Select" },
                        { value: "userInput", label: "User Input" },
                        {value:"previousIgniters",label : "Previous Igniters"}
                    ]
                }]},
        ]
    },{
        collapseName: "DATA",
        task: [
            { name: "Event",iconCondition:true, category: "wip", bgColor: "white",boxImage: <BsIcons.BsCalendar/>,selected:false,shape:"file",inputForm: [{
                    col:"col-12",
                    name: "gender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Gender",
                    className:"form-control",
                    options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
                },
                {   
                    col:"col-6",    
                    name: "selectOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorGender",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    },
                    {
                        col:"col-12",
                        name: "birthDate",
                        rules: "Field Is Required",
                        InputType: "input",
                        condition: "inline",
                        label: "Date Of Birth",
                        className:"form-control",
                        type:"date"
                    },
                    {
                        col:"col-6",
                        name: "selectOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Select Operator",
                        className:"form-control",
                        options: [
                        { value: "", label: "Please Select" },
                        { value:"=",label : "Is Equal To"},
                        { value: "!=", label: "Is Not Equal To" },
                        { value: ">", label: "Is Less Than" },
                        { value: ">=", label: "Is Less Than or Equal To" },
                        { value: "<", label: "Is Greater Than" },
                        { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    }]},
            { name: "Schedule",iconCondition:true, category: "wip", bgColor: "white",boxImage: <BsIcons.BsClockFill/>,selected:false,shape:"file",inputForm: [{
                    col:"col-12",
                    name: "gender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Gender",
                    className:"form-control",
                    options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
                },
                {   
                    col:"col-6",    
                    name: "selectOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorGender",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    },
                    {
                        col:"col-12",
                        name: "birthDate",
                        rules: "Field Is Required",
                        InputType: "input",
                        condition: "inline",
                        label: "Date Of Birth",
                        className:"form-control",
                        type:"date"
                    },
                    {
                        col:"col-6",
                        name: "selectOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Select Operator",
                        className:"form-control",
                        options: [
                        { value: "", label: "Please Select" },
                        { value:"=",label : "Is Equal To"},
                        { value: "!=", label: "Is Not Equal To" },
                        { value: ">", label: "Is Less Than" },
                        { value: ">=", label: "Is Less Than or Equal To" },
                        { value: "<", label: "Is Greater Than" },
                        { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    }]},
            { name: "Delta",iconCondition:true, category: "wip", bgColor: "white",boxImage: <MdIcons.MdStackedBarChart/>,selected:false,shape:"file",inputForm: [{
                    col:"col-12",
                    name: "gender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Gender",
                    className:"form-control",
                    options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
                },
                {   
                    col:"col-6",    
                    name: "selectOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorGender",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    },
                    {
                        col:"col-12",
                        name: "birthDate",
                        rules: "Field Is Required",
                        InputType: "input",
                        condition: "inline",
                        label: "Date Of Birth",
                        className:"form-control",
                        type:"date"
                    },
                    {
                        col:"col-6",
                        name: "selectOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Select Operator",
                        className:"form-control",
                        options: [
                        { value: "", label: "Please Select" },
                        { value:"=",label : "Is Equal To"},
                        { value: "!=", label: "Is Not Equal To" },
                        { value: ">", label: "Is Less Than" },
                        { value: ">=", label: "Is Less Than or Equal To" },
                        { value: "<", label: "Is Greater Than" },
                        { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    }]},
        ]
    },{
        collapseName: "CONDITION",
        task: [
            { name: "Wait",iconCondition:true, category: "wip", bgColor: "purple",boxImage: <AiIcons.AiFillQuestionCircle/>,selected:false,shape:"diamond",inputForm: [{
                    col:"col-12",
                    name: "waitCondition",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Wait Condition",
                    className:"form-control",
                    options: [{ value: "", label: "Please Select" },{ value: true, label: "True" }, { value: false, label: "False" }]
                }
                    ]},
            { name: "Loop",iconCondition:true, category: "wip", bgColor: "skyblue",boxImage: <BsIcons.BsFillInfoCircleFill/>,selected:false,shape:"diamond",inputForm: [{
                col:"col-12",
                name: "loopCondition",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Loop Condition",
                className:"form-control",
                options: [{ value:"", label: "Please Select" },{ value: true, label: "True" }, { value: false, label: "False" }]
            }]},
            { name: "Delay",iconCondition:true, category: "wip", bgColor: "blue",boxImage: <MdIcons.MdOutlineAccountTree/>,selected:false,shape:"diamond",inputForm: [{
                col:"col-12",
                name: "delayCondition",
                rules: "Field Is Required",
                InputType: "select",
                condition: "inline",
                label: "Delay Condition",
                className:"form-control",
                options: [{ value:"", label: "Please Select" },{ value:true, label: "True" }, { value:false, label: "False" }]
            }]},
        ]
    },{
        collapseName: "MAIL",
        task: [
            { name: "Send Email",iconCondition:true, category: "wip", bgColor: "green",boxImage: <MdIcons.MdEmail/>,selected:false,shape:"square",inputForm: [{
                    col:"col-12",
                    name: "gender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "inline",
                    label: "Gender",
                    className:"form-control",
                    options: [{ value: "", label: "Please Select" }, { value: "male", label: "Male" }, { value: "female", label: "Female" }]
                },
                {   
                    col:"col-6",    
                    name: "selectOperatorGender",
                    rules: "Field Is Required",
                    InputType: "select",
                    condition: "flex",
                    label: "Select Operator",
                    className:"form-control",
                    options: [
                    { value: "", label: "Please Select" },
                    { value:"=",label : "Is Equal To"},
                    { value: "!=", label: "Is Not Equal To" },
                    { value: ">", label: "Is Less Than" },
                    { value: ">=", label: "Is Less Than or Equal To" },
                    { value: "<", label: "Is Greater Than" },
                    { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorGender",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    },
                    {
                        col:"col-12",
                        name: "birthDate",
                        rules: "Field Is Required",
                        InputType: "input",
                        condition: "inline",
                        label: "Date Of Birth",
                        className:"form-control",
                        type:"date"
                    },
                    {
                        col:"col-6",
                        name: "selectOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Select Operator",
                        className:"form-control",
                        options: [
                        { value: "", label: "Please Select" },
                        { value:"=",label : "Is Equal To"},
                        { value: "!=", label: "Is Not Equal To" },
                        { value: ">", label: "Is Less Than" },
                        { value: ">=", label: "Is Less Than or Equal To" },
                        { value: "<", label: "Is Greater Than" },
                        { value: "<=", label: "Is Greater or Equal To" }]
                    },
                    {
                        col:"col-6",
                        name: "channelOperatorBirth",
                        rules: "Field Is Required",
                        InputType: "select",
                        condition: "flex",
                        label: "Channel Operator",
                        className:"form-control",
                        options: [
                            { value: "", label: "Please Select" },
                            { value: "userInput", label: "User Input" },
                            {value:"previousIgniters",label : "Previous Igniters"}
                        ]
                    }]}
        ]
    }
]

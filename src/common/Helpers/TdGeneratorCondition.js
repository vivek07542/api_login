/** Used to generate JSx for the table Td with special styling */
import UserIcon from '../components/UserIcon/UserIcon';
import Tags from '../components/Tags/Tags';
import Status from '../components/Status/Status';
import { AiOutlineEdit ,AiOutlineDelete} from "react-icons/ai";
import Button from "../components/Button/Button";

export const TdGeneratorCondition = (configuration, data, object, onEditHandler, onDeleteHandler) => {
    const action = configuration.coloumnType;
    let myArray = null;
    switch (action) {
        case "regular":
            return (<p>{data}</p>)
        case "circle":
            return (<UserIcon className={configuration.userIcon_Class}>{data}</UserIcon>)
        case "cylinder":
            return (<Tags data={data} condition="regular" />)
        case "rectangle":
            return (<Status>{data}</Status>)
        case "special":
            if (configuration.dataColoumn.includes(";")) {
                let text = configuration.dataColoumn;
                myArray = text.split(";");
                const [updatedAt, owner,updatedBy] =[...myArray];
                return (<div className={configuration.specialColumnClass}>{object[updatedAt]} <UserIcon color={configuration.backgroundColor}>{(object[updatedBy] === null || object[updatedBy] === undefined || object[updatedBy] === "") ? object[owner] : object[updatedBy] }</UserIcon></div>)
            }
            else {
                return <p>{data}</p>
            }
        case "actionSpecial":
            return (<div className={configuration.specialColumnClass}>
                <div className='row justify-content-around actionContainer'>
                    <div className="col-5 p-0">
                    <Button className="table-sort-button p-1" onClick={() => { onEditHandler(data) }}>
                        <AiOutlineEdit />
                        </Button>
                    </div>
                    <div className="col-5 p-0">
                        <Button className="table-sort-button " onClick={() => { onDeleteHandler(data)}}>
                            <AiOutlineDelete />
                        </Button>
                    </div>
                </div>
            </div>)
        default:
            break;
    }
}
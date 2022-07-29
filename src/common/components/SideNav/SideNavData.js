import { BiHome, BiFile,BiBarChartAlt2 } from 'react-icons/bi';
import { TbReportSearch } from 'react-icons/tb';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { AiOutlineDropbox } from "react-icons/ai";

export const sideNavData = [
    {
        icon: <BiHome />,
        path:"/",
        iconName:"Home"

    },
    {
        icon: <AiOutlineDropbox/>,
        path:"/products",
        iconName:"Products"
    },
    {
        icon: <HiOutlineClipboardCheck/> ,
        path:"/orders",
        iconName:"Orders"
    },
    {
        icon: <TbReportSearch/>,
        path:"/reports",
        iconName:"Reports"
    }
]

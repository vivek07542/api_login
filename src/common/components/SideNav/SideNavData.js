import { BiHome, BiFile,BiBarChartAlt2 } from 'react-icons/bi';
import { RiStethoscopeLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { VscFlame } from "react-icons/vsc";

export const sideNavData = [
    {
        icon: <BiHome />,
        path:"/"
    },
    {
        icon: <BiFile/>,
        path:"/program"
    },
    {
        icon: <RiStethoscopeLine/> ,
        path:"/metrics"
    },
    {
        icon: <BsPeople/>,
        path:"/population"
    },
    {
        icon: <BiBarChartAlt2/>,
        path:"/protocol"
    },{
        icon: <VscFlame/>,
        path:"/ignite"
    },
    {
        icon: <BiFile/>,
        path:"/create_program"
    }
]

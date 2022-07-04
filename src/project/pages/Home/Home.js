import React ,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

// import Header from '../../../common/components/Header/Header';
// import Footer from '../../../common/components/Footer/Footer';
import Body from '../../../common/components/Body/Body';
// import SideNav from '../../../common/components/SideNav/SideNav';
import LeftHomeTab from '../../components/LeftHomeTab/LeftHomeTab';
import RightHomeTab from '../../components/RightHomeTab/RightHomeTab';

import * as action from "../../reduers/IgniteRedux/IgniteRedux";

import Tables from '../../../common/components/Table/Tables';
import Pagination from '../../../common/components/Pagination/Pagination';

import { coloumnConfig } from "./Config";
const Home = () => {
    const [active, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [Ids, setId] = useState("");
    const [state,setState] = useState({
        pageNumber: 1,
        searchQuery: "",
        sortDirection: "desc",
        sortExpression: "",
        limit: 5
  })
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.Ignite.tableData);
    const totalPage = useSelector(state => state.Ignite.totalPage);
    const currentPage = useSelector(state => state.Ignite.currentPage);
    const limit = useSelector(state => state.Ignite.limit);

    const getAllHandler=()=>{
        console.log("Click");
        dispatch(action.initilizeIgniteInit(state));
        console.log(tableData)
    }
    const paginate = (currentPage) => {
        let newObject = { ...state, pageNumber: currentPage }
        dispatch(action.initilizeIgniteInit(newObject))
  }
  const pageSize = (pageSize) => {
        let newObject = { ...state, limit: pageSize }
        dispatch(action.initilizeIgniteInit(newObject))
  }
  const onSortHandler = (col, actions) => {
        let newObject = { ...state, pageNumber: 1 ,sortExpression: col, sortDirection: actions }
        dispatch(action.initilizeIgniteInit(newObject))
  }

  const onEditHandler = (id) => {
        dispatch(action.getByIdIgniteInit(id, true));
        setActive(!active);
  }
  const onDeleteHandler = (id) => {
        if (window.confirm("Press Ok To Delete The Detail")) {
              dispatch(action.deleteIgniteInit(id, state));
        }
  }
        return (
            <div>
                {/* <Header /> */}
                <div className='container-flex d-flex'>
                    {/* <SideNav /> */}
                    <div className="w-100">
                        <Body className='row mx-auto'>
                            <LeftHomeTab getAllHandler={()=>getAllHandler()}/>
                            <RightHomeTab>
                                <Tables tableData={tableData} coloumnConfig={coloumnConfig} breakOn={"large"} onSortHandler={(col, action)=>onSortHandler(col, action)} onEditHandler={(id)=>onEditHandler(id)} onDeleteHandler={(id)=>onDeleteHandler(id)} />
                                {/* <Pagination totalPage={totalPage} currentPage={currentPage } limit={limit} tableData={tableData} paginateHandler={(currentPage) => paginate(currentPage)} pageSize={ (pagelimit)=>pageSize(pagelimit)}/> */}
                            </RightHomeTab>
                        </Body>
                        {/* <Footer /> */}
                    </div>
                        
                </div>
            </div>
        );
    };

export default Home;
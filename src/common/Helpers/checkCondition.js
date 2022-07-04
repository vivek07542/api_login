import Tags from "../components/Tags/Tags";
import { BsFillTagsFill,BsSearch,BsCheckLg,BsInfoCircleFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

export function checkCondition(condition, input, label,props) {
    const action = condition
    switch (action) {
      case "inline":
        return (
            <div className='row my-2'>
            <div className="col-3">
                {label}
            </div>
            <div className='col-9'>
                {input}
            </div>
        </div>
            )
        case "radio-inline":
            return (
                <>
                <div className="col-1">
                    {label}
                </div>
                <div className='col-1'>
                    {input}
                </div>
            </>
            )
        case "flex":
            return (
                <div className='row my-2'>
                <div className="col-12">{label}</div>
                    <div className="col-12">{input}</div>
                   
                </div>
            )
            case "flex-no-label":
            return (
                    <>
                        <div className='row my-2'>
                            <div className="col-12">{input}</div>
                        </div>
                    </>
                    
                )
        case "flex-tags":
            return (
                <>
                <div className="row my-2">
                    <div className="col-12">{label}</div>
                    <div className="col-12">
                        <div className=" d-flex form-control p-0 m-0">
                            <div className="col-1 p-1"><BsFillTagsFill color="rgb(227, 120, 47)"/></div>
                                {(props.tagsArray.length !== 0 && props.addTag) && <div className="col-11 create-tag-Container" onClick={() => { props.clickHandler() }}><Tags data={props.tagsArray} className=" row" condition="close-tag" closeHandler={props.closeHandler} typeOf={ props.typeOf}/></div>} 
                                {(!props.addTag|| props.tagsArray.length === 0) && <div className="col-11 p-0">{input}</div>}
                        </div>
                    </div>
                </div>
                </>
                
            )
        case "flex-search": 
            return (
                <>
                <div className="row my-2">
                   <div className="col-12">
                        <div className=" d-flex form-control p-0 m-0">
                            <div className="col-1 p-1"><BsSearch color="rgb(227, 120, 47)"/></div>
                            <div className="col-11 p-0">{input}</div>
                        </div>
                    </div>
                </div>
                </>
            )
        case "flex-search-tag":
            return (
                <>
                <div className="row my-2">
                   <div className="col-12">
                        <div className=" d-flex form-control p-0 m-0">
                 {(props.tagsArray.length !== 0 && props.addTag) &&
                    <>
                      <div className="col-11 create-tag-Container" onClick={() => { props.clickHandler() }}>
                                        <Tags
                                            data={props.tagsArray}
                                            className="row tag-display"
                                            condition="info-close-tag"
                                            closeHandler={props.closeHandler}
                                            checkClickHandler={props.checkClickHandler}
                                            infoHandler={props.infoHandler}
                                            typeOf = {props.typeOf}
                                        />
                      </div>
                      <div className="col-1 p-1"><BsSearch color="rgb(227, 120, 47)" />
                      </div>
                      </>
                  } 
                  
                      {(!props.addTag || props.tagsArray.length === 0) &&
                          <>
                              <div className="col-1 p-1"><BsSearch color="rgb(227, 120, 47)" /></div>
                              <div className="col-11 p-0">{input}</div>
                          </>
                      }
                        </div>
                    </div>
                </div>
                </>

            )
        default:
          break;
    }
}
  
export function checkTagCondition(condition,e,closeHandler,checkClickHandler,infoHandler,typeOf,clickInfo) {
    const action = condition
    switch (action) { 
        case "regular":
            return (
                <>
                    {e}
                </>  
            
            )
        case "regular-click-info":
            return (
                <div onClick={()=>clickInfo(e)}>
                    {e}
                </div> 
            )
        case "close-tag":
            return (
                <>
                <div className= "col-11">
                    {e}
                </div>
                <div className='col-1'>
                    <div className='close-tag' onClick={()=>closeHandler(e,typeOf)}><GrFormClose /></div>
                </div>
                </>
            )
        case "info-close-tag":
            return (
                <>
                <div className='col-1 p-0 m-0'>
                    <div className='check-click' onClick={()=>checkClickHandler(e,typeOf)}><BsCheckLg /></div>
                </div>
                <div className= "col-9 p-0 m-0">
                    {e}
                </div>
                <div className='col-1 p-0 m-0'>
                    <div className='info-tag' onClick={()=>infoHandler(e,typeOf)}><BsInfoCircleFill /></div>
                </div>
                <div className='col-1 p-0 m-0'>
                    <div className='closeTag' onClick={()=>closeHandler(e,typeOf)}><GrFormClose /></div>
                </div>
                </>
            )
        
        default:
          break;
    }
}

export function checkIconCondition(selected,name,iconClass,onClick,onDragStart,bgColor,boxImage,iconCondition,selectedClass,link,rightLink,closeHandler) {
    const action = selected;
    switch (action) {
        case false:
            return (
                <div className="row justify-content-center">
                    <div className="col-2">
                    <div key={name} className={`draggable-container-unselected ${selectedClass}`}>
                        <div className={`draggable ${iconClass}`}
                            onClick={onClick}
                            draggable onDragStart={onDragStart}
                            style={{ backgroundColor: bgColor }}>
                            <div className='icon-Image'>{boxImage}</div>
                        </div>
                        <div className='icon-text'>{name}</div>
                    </div>

                    </div>
                </div>

            )
        case true: 
            return (
                <div className='row justify-content-center'>
                    <div className='col-2'>
                        {iconCondition && 
                                <div key={name} className={`draggable-container ${selectedClass}`}>
                                <div className='closeTab-home-icon' onClick={closeHandler}></div>
                                {link}
                                {rightLink}
                            <div className={`draggable ${iconClass}`}
                                onClick={onClick}
                                draggable onDragStart={onDragStart}
                                style={{ backgroundColor: bgColor }}>
                                <div className='icon-Image'>{boxImage}</div>
                            </div>
                            {/* <div className='icon-text'>{name}</div> */}
                        </div>
                        
                        }
                    </div>
    
                <div className='col-2'>
                        {!iconCondition && 
                            <div key={name} className={`draggable-container ${selectedClass}`}>
                            <div className='closeTab-home-icon' onClick={closeHandler}></div>
                            {link}
                            {rightLink}
                        <div className={`draggable ${iconClass}`}
                            onClick={onClick}
                            draggable onDragStart={onDragStart}
                            style={{ backgroundColor: bgColor }}>
                            <div className='icon-Image'>{boxImage}</div>
                        </div>
                        {/* <div className='icon-text'>{name}</div> */}
                    </div>
                    
                    }
                </div>
        </div>
            )
        default: break;
    }
}
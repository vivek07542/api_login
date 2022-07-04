import React, { useState,useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";

import "./RightHomeContainer.css";
import PropTypes from "prop-types";
import { AiOutlineLeft,AiOutlineRight,AiOutlineArrowUp } from "react-icons/ai";
import Button from '../../../common/components/Button/Button';

import Input from "../../../common/components/FormElements/Input";
import Select from '../../../common/components/FormElements/Select';

import Modal from '../../../common/components/Modal/Modal';
import Tags from '../../../common/components/Tags/Tags';

const RightHomeConainer = (props) => {
    const [active, setActive] = useState(false);
    const [tagsData,setTagsData] = useState(["PatientId","First Name","Last Name","Observation Value","Observation Type","OBS Average","OBS Maximum","OBS Maximum"])
    const [selectedTags, setSelectedTags] = useState([]);
    const { taskName,collapseName, openNav, closeNav, show,inputForm,formSubmit } = { ...props }
    const { control, handleSubmit, formState: { errors }, reset,setValue } = useForm();
    
    const onSubmit = (data) => {
        data.selectedTags = selectedTags
        // console.log(data)
        formSubmit(data,taskName,collapseName)
    }
    const toggleSwitchBackdropHandler = () => {
        setActive(!active);
    }
    const clickInfo = (e) => {
        selectedTags.length < 4 && setSelectedTags([...selectedTags,e])
    }
    useEffect(() => {
        if (inputForm.length !== 0) {
            reset();
            setSelectedTags([])
        }
    }, [inputForm,reset])
    const checkForm=(f,e)=> {
        let eachForm = e.InputType === "select" ? <Select condition={e.condition} label={e.label} className={e.className} {...f} options={e.options}/>
        : <Input type={e.type} condition={e.condition} label={e.label} className={e.className} {...f}/>
        return eachForm
    }
    let inputs = inputForm.map((e, index) => {
        return (
            <div key={index} className={e.col}>
            <Controller name={e.name} control={control} rules={{ required: e.rules }} render={({ field }) =>  checkForm(field,e) }/>
            {errors[e.name] && <p className="errorText">{errors[e.name].message}</p> }
            </div>
    )
    })
    return (
        <div className='col-4'>
            <div className='row justify-content-end form-container p-0'>
                {!show && <div className='form-side-container'>
                    <AiOutlineLeft onClick={openNav}/>
                </div>}
                {show && 
                    <div className='sideNav p-0' >
                        <div className="form-heading-div">
                            <div className='form-heading-text'>Properties Of {taskName}</div>
                        <a href="/#" className="closebtn" onClick={closeNav}><AiOutlineRight/></a>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='px-2'>
                            <div className='form-button-container'>
                                <Button type="button" className="draft-blue-homeForm draft-homeForm" >Draft</Button>
                                <Button type="button" className="draft-white-homeForm draft-homeForm" >Reset</Button>
                                <Button type="submit" className='draft-homeForm' >Save</Button>
                                <Button type="button" className="draft-green-homeForm draft-homeForm" >Save & Exit</Button>
                            </div>
                            <div className="input-form-homeIcon-container">
                                    <p className='font-text p-0 m-0'>Input - Process Build</p>
                                    <div className='row p-0'>
                                        {inputs}
                                        <div className='output-container form-control labelText' onClick={()=>setActive(true)}>
                                            <p>Select Output Parameter</p>
                                            <AiOutlineArrowUp/>
                                        </div>   
                                        <Modal show={active} modelClosed={toggleSwitchBackdropHandler}>
                                            <div className='container p-0 m-0'>
                                                <div className='row'>
                                                    <p className='labelText'>Select Output Parameter</p>
                                                </div>
                                                <div className='row'>
                                                    <Tags data={tagsData} condition="regular-click-info"  clickInfo={(e)=>clickInfo(e)}/>
                                                </div>
                                                <div className='row justify-content-end my-3'>
                                                    <div className='col-md-2 col-3'>
                                                    <Button type="button" className="draft-white-homeForm draft-homeForm" onClick={toggleSwitchBackdropHandler}>Cancel</Button>
                                                    </div>
                                                    <div className='col-md-2 col-3'>
                                                    <Button type="button" className="draft-white-homeForm draft-homeForm" onClick={toggleSwitchBackdropHandler}>Ok</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>
                                        <div className='row mt-2'>
                                            <Tags data={selectedTags} condition="regular"/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
RightHomeConainer.propTypes = {
    /**
     * Detail Recieved from the Drop And detail in string form now 
     */
    taskName: PropTypes.string,
    /**
     * Nav Open Click Event
     */
    openNav: PropTypes.func,
    /**
     * Side Nav Close Event
     */
    closeNav: PropTypes.func,
    /**
     * Condition to Show the Form or not
     */
    show: PropTypes.bool,
    inputForm: PropTypes.string,
    formSubmit: PropTypes.func,
    colapseName:PropTypes.string
  }
export default RightHomeConainer

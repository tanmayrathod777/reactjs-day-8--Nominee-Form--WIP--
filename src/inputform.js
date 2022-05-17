import React , {useState} from 'react';
import './style.css'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField , Button, makeStyles } from '@mui/material';
import { display, style } from '@mui/system';

var validator = require('validator');
export default function ComposedTextField() {

const [name , setName] = useState("");
const [nameError , setNameError] = useState(false);
const [relation , setRelation] = useState("");
const [relationError , setRelationError] = useState(false);
const [day , setDay] = useState("");
const [dayError , setDayError] = useState(false) ;
const [month , setMonth] = useState("");
const [monthError , setMonthError] = useState(false) ;
const [year , setYear] = useState("");
const [yearError , setYearError] = useState(false) ;
const [guardian , setGuardian] = useState("");
const [guardianError , setGuardianError] = useState(false) ;

const handleSubmit = () => {
    if(validator.isEmpty(name) === true ) {setNameError(true)}
    else{
      setNameError(false)
    }
    if (validator.isEmpty(relation) === true ) {setRelationError(true)}
    else {
      setRelationError(false)
    }
    if(validator.isEmpty(day) === true || validator.isAlpha(day) === true ) {setDayError(true)}
    else {
      setDayError(false)
    }
    if( validator.isEmpty(month) === true || validator.isAlpha(month) === true ) {setMonthError(true)}
    else {
      setMonthError(false)
    }
    if(validator.isEmpty(year) === true  || validator.isAlpha(year) === true) { setYearError(true)}
   else {
     setYearError(false) ;
     {
       

      if(year  > 2002) {
          setGuardianError(true) 
          if(validator.isEmpty(guardian) === false) {
              setGuardianError(false)
          }
      }else if (year < 2002) {
          setGuardianError(false)
      }

      const obj = {
          name : name ,
          relation : relation ,
          day : day ,
          month : month ,
          year : year ,
          guardian : guardian ,
      }
      console.log(obj);
      
  }
   }
    
    
    
}
const getDay = (event) =>{
    setDay(event.target.value);
}
const getMonth = (event) =>{
    setMonth(event.target.value);
}
const getYear = (event) =>{
    setYear(event.target.value);
}
const getName = (event) => {
    setName(event.target.value);
}
const getRelation = (event) => {
    setRelation(event.target.value);
}
const getGuardian = (event) => {
    setGuardian(event.target.value)
}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },

        
      } 
    }
      noValidate
      autoComplete="off"
    > 
    <h1>Form</h1>
    <label >Name :</label> <br />
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" value={name} onChange={getName} />
        {nameError ? <h5>* Enter A Name</h5> : ""}
      </FormControl>
      <br />

      <label>Relation</label> <br />
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Relation</InputLabel>
        <FilledInput id="component-filled" value={relation} onChange={getRelation} />
        {relationError ? <h5>* Please Enter Relation</h5> : ""}
      </FormControl>
      <br />
      <label>Date Of Birth</label>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Day</InputLabel>
        <FilledInput id="component-filled" value={day} onChange={getDay} />
        {dayError ? <h5>* Please Enter Day</h5> : ""}
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Month</InputLabel>
        <FilledInput id="component-filled" value={month} onChange={getMonth} />
        {monthError ? <h5>* Please Enter Month</h5> : ""}
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Year</InputLabel>
        <FilledInput id="component-filled" value={year} onChange={getYear} />
        {yearError ? <h5>* Please Enter Year</h5> : ""}
     
      </FormControl>
      <br />
      <label> Nominee Guardian</label>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Guardian</InputLabel>
        <FilledInput id="component-filled" value={guardian} onChange={getGuardian} />
        {guardianError ? <h5>* Please Enter Guardian Cause You Are Under 22</h5> : ""}
      </FormControl>
      <br />
      <Button className='btn' variant="outlined" name="submit" onClick={() => handleSubmit()}>Submit</Button>
    
    </Box>
  );
}
 
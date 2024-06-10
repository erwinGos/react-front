import React, { useEffect, useState } from 'react'
import RadioSelector from "../components/RadioSelector";
import MultipleSelectInput from '../components/inputs/MultipleSelectInput';
import { useDispatch, useSelector } from 'react-redux';
import PersonalInformations from "../components/registerForm/personalInformations";
import CarInformations from "../components/registerForm/CarInformations";
import DocumentInformations from "../components/registerForm/documentInformations"

const RegisterForm = () => {
  const dispatch = useDispatch();
  const mailingList = useSelector(state => state.register.mailingList);
  const [userInformations, setUserInformations] = useState({});
  const [selectedWrapper, setSelectedWrapper] = useState(0);

  

  return (
    <div className='flex flex-col min-h-[95vh] w-auto md:px-[8rem] p-2'>
      <h2 className='mt-[100px] text-7xl text-center md:text-left font-medium m-1 animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].title}</h2>
      <p className='my-6 font-medium text-[20px] text-center md:text-left animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].description}</p>
      {mailingList.length > 0 ? <RadioSelector setSelectedWrapper={setSelectedWrapper} mailingList={mailingList}/> : null}
      {selectedWrapper == 0 && userInformations ? <PersonalInformations Tab={mailingList[0]}/> : null}
      {selectedWrapper == 1 ? <CarInformations Tab={mailingList[1]} userInformations={userInformations} setUserInformations={setUserInformations}/> : null}
      {selectedWrapper == 2 ? <DocumentInformations Tab={mailingList[2]}/> : null}
    </div>
  )
}

export default RegisterForm;
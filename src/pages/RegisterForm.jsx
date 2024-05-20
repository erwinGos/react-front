import React, { useEffect, useState } from 'react'
import RadioSelector from "../components/RadioSelector";

const RegisterForm = () => {

  const [selectedWrapper, setSelectedWrapper] = useState(0);
  


  const personalInformations = () => {
    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      <from>
        <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Informations personelles</h2>
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 my-4'>
          <div>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nom"
              autocomplete="off"
            />
          </div>
          <div>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Prénom"
              autocomplete="off"
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Date de naissance"
              autocomplete="off"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Adresse mail"
              autocomplete="off"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nom"
              autocomplete="off"
            />
          </div>
        </div>
      </from>
    </div>
  );
  }


  return (
    <div className='min-h-[95vh] w-full md:px-[8rem] p-2'>
      <h2 className='mt-[100px] text-7xl text-center md:text-left font-medium m-1'>Parlez nous de vous</h2>
      <p className='my-6 font-medium text-[20px] text-center md:text-left'>Merci de compléter avec soin vos informations personnelles conformément à vos documents.</p>
      <RadioSelector setSelectedWrapper={setSelectedWrapper}/>
      {selectedWrapper == 0 ? personalInformations() : null}
    </div>
  )
}

export default RegisterForm;
import React, { useEffect, useState } from 'react'
import RadioSelector from "../components/RadioSelector";

const RegisterForm = () => {

  const [selectedWrapper, setSelectedWrapper] = useState(0);
  


  const personalInformations = () => {
    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      <from>
        <div>
          <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Informations personelles</h2>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="block w-full outline-0	rounded-md border-none py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Nom"
                autocomplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Prénom"
                autocomplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Date de naissance"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Informations professionnelles</h2>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 my-4'>
            <div>
              <input
                type="text"
                name="siret"
                id="siret"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="N° SIRET"
                autocomplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="street"
                id="street"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Rue"
                autocomplete="off"
              />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <input
                type="text"
                name="additional_street"
                id="additional_street"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Complémement d'adresse"
                autocomplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Ville"
                autocomplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="postal_code"
                id="postal_code"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Code postal"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
            Enregistrer
          </button>
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
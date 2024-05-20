import React, { useEffect, useState } from 'react'
import RadioSelector from "../components/RadioSelector";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import MultipleSelectInput from '../components/inputs/MultipleSelectInput';


const RegisterForm = () => {

  const [selectedWrapper, setSelectedWrapper] = useState(0);
  const [addedCars, setAddedCars] = useState([]);
  const [mailingList, setMailingList] = useState([
    { 
      id: 1, title: 'Informations personnelles',
      completed: false,
      title: "Parlez nous de vous",
      description: "Merci de compléter avec soin vos informations personnelles.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg> 
    },
    { 
      id: 2, 
      title: 'Ajoutez un véhicule',
      description: "Fournissez les informations importantes de votre véhicule pour nous aider dans notre analyse.",
      completed: false, 
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
    },
    { 
      id: 3, 
      title: 'Documents à fournir',
      description: "Merci de fournir les documents requis dans les formats demandés.",  
      completed: false, 
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
    }
  ]);

  const personalInformations = () => {
    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      <form>
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
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Prénom"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Date de naissance"
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="street"
                id="street"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Rue"
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Ville"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="postal_code"
                id="postal_code"
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Code postal"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-10'>
          <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
  }

  const carInformations = () => {
    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      {addedCars.length <= 0 ? (
      <form>
        <div>
          <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Ajouter un véhicule</h2>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <input
                type="text"
                name="immatriculation"
                id="immatriculation"
                className="block w-full outline-0	rounded-md border-none py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Immatriculation"
                autoComplete="off"
              />
            </div>
            <div>
              <select
                id="brand"
                name="brand"
                className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                defaultValue="Marque"
              >
                <option>Choisissez une marque</option>
                <option>Renault</option>
                <option>Citröen</option>
                <option>Peugeot</option>  
              </select>
            </div>
            <div>
              <select
                id="car_type"
                name="car_type"
                className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                defaultValue="Marque"
              >
                <option>Choisissez une type de véhicule</option>
                <option>Electrique</option>
                <option>Essence</option>
                <option>Diesel</option>  
              </select>
            </div>
            <div>
              <select
                id="car_model"
                name="car_model"
                className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                defaultValue="Modèle"
              >
                <option>Choisissez le modèle</option>
                <option>C3</option>
                <option>C4</option>
                <option>C5 aircross</option>  
              </select>
            </div>
            <div>
              <input
                type="text"
                name="registration_year"
                id="registration_year"
                className="block w-full outline-0	rounded-md border-none py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Année de mise en circulation"
                autoComplete="off"
              />
            </div>
            <div>
              <select
                id="car_type"
                name="car_type"
                className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                defaultValue="Couleur"
              >
                <option>Couleur</option>
                <option>Blanc</option>
                <option>Noir</option>
                <option>Gris</option>  
              </select>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div className='flex col-span-1 max-h-[55px]'>
              <input
                  type="number"
                  name="registration_year"
                  id="registration_year"
                  className="min-h-[55px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full outline-0	rounded-l-md border-none py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Nombre de places (hors conducteur)"
                  autoComplete="off"
              />
              <div className='flex flex-col w-[50px] h-[55px]'>
                <button className="p-1 flex items-center justify-center bg-gray-100 rounded-tr-md w-full shadow-sm ring-1 ring-inset ring-gray-300">
                  <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-1 flex items-center justify-center bg-gray-100 rounded-br-md w-full shadow-sm ring-1 ring-inset ring-gray-300">
                  <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
            <div className='flex col-span-2'>
              <MultipleSelectInput />
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-10'>
          <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
            Enregistrer
          </button>
        </div>
      </form>
      ) : null}
    </div>
  );
  }


  return (
    <div className='min-h-[95vh] w-full md:px-[8rem] p-2'>
      <h2 className='mt-[100px] text-7xl text-center md:text-left font-medium m-1 animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].title}</h2>
      <p className='my-6 font-medium text-[20px] text-center md:text-left animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].description}</p>
      <RadioSelector setSelectedWrapper={setSelectedWrapper} mailingList={mailingList}/>
      {selectedWrapper == 0 ? personalInformations() : null}
      {selectedWrapper == 1 ? carInformations() : null}
    </div>
  )
}

export default RegisterForm;
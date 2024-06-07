import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import MultipleSelectInput from '../inputs/MultipleSelectInput';


const CarInformations = ({userInformations, setUserInformations}) => {

  const [toggleForm, setToggleForm] = useState(false);
  const [userCars, setUserCars] = useState([
    {
      immatriculation: "BY-264-SS",
      brand: "Citroën",
      car_type: "Berline",
      model: "C3 AirCross",
      registration_date: "2022",
      color: "Gray",
      seats: 4,
      options: ["Climatisation", "Chien Autorisé"]
    },
    {
      immatriculation: "TD-041-DF",
      brand: "Peugeot",
      car_type: "Break",
      model: "508 PSA",
      registration_date: "2022",
      color: "Gray",
      seats: 4,
      options: ["Climatisation", "Chien Autorisé"]
    },
    {
      immatriculation: "NN-885-QS",
      brand: "BMW",
      car_type: "Berline",
      model: "550i",
      registration_date: "2022",
      color: "Gray",
      seats: 4,
      options: ["Climatisation", "Chien Autorisé"]
    }
  ]);
  return (
    <div className='py-14 animate__animated animate__fadeIn'>
      {toggleForm ? (
      <form className='animate__animated animate__fadeIn' onSubmit={(e) => e.preventDefault()}>
        <div>
          <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Ajout d'un véhicule</h2>
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
        <div onClick={() => setToggleForm(false)} className='flex justify-end mt-10'>
          <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
            Enregistrer
          </button>
        </div>
      </form>
      ) 
      : 
      <fieldset className='animate__animated animate__fadeIn'>
        <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Ajouter un véhicule</h2>
        <div className="space-y-5">
          {userCars.map((car) => (
            <div className="relative flex items-start justify-between p-4 border-[1px] rounded-md border-gray-300" >
              <div className='flex'>
                <div className="flex h-6 items-center">
                  <input
                    id={car.immatriculation}
                    aria-describedby=""
                    name="car"
                    type="radio"
                    defaultChecked=""
                    className="h-4 w-4 border-gray-300 accent-black	 focus:ring-gray-200 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm leading-6 flex flex-col">
                  <label htmlFor="car_name" className="font-semibold text-[16px] text-gray-900">
                    {car.brand} {car.model}
                    <span id="description" className="font-semibold text-[16px] text-gray-500 m-2">
                      {car.immatriculation}
                    </span>
                  </label>
                  <span id="description" className="text-gray-500">
                  {car.car_type}, {car.registration_date}, {car.seats} places disponibles hors conducteur
                  </span>
                </div>
              </div>
              <div className="ml-3 text-sm leading-6 flex flex-col hover:text-[#B19145] duration-200">
                <button className='flex items-center'>
                  <p className='mr-2 text-[16px]'>Modifier</p>
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <div onClick={() => setToggleForm(true)} className="relative flex items-start justify-between p-4 border-[1px] rounded-md border-gray-300 hover:bg-gray-100 cursor-pointer duration-200">
              <div className='flex text-gray-600 justify-center items-center font-semibold'>
                <PlusIcon className="w-6 h-6 m-2" />
                Ajouter un véhicule
              </div>
          </div>
        </div>
      </fieldset>
      }
    </div>
  );
}

export default CarInformations
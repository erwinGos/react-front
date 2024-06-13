import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import MultipleSelectInput from '../inputs/MultipleSelectInput';
import { useDispatch, useSelector } from 'react-redux';
import { GetBrandList, GetClientCars, SetDefaultCar, GetBrandModels, UpdateClientCar, CreateClientCar } from "../../app/features/car/carSlice";


const initialForm = {
  id: "",
  driverId: "",
  brand: "",
  modele: "",
  matriculeNumber: "",
  type: "BREAK",
  inUse: false,
  color: "",
  nbPlace: "",
  year: "",
  trailerAvailable: false,
  trailerOver750: false,
  animalAvailable: false,
  childSeat: false,
  tmpr: false,
  co2Rate: 0,
  fuelType: "ESSENCE"
}

const selectOptions = [
  { id: 1, name: 'remorque Disponible', item: "trailerAvailable" },
  { id: 2, name: 'remorque Supérieure 750kg', item: "trailerOver750" },
  { id: 3, name: 'animaux Acceptés', item: "animalAvailable"},
  { id: 4, name: 'siège Enfant Disponible', item: "childSeat"},
  { id: 5, name: 'Climatisation', item : "tmpr" }
]

const CarInformations = ({userInformations, setUserInformations}) => {

  const dispatch = useDispatch();
  const carReducer = useSelector(state => state.car);
  const register = useSelector(state => state.register);
  const driver = useSelector(state => state.driver);
  const [toggleForm, setToggleForm] = useState(false);
  const [formContent, setFormContent] = useState(initialForm);
  
  useEffect(() => {
    dispatch(GetBrandList());
  }, [])
  
  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch(UpdateClientCar(formContent)).then((res) => {
      if(res.payload) {
        setToggleForm(false)
        dispatch(GetClientCars({page: 0, size :20}));
      }
    })
  };

  const handleCreate = (e) => {
    e.preventDefault()
    dispatch(CreateClientCar({...formContent, driverId: driver.user.id})).then((res) => {
      if(res.meta.requestStatus == "fulfilled") {
        setToggleForm(false)
        dispatch(GetClientCars({page: 0, size :20}));
      }
    })
  };
  
  return (
    <div className='py-14 animate__animated animate__fadeIn'>
      {toggleForm ? (
      <>
        <p className="text-right">
            <div className="flex justify-end items-center hover:text-[#d4ae54]">
                <ArrowLeftIcon className="w-5 h-5 text-[#B19145]" />
                <button onClick={() => setToggleForm(false)} className="duration-200 text-[#B19145] m-2">Retour</button>
            </div> 
        </p>
        <form className='animate__animated animate__fadeIn' onSubmit={(e) => {
          if(formContent.id) {
            handleUpdate(e);
          } else {
            handleCreate(e);
          }
        }}>
          <div>
            <h2 className="text-[24px] mb-6 font-semibold leading-7 text-gray-900">Ajout d'un véhicule</h2>
            <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
              <div>
                <input
                  type="text"
                  name="immatriculation"
                  id="immatriculation"
                  value={formContent.matriculeNumber}
                  onChange={(e) => setFormContent({...formContent, matriculeNumber: e.target.value})}
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
                  defaultValue={formContent.brand}
                  onChange={(e) => {
                    dispatch(GetBrandModels(e.target.value));
                    setFormContent({...formContent, brand: e.target.value})
                  }}
                  onLoad={(e) => dispatch(GetBrandModels(e.target.value))}
                >
                  {carReducer.brands.map((brand, key) => (
                    <option key={key}>{brand}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  id="car_type"
                  name="car_type"
                  className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  defaultValue={formContent.type}
                  value={formContent.type}
                  onChange={(e) => setFormContent({...formContent, type: e.target.value.toUpperCase()})}
                >
                  <option>Break</option>  
                  <option>SUV</option>
                  <option>Berline</option>
                  <option>Berline Compacte</option>
                </select>
              </div>
              <div>
                <select
                  id="car_model"
                  name="car_model"
                  className="block w-full outline-0	bg-gray-100 rounded-md border-none min-h-[55px] px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  defaultValue={formContent.modele}
                  value={formContent.modele}
                  onChange={(e) => setFormContent({...formContent, modele: e.target.value})}
                >
                  {carReducer.models.map((model, key) => (
                    <option key={key}>{model}</option>
                  ))}
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={formContent.year}
                  onChange={(e) => setFormContent({...formContent, year: e.target.value})}
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
                  defaultValue={formContent.color}
                  value={formContent.color}
                  onChange={(e) => setFormContent({...formContent, color: e.target.value})}
                >
                  <option>Couleur</option>
                  <option>Blanc</option>
                  <option>Noir</option>
                  <option>Gris</option>
                  <option>Bleu</option>
                  <option>Rouge</option>
                  <option>Jaune</option>
                  <option>Orange</option>
                  <option>Marron</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
              <div className='flex col-span-1 max-h-[55px]'>
                <input
                    type="number"
                    name="nbPlace"
                    id="nbPlace"
                    value={formContent.nbPlace}
                    onChange={(e) => setFormContent({...formContent, nbPlace: e.target.value})}
                    className="min-h-[55px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full outline-0	rounded-l-md border-none py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                    placeholder="Nombre de places (hors conducteur)"
                    autoComplete="off"
                />
                <div className='flex flex-col w-[50px] h-[55px]'>
                  <button onClick={(e) => {
                    e.preventDefault();
                    setFormContent({...formContent, nbPlace: (formContent.nbPlace + 1)})
                  }} className="p-1 flex items-center justify-center bg-gray-100 rounded-tr-md w-full shadow-sm ring-1 ring-inset ring-gray-300">
                    <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                  </button>
                  <button onClick={(e) => {
                    e.preventDefault();
                    if((formContent.nbPlace - 1) <= 0) {
                      return;
                    }
                    setFormContent({...formContent, nbPlace: (formContent.nbPlace - 1)})
                  }} className="p-1 flex items-center justify-center bg-gray-100 rounded-br-md w-full shadow-sm ring-1 ring-inset ring-gray-300">
                    <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className='flex col-span-2'>
                {/* <MultipleSelectInput formContent={formContent} setFormContent={setFormContent}/> */}
                {selectOptions.map((option) => (
                  <div className="relative flex items-center m-1 p-2 border-[1px] rounded-md border-gray-300 cursor-pointer">
                    <div className="flex h-6 items-center">
                      <input
                        id={option.item}
                        aria-describedby="offers-description"
                        name={option.item}
                        checked={formContent[option.item]}
                        onChange={(e) => setFormContent({...formContent, [option.item] : e.target.checked})}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6 ">
                      <label htmlFor={option.item} className="font-medium text-gray-900 select-none cursor-pointer">
                        {option.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-10'>
            <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
              Enregistrer
            </button>
          </div>
        </form>
      </>
      ) 
      : 
      <fieldset className='animate__animated animate__fadeIn'>
        <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">Ajouter un véhicule</h2>
        <p className='my-5 font-medium text-[15px] text-center md:text-left animate__animated animate__fadeInDown'>Le véhicule sélectionné sera votre véhicule par défault.</p>
        <div className="space-y-5">
          {carReducer.cars.map((car, key) => (
            <div key={key} className="relative flex items-start justify-between p-4 border-[1px] rounded-md border-gray-300" >
              <div className='flex'>
                <div className="flex h-6 items-center">
                  <input
                    onClick={() => dispatch(SetDefaultCar(car.id))}
                    id={car.matriculeNumber}
                    aria-describedby=""
                    name="car"
                    type="radio"
                    defaultChecked={car.inUse}
                    className="h-4 w-4 border-gray-300 accent-black	 focus:ring-gray-200 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm leading-6 flex flex-col">
                  <label htmlFor="car_name" className="font-semibold text-[16px] text-gray-900">
                    {car.brand} {car.modele}
                    <span id="description" className="font-semibold text-[16px] text-gray-500 m-2">
                      {car.matriculeNumber}
                    </span>
                  </label>
                  <span id="description" className="text-gray-500">
                  {car.type}, {car.year}, {car.nbPlace} places disponibles hors conducteur
                  </span>
                </div>
              </div>
              <div className="ml-3 text-sm leading-6 flex flex-col hover:text-[#B19145] duration-200">
                <button className='flex items-center' onClick={() => {
                  setFormContent(car);
                  setToggleForm(true);
                }}>
                  <p className='mr-2 text-[16px]'>Modifier</p>
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <div onClick={() => {
            setFormContent(initialForm);
            setToggleForm(true);
          }} className="relative flex items-start justify-between p-4 border-[1px] rounded-md border-gray-300 hover:bg-gray-100 cursor-pointer duration-200">
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
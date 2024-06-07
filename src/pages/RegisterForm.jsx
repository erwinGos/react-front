import React, { useEffect, useState } from 'react'
import RadioSelector from "../components/RadioSelector";
import MultipleSelectInput from '../components/inputs/MultipleSelectInput';
import { useDispatch, useSelector } from 'react-redux';
import PersonalInformations from "../components/registerForm/personalInformations";
import CarInformations from "../components/registerForm/CarInformations";


const RegisterForm = () => {
  const dispatch = useDispatch();
  const mailingList = useSelector(state => state.register.mailingList);
  const [userInformations, setUserInformations] = useState({});
  const [selectedWrapper, setSelectedWrapper] = useState(0);
  const [toggleForm, setToggleForm] = useState(false);
  const [addedCars, setAddedCars] = useState([]);

  const documentInformations = () => {
    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Carte d'identité
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="first_name"
                  id="first_name"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Prénom"
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Permis de conduire
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="first_name"
                  id="first_name"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Prénom"
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                professionnelle de conducteur de taxi
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="first_name"
                  id="first_name"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Prénom"
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 my-4'>
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Carte grise du véhicule
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="first_name"
                  id="first_name"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Prénom"
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Extrait de KBIS
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="first_name"
                  id="first_name"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="Prénom"
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                </div>
              </div>
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

  return (
    <div className='flex flex-col min-h-[95vh] w-auto md:px-[8rem] p-2'>
      <h2 className='mt-[100px] text-7xl text-center md:text-left font-medium m-1 animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].title}</h2>
      <p className='my-6 font-medium text-[20px] text-center md:text-left animate__animated animate__fadeInDown'>{mailingList[selectedWrapper].description}</p>
      {mailingList.length > 0 ? <RadioSelector setSelectedWrapper={setSelectedWrapper} mailingList={mailingList}/> : null}
      {selectedWrapper == 0 && userInformations ? <PersonalInformations Tab={mailingList[0]}/> : null}
      {selectedWrapper == 1 ? <CarInformations Tab={mailingList[1]} userInformations={userInformations} setUserInformations={setUserInformations}/> : null}
      {selectedWrapper == 2 ? documentInformations() : null}
    </div>
  )
}

export default RegisterForm;
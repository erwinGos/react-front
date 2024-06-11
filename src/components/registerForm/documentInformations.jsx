import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetRequiredDocuments, GetSentDocuments, SendDocuments } from '../../app/features/documents/documentSlice';
import { updateTab } from "../../app/features/registerTab/registerSlice";

const DocumentInformations = ({Tab}) => {

  const documents = useSelector(state => state.document);
  const register = useSelector(state => state.register);
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, {file: newFiles, type: e.target.id, description: null}]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    files.map(file => {
      dispatch(SendDocuments(file)).then(() => dispatch(GetSentDocuments()));
    })
  }


    return (
    <div className='py-14 animate__animated animate__fadeIn'>
      <form onSubmit={(e) => handleSend(e)}>
        <div>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <label htmlFor="CNI" className="block text-sm font-medium leading-6 text-gray-900">
                  Carte d'identité
              </label>
              <div className="relative rounded-md flex items-center">
                {documents.sentDocuments.includes("CNI") ?
                
                <div className='w-full py-3 px-3 h-[54px] bg-green-200 rounded-md border-[1px] border-green-400'>
                  <p className='text-medium text-green-600'>Document envoyé</p>
                </div> : 
                <>
                  <input
                    type="file"
                    name="CNI"
                    id="CNI"
                    className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                    placeholder="Carte d'identité"
                    autoComplete="off"
                    onChange={handleFileChange}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                </>
              }
              </div>
            </div>
            <div>
              <label htmlFor="DRIVING_LICENCE" className="block text-sm font-medium leading-6 text-gray-900">
                  Permis de conduire
              </label>
              <div className="relative rounded-md flex items-center">
                {documents.sentDocuments.includes("DRIVING_LICENCE") ?
                
                <div className='w-full py-3 px-3 h-[54px] bg-green-200 rounded-md border-[1px] border-green-400'>
                  <p className='text-medium text-green-600'>Document envoyé</p>
                </div> : 
                <>
                  <input
                    type="file"
                    name="DRIVING_LICENCE"
                    id="DRIVING_LICENCE"
                    className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                    placeholder="Permis de conduire"
                    autoComplete="off"
                    onChange={handleFileChange}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                </>
                }
              </div>
            </div>
            <div>
              <label htmlFor="TAXI_LICENCE" className="block text-sm font-medium leading-6 text-gray-900">
                License de taxi
              </label>
              <div className="relative rounded-md flex items-center">
                {documents.sentDocuments.includes("TAXI_LICENCE") ?
                
                <div className='w-full py-3 px-3 h-[54px] bg-green-200 rounded-md border-[1px] border-green-400'>
                  <p className='text-medium text-green-600'>Document envoyé</p>
                </div> : 
                <>
                  <input
                    type="file"
                    name="TAXI_LICENCE"
                    id="TAXI_LICENCE"
                    className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                    placeholder="License de taxi"
                    autoComplete="off"
                    onChange={handleFileChange}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                </>
                }
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Extrait de KBIS
              </label>
              <div className="relative rounded-md flex items-center">
                {documents.sentDocuments.includes("KBIS") ?
                
                <div className='w-full py-3 px-3 h-[54px] bg-green-200 rounded-md border-[1px] border-green-400'>
                  <p className='text-medium text-green-600'>Document envoyé</p>
                </div> : 
                <>
                  <input
                    type="file"
                    name="KBIS"
                    id="KBIS"
                    className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                    placeholder="Kbis"
                    autoComplete="off"
                    onChange={handleFileChange}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                </>
                }
              </div>
            </div>
          </div>
          {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Carte grise du véhicule
              </label>
              <div className="relative rounded-md flex items-center">
                <input
                  type="file"
                  name="CAR_REGISTRATION_CARD"
                  id="CAR_REGISTRATION_CARD"
                  className="block w-full outline-0	rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                  placeholder="CAR_REGISTRATION_CARD"
                  autoComplete="off"
                  onChange={handleFileChange}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
                </div>
              </div>
            </div> */}
        </div>
        <div className='flex justify-end mt-10'>
          <button className="text-[14px] rounded-md bg-[#000000] px-6 py-2 w-[153px] h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default DocumentInformations
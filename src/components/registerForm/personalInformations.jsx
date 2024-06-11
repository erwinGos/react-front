import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { patchPersonnalInformations } from '../../app/features/driver/driverSlice';
import { GetCurrentInfos } from '../../app/features/driver/driverSlice';
import { updateTab } from '../../app/features/registerTab/registerSlice';

const PersonalInformations = ({reloadTab, Tab}) => {
    const dispatch = useDispatch();
    
    const register = useSelector(state => state.register);
    const [payload, setPayload] = useState({});

    const handleSend = (e) => {
      e.preventDefault()
      dispatch(patchPersonnalInformations(payload)).then((res) => {
        if(res.meta.requestStatus == "fulfilled") {
          if(payload.firstName.length >= 1 && 
            payload.lastName.length >= 1 && 
            payload.birthDate.length >= 1 && 
            payload.adress.length >= 1 &&
            payload.city.length >= 1 &&
            payload.zipCode.length >= 1 &&
            payload.siretNumber.length >= 1
          ) {
            let deepCopyMailingList = JSON.parse(JSON.stringify(register.mailingList));
            let deepCopyTab = JSON.parse(JSON.stringify(Tab));
            let tabIndex = deepCopyMailingList.findIndex(tab => tab.id == 1);
            let copyTab = { ...deepCopyTab, completed: true };
            deepCopyMailingList.splice(tabIndex, 1, copyTab);
            dispatch(updateTab(deepCopyMailingList));
          } else {
            let deepCopyMailingList = JSON.parse(JSON.stringify(register.mailingList));
            let deepCopyTab = JSON.parse(JSON.stringify(Tab));
            let tabIndex = deepCopyMailingList.findIndex(tab => tab.id == 1);
            let copyTab = { ...deepCopyTab, completed: false };
            deepCopyMailingList.splice(tabIndex, 1, copyTab);
            dispatch(updateTab(deepCopyMailingList));
          }
        }
      })
    };

    useEffect(() => {
      setPayload({
        firstName: payload.firstName ?? "",
        lastName: payload.lastName ?? "",
        birthDate: payload.birthDate ?? "",
        adress: payload.adress ?? "",
        city: payload.city ?? "",
        zipCode: payload.zipCode ?? "",
        campagnyName: payload.campagnyName ?? "",
        siretNumber: payload.siretNumber ?? ""
      });
      dispatch(GetCurrentInfos())

      
    }, [])

    return (
    payload != null ?
    <div className='py-14 animate__animated animate__fadeIn'>
      <form onSubmit={(e) => handleSend(e)}>
        <div>
          <h2 className="text-[24px] my-6 font-semibold leading-7 text-gray-900">{Tab.title}</h2>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 my-4'>
            <div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={payload.lastName ?? ""}
                onChange={(e) => setPayload({...payload, lastName: e.target.value})}
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
                value={payload.firstName ?? ""}
                onChange={(e) => setPayload({...payload, firstName: e.target.value})}
                className="block w-full outline-0	rounded-md border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                placeholder="Prénom"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="date"
                name="birth_date"
                id="birth_date"
                value={payload.birthDate ?? ""}
                onChange={(e) => setPayload({...payload, birthDate: e.target.value})}
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
                value={payload.siretNumber ?? ""}
                onChange={(e) => setPayload({...payload, siretNumber: e.target.value})}
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
                value={payload.adress ?? ""}
                onChange={(e) => setPayload({...payload, adress: e.target.value})}
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
                name="city"
                id="city"
                value={payload.city ?? ""}
                onChange={(e) => setPayload({...payload, city: e.target.value})}
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
                value={payload.zipCode ?? ""}
                onChange={(e) => setPayload({...payload, zipCode: e.target.value})}
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
    </div> : null
  );
  }

export default PersonalInformations
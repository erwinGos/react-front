import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const RadioSelector = ({setSelectedWrapper, mailingList}) => {

  const changeSelectedWrapper = (selectedItem) => {
    setSelectedWrapper(selectedItem.id - 1);
    setSelectedMailingLists(selectedItem);
  };

  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingList[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={changeSelectedWrapper}>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {mailingList.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ active }) =>
              classNames(
                active ? 'border-gray-600' : 'border-gray-300',
                'relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none',
                mailingList.completed ? 'bg-[#E0FFF0]' : 'bg-white'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="text-md font-semibold text-gray-900 gap-1 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={mailingList.icon} />
                      </svg>
                      {mailingList.title}
                    </RadioGroup.Label>
                    {!mailingList.completed ? 
                      <RadioGroup.Description as="span" className="mt-6 text-sm font-semibold text-gray-900 gap-1 flex items-center">
                        <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" /> Manquant
                      </RadioGroup.Description> :
                      <RadioGroup.Description as="span" className="mt-6 text-sm font-semibold text-gray-900 gap-1 flex items-center">
                        <CheckCircleIcon className="h-6 w-6 text-green-500" /> Complet
                      </RadioGroup.Description>
                    }
                  </span>
                </span>
                <span
                  className={classNames(
                    active ? 'border' : 'border-[3px] duration-500',
                    checked ? (mailingList.completed ? 'border-green-500' : 'border-[#B19145]') : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default RadioSelector;

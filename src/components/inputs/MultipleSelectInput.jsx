import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MultipleSelectInput = () => {
  const setMultipleSelected = (freshSelected) => {
    const editedSelect = selected;
    const checkIfExists = editedSelect.find((item) => item == freshSelected)
    if(!checkIfExists) {
      editedSelect.push(freshSelected)
    }
    setSelected(editedSelect);
  }

  const [selected, setSelected] = useState([])

  return (
    <Listbox value={selected} onChange={(freshSelected) => setMultipleSelected(freshSelected)}>
      {({ open }) => (
        <>
          <div className="relative min-h-[55px] w-full">
            <Listbox.Button className="min-h-[55px] relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4ad52] sm:text-sm sm:leading-6">
              <div className='flex items-center'>
                {selected.map((person, key) => (
                  <div key={key} className='flex mr-1'>
                    <span className="flex items-center truncate p-2 bg-[#d4ad52] rounded-md text-white">
                      {person.name}
                      <XMarkIcon
                        className="h-5 w-5 ml-1 cursor-pointer"
                        aria-hidden="true"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelected(selected.filter((p) => p !== person))
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-[#d4ad52] text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-[#d4ad52]',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default MultipleSelectInput;
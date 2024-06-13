import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ImperialMainLogo from "../../assets/images/imperial_logo_black.png";
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { checkTokenValidity, logoutUser } from '../../app/features/auth/authSlice';

const navigation = [
  { name: 'Devenir prestataire', href: '#' },
  { name: 'Entreprise', href: '#' },
  { name: 'Assistance', href: '#' },
  { name: 'A propos', href: '#' },
  { name: 'Actualités', href: '#' }
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogoutEvent = () => {
    dispatch(logoutUser());
    dispatch(checkTokenValidity());
    navigate('/');
  }

  return (
    <header className="bg-[#FFFFFF] inset-x-0 top-0 z-50 border-b-[#DEDFE3] border-b-[1px]">
        <nav className="flex items-center justify-between p-[1.065rem] lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-9 w-auto"
                src={ImperialMainLogo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-[16px] leading-6 text-gray-700 navlinks hover-grow-border">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {auth.isAuth ?
            <button onClick={() => handleLogoutEvent()} className="flex justify-center items-center text-[14px] rounded-2xl bg-[#141529] p-2 w-[130px] h-[37px] text-sm text-center text-white shadow-sm hover:bg-[#25274d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
              Deconnexion <ArrowLeftStartOnRectangleIcon className="w-5 h-5 text-white ml-1"/>
            </button>
            : 
            <Link to="/" className="text-[14px] rounded-lg	 bg-[#B19145] px-6 py-2 w-[153px] h-[35px] text-sm text-center text-white shadow-sm hover:bg-[#805B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
                    Rejoignez-Nous
            </Link>}
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={ImperialMainLogo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                {auth.isAuth ?
                  <button onClick={() => handleLogoutEvent()} className="flex justify-center items-center text-[14px] rounded-2xl bg-[#141529] p-2 w-[130px] h-[37px] text-sm text-center text-white shadow-sm hover:bg-[#25274d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
                    Deconnexion <ArrowLeftStartOnRectangleIcon className="w-5 h-5 text-white ml-1"/>
                  </button>
                  : 
                  <Link to="/" className="text-[14px] rounded-lg	 bg-[#B19145] px-6 py-2 w-[153px] h-[35px] text-sm text-center text-white shadow-sm hover:bg-[#805B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200">
                          Rejoignez-Nous
                  </Link>}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}


export default Navbar
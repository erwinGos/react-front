import { Link } from "react-router-dom";
import authenticationBackground from "../../assets/images/authentication_bg.jpg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SignInMethod } from "../../app/features/auth/authSlice";


const Signin = () => {

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    const handleLoginEvent = (e) => {
        e.preventDefault();
    
        dispatch(SignInMethod(credentials))
      }
    
    return (
        <div className="flex min-h-[92vh] flex-1">
            <div className="relative hidden flex-1 lg:block w-1/2">
                <img
                className="absolute inset-0 h-full object-cover"
                src={authenticationBackground}
                alt=""
                />
            </div>
            <div className="w-1/2 flex flex-1 flex-col justify-center animate__animated animate__fadeIn">
                <div className="mx-auto w-full lg:max-w-[60%] max-w-sm mb-10">
                    <p className="text-right">Vous n'avez pas de compte ? <Link to="/register" className="hover:underline duration-200 text-[#B19145]"> Inscrivez-vous !</Link></p>
                </div>
                <div className="mx-auto w-full lg:max-w-[60%] max-w-sm p-6 border-[1px] border-gray-200 rounded-md">
                    <div>
                        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Connectez-vous ! 
                        </h2>
                    </div>
                    <div className="mt-10">
                        <div>
                        <form onSubmit={(e) => handleLoginEvent(e)} className="space-y-3">
                            <div>
                                <label htmlFor="email" className="block text-sm leading-6 text-gray-900 font-semibold">
                                    Adresse mail ou numéro de tél.
                                </label>
                                <div>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johndoe@imperial.com"
                                    required
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                                    className="block w-full outline-0 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
        
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    required
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                    className="block w-full outline-0 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                                    />
                                    <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                                        {showPassword ? <EyeIcon className="h-5 w-5 hover:text-[#B19145] text-gray-700 duration-100" aria-hidden="true" /> : <EyeSlashIcon className="h-5 w-5 hover:text-[#B19145] text-gray-700 duration-100" aria-hidden="true" />}
                                    </div>
                                </div>
                            </div>
        
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                onChange={(e) => setCredentials({...credentials, rememberMe: e.target.checked})}
                                className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600 accent-black"
                                />
                                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                                Je confirme avoir lu et compris les termes et conditions 
                                </label>
                            </div>
                            </div>
        
                            <div>
                            <button
                                type="submit"
                                className="text-[14px] rounded-md bg-[#1D1F39] px-6 py-2 w-full h-[45px] text-sm text-center text-white shadow-sm hover:bg-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200"
                            >
                                S'inscrire
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  

export default Signin;
import { Link } from "react-router-dom";
import authenticationBackground from "../../assets/images/authentication_bg.jpg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (
      <>
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
                    <p className="text-right">Vous avez déjà un compte ? <Link to="/login" className="hover:underline duration-200 text-[#B19145]"> Connectez-vous !</Link></p>
                </div>
                <div className="mx-auto w-full lg:max-w-[60%] max-w-sm p-6 border-[1px] border-gray-200 rounded-md">
                    <div>
                        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Rejoignez-nous ! 
                        </h2>
                    </div>
                    <div className="mt-10">
                        <div>
                        <form onSubmit={(e) => e.preventDefault(e)} className="space-y-3">
                            <div>
                                <label htmlFor="email" className="block text-sm leading-6 text-gray-900 font-semibold">
                                    Adresse mail
                                </label>
                                <div>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johndoe@imperial.com"
                                    required
                                    className="block w-full outline-0 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone_number" className="block text-sm leading-6 text-gray-900 font-semibold">
                                    Numéro de tél
                                </label>
                                <div>
                                    <input
                                    id="phone_number"
                                    name="phone_number"
                                    type="text"
                                    placeholder="+33606060606"
                                    required
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
                                    className="block w-full outline-0 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] sm:text-sm sm:leading-6"
                                    />
                                    <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                                        {showPassword ? <EyeIcon className="h-5 w-5 hover:text-[#B19145] text-gray-700 duration-100" aria-hidden="true" /> : <EyeSlashIcon className="h-5 w-5 hover:text-[#B19145] text-gray-700 duration-100" aria-hidden="true" />}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Retapez le mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                    id="password"
                                    name="password_repeat"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    required
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
        
                        {/* <div className="mt-10">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>
        
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                                >
                                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                                    <path
                                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                    fill="#EA4335"
                                    />
                                    <path
                                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                    fill="#4285F4"
                                    />
                                    <path
                                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                    fill="#FBBC05"
                                    />
                                    <path
                                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                    fill="#34A853"
                                    />
                                </svg>
                                <span className="text-sm font-semibold leading-6">Google</span>
                                </a>
            
                                <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                                >
                                <svg className="h-5 w-5 fill-[#24292F]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm font-semibold leading-6">GitHub</span>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  

export default Signup;
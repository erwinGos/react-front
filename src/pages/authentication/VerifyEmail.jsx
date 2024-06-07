import { Link, useNavigate } from "react-router-dom";
import authenticationBackground from "../../assets/images/authentication_bg.jpg";
import { ArrowLeftIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PostEmailValidation } from "../../app/features/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState("");

    
    const handleFormEvent = (e) => {
        e.preventDefault();
    
        dispatch(PostEmailValidation(verificationCode)).then((res) => {
            if(res.payload.status == 404) {
                toast.warn(res.payload.detail);
                setVerificationCode("");
                return;
            }

            if(res.payload.status) {
                toast.warn(res.payload.detail);
                setVerificationCode("");
                return;
            }
            toast.success("Votre compte a été verifié.");
            setTimeout(() => navigate("/"), 2000);
            return;
        })
    }

    return (
        <div className="flex min-h-[92vh] flex-1">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="relative hidden flex-1 lg:block md:w-1/2">
                <img
                className="absolute inset-0 h-full object-cover"
                src={authenticationBackground}
                alt=""
                />
            </div>
            <div className="w-1/2 flex flex-1 flex-col justify-center animate__animated animate__fadeIn">
            <div className="mx-auto w-full lg:max-w-[60%] max-w-sm mb-3">
                <p className="text-right">
                    <div className="flex justify-end items-center hover:text-[#d4ae54]">
                        <ArrowLeftIcon className="w-5 h-5 text-[#B19145]" />
                        <Link to="/" className="duration-200 text-[#B19145] m-2"> Retour</Link>
                    </div>
                </p>
            </div>
            <div className="mx-auto w-full lg:max-w-[60%] max-w-sm p-6 border-[1px] border-gray-200 rounded-md text-center">
                <div>
                    <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Nous venons de vous envoyer un mail
                    </h2>
                    <p>Entrez le code de sécurité reçu par mail</p>
                </div>
                <form onSubmit={(e) => handleFormEvent(e) } className="mt-5 flex flex-col justify-center items-center">
                    <input
                        id="code"
                        name="code"
                        type="text"
                        placeholder="5 5 5 5 5"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                        className="block text-center outline-0 rounded-md border-0 py-3 px-2 h-[60px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B19145] md:text-md sm:leading-6"
                    />
                    <button
                        type="submit"
                        className="bg-[#1D1F39] hover:bg-[#141414] text-white m-2 text-[14px] rounded-md px-6 py-2 md:w-1/3 h-[45px] text-sm text-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200"
                    >
                        Valider
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
  }
  

export default VerifyEmail;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';
import Footer from './components/bars/Footer';
import RegisterForm from './pages/RegisterForm';
import Signup from './pages/authentication/Signup';
import Signin from './pages/authentication/Signin';
import ProtectedAuth from './components/middlewares/protectedAuth';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { checkTokenValidity } from './app/features/auth/authSlice';
import ProtectedRoute from './components/middlewares/protectedRoute';
import VerifyEmail from './pages/authentication/VerifyEmail';
import { GetCurrentInfos } from './app/features/driver/driverSlice';
import { GetRequiredDocuments, GetSentDocuments } from "./app/features/documents/documentSlice";
import { updateTab } from "./app/features/registerTab/registerSlice";
import { GetClientCars } from './app/features/car/carSlice';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const mailingList = useSelector(state => state.register.mailingList);

  useEffect(() => {
    dispatch(checkTokenValidity());
    dispatch(GetCurrentInfos());
    if(auth.isAuth == true) {
      dispatch(GetRequiredDocuments()).then((RequiredDocuments) => {
        dispatch(GetSentDocuments()).then((SentDocuments) => {
          const requiredFiltered = RequiredDocuments.payload.filter(doc => doc != "CAR_REGISTRATION_CARD");
          let sentDocs = [];
          SentDocuments.payload.forEach(doc => sentDocs.push(doc.type));
          console.log(requiredFiltered)
          console.log(SentDocuments)
          let deepCopyMailingList = [...mailingList];
          let deepCopyTab = JSON.parse(JSON.stringify(mailingList[2]));
          let tabIndex = deepCopyMailingList.findIndex(tab => tab.id == 3);
          let copyTab = { ...deepCopyTab, completed: true };
          if(JSON.stringify(requiredFiltered) == JSON.stringify(SentDocuments)) {
            deepCopyMailingList.splice(tabIndex, 1, copyTab);
          }
          dispatch(GetClientCars({page: 0, size :20})).then((res) => {
            if(res.payload.length > 0) {
              let CarCopyTab = JSON.parse(JSON.stringify(mailingList[1]));
              let CarTabIndex = deepCopyMailingList.findIndex(tab => tab.id == 2);
              let copyCarTab = { ...CarCopyTab, completed: true };
              deepCopyMailingList.splice(CarTabIndex, 1, copyCarTab);
            }
          });
          
          dispatch(GetCurrentInfos()).then(res => {
            if(res.payload.firstName != null ||
              res.payload.lastName != null ||
              res.payload.birthDate != null ||
              res.payload.adress != null ||
              res.payload.city != null ||
              res.payload.zipCode != null ||
              res.payload.siretNumber != null
            ) {
              if(res.payload.firstName.length >= 1 && 
                res.payload.lastName.length >= 1 && 
                res.payload.birthDate.length >= 1 && 
                res.payload.adress.length >= 1 &&
                res.payload.city.length >= 1 &&
                res.payload.zipCode.length >= 1 &&
                res.payload.siretNumber.length >= 1
              ) {
                let deepCopyTab = JSON.parse(JSON.stringify(mailingList[0]));
                let tabIndex = deepCopyMailingList.findIndex(tab => tab.id == 1);
                let copyTab = { ...deepCopyTab, completed: true };
                deepCopyMailingList.splice(tabIndex, 1, copyTab);
                dispatch(updateTab(deepCopyMailingList));
              } else {
                let deepCopyTab = JSON.parse(JSON.stringify(mailingList[0]));
                let tabIndex = deepCopyMailingList.findIndex(tab => tab.id == 1);
                let copyTab = { ...deepCopyTab, completed: false };
                deepCopyMailingList.splice(tabIndex, 1, copyTab);
                dispatch(updateTab(deepCopyMailingList));
              }
            }
          });
          if(JSON.stringify(sentDocs) == JSON.stringify(requiredFiltered)) {
            deepCopyMailingList.splice(tabIndex, 1, copyTab);
          }
        });
      });
    }
  },[auth])

  return (
    auth.isAuth != null ? 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<ProtectedAuth><Signup/></ProtectedAuth>} />
        <Route path='/' element={<ProtectedAuth><Signin/></ProtectedAuth>} />
        <Route path='/otp' element={<ProtectedAuth><VerifyEmail/></ProtectedAuth>} />
        <Route path='/home' element={<ProtectedRoute><RegisterForm/></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </BrowserRouter> : null
  );
}

export default App;

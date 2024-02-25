import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import Explore from './Components/Explore/Explore.jsx';
import HrAssistant from './Components/HRAssistant/HRAssistant.jsx';
import EmployeeSignUp from './Components/EmployeeSignUp/EmployeeSignUp.jsx';
import Users from './Components/Users/Users.jsx';
import Candidates from './Components/Candidates/Candidates.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import UnlockedCandidate from './Components/UnlockedCandidate/UnlockedCandidate.jsx';
import CandidateManar from './Components/CandidateManar/CandidateManar.jsx';
import SubmitApplication from './Components/SubmitApplication/SubmitApplication.jsx';
import Saved from './Components/Saved/Saved.jsx';
import CompleteApplication from './Components/CompleteApplication/CompleteApplication.jsx';
import Application from './Components/Application/Application.jsx';
import Cv from './Components/CV/CV.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Help from './Components/Help/Help.jsx';
import Companies from './Components/Companies/Companies.jsx';
import Alqemam from './Components/Alqemam/Alqemam.jsx';
import JobsinEgypt from './Components/JobsinEgypt/JobsinEgypt.jsx';



let routers = createBrowserRouter([
    {path: "signup",element: <SignUp />},
    {path: "employee-sign-up",element: <EmployeeSignUp />},
    {path: "signin",element: <SignIn />},
    {path: "/", element: <Layout />,children: [
        {path: "/",element: <HomePage />},
        {path: "/explore",element: <Explore />},
        {path: "/hr-administrative-assistant",element: <HrAssistant />},
        {path: "/users",element: <Users />},
        {path: "/candidates",element: <Candidates />},
        {path: "/dashboard",element: <Dashboard />},
        {path: "/unlocked-candidate",element: <UnlockedCandidate />},
        {path: "/candidate-manar",element: <CandidateManar />},
        {path: "/submit-application",element: <SubmitApplication />},
        {path: "/saved",element: <Saved />},
        {path: "/complete-application",element: <CompleteApplication />},
        {path: "/application",element: <Application />},
        {path: "/cv",element: <Cv />},
        {path: "/help",element: <Help />},
        {path: "/companies",element: <Companies />},
        {path: "/alqemam",element: <Alqemam />},
        {path: "/jobs-in-egypt",element: <JobsinEgypt />},
        
      ]
    }
])
export default function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}



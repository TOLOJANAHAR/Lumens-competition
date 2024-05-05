import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import {Formation} from "./pages/Formation.jsx";
import {Register} from "./pages/Register.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import ChooseType from "./pages/ChooseType.jsx";
import Signinpage from "./pages/Signinpage.jsx";
import AttackLV1 from "./pages/AttackLV1.jsx";
import AttackLV2 from "./pages/AttackLV2.jsx";
import AttackLV3 from "./pages/AttackLV3.jsx";
import DefenseLV1 from "./pages/DefenseLV1.jsx";
import DefenseLV2 from "./pages/DefenseLV2.jsx";
import DefenseLV3 from "./pages/DefenseLV3.jsx";


const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false
})


const router = createBrowserRouter([
  {
    path:"/signin",
    element:<Signinpage/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/formation',
    element: <RequireAuth fallbackPath={'/signin'}><Formation/></RequireAuth>
  },

  {
    path:"/choosetype",
    element:<RequireAuth fallbackPath={'/signin'}><ChooseType/></RequireAuth>
  },

    // ATTACK LEVELS
  {
    path:'/attack-lv1',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV1/></RequireAuth>
  },
  {
    path:'/attack-lv2',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV2/></RequireAuth>
  },
  {
    path:'/attack-lv3',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV3/></RequireAuth>
  },

    // DEFENSE LEVEL
  {
    path:'/defense-lv1',
    element:<RequireAuth fallbackPath={'/signin'}><DefenseLV1/></RequireAuth>
  },
  {
    path:'/defense-lv2',
    element:<RequireAuth fallbackPath={'/signin'}><DefenseLV2/></RequireAuth>
  },
  {
    path:'/defense-lv3',
    element:<RequireAuth fallbackPath={'/signin'}><DefenseLV3/></RequireAuth>
  },

    // SUPPORT LEVEL

  // {
  //   path:'/support-lv1',
  //   element:<SupportLV1/>
  // },
  // {
  //   path:'/support-lv2',
  //   element:<SupportLV2/>
  // },
  // {
  //   path:'/support-lv3',
  //   element:<SupportLV3/>
  // },

  // {
  //   path:'/certificat',
  //   element:<Certificat/>
  // },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)

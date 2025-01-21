import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";


export default function App({ Component, pageProps }) {
  let [login, Setlogin] = useState()
  let [userdetails, Setuserdetails] = useState()
  return
  <>
  <Navbar/>
  <Component {...pageProps} />;
  </>
}

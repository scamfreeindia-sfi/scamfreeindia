"use client"
import Header from "./Header"
import Image from "next/image"
import Main from "./Main"
import Footer from "./Footer"


export default function Home() {


  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">

      <Header />

      <Main />

      <Footer />

    </div>
  )
}
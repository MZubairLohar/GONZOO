"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { WalletConnect } from "@web3-react/walletconnect";
("@web3-react/walletconnect");
const ethers = require("ethers");

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Model Demo",
      infuraId: "https://rpc.testnet.fantom.network",
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      rpc: {
        4002: "https://rpc.testnet.fantom.network", // Chain ID for Fantom Testnet
      },
      network: "fantom testnet", // Optional
      qrcode: true, // Enable QR code for mobile wallets
    },
  },
};

let theme = {
  background: "#202020", // Modal background color
  main: "#ffffff", // Main text color
  secondary: "#a0a0a0", // Secondary text color
  border: "1px solid #ffffff", // Border style for modal
  hover: "#f0f0f0", // Hover state color
};



export default function Trade() {
  
  const [web3Provider, setWeb3Provider] = useState(null);

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        theme,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      // console.log(web3modalProvider);
      if (web3modalProvider) {
        setWeb3Provider(web3modalProvider);
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <section>
     <nav className="bg-white lightbg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200  drop-shadow-xl lightborder-gray-600 font-custom">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" legacyBehavior>
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
              className="h-12"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap lighttext-white tracking-wider text-[#026c9e]">
              Great Gonzo
            </span>
          </a>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            // onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lighttext-gray-400 lighthover:bg-gray-700 lightfocus:ring-gray-600"
            aria-controls="navbar-sticky"
            // aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
        //  className={`items-center justify-between 
        //  ${isOpen ? "flex" : "hidden" }
        //        w-full md:flex md:w-auto md:order-1`}

        //   id="navbar-sticky"
        // >
        className={`items-center justify-between 
        
               w-full md:flex md:w-auto md:order-1`}

          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium tracking-wider border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white lightbg-gray-800 md:lightbg-gray-900 lightborder-gray-700">
            <li>
              <Link href="/" legacyBehavior>
                <a
                  className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <ScrollLink
                to="sectionTwo" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  About
                </p>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="sectionThree" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  How to Buy
                </p>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Tokenomics" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  Tokenomics
                </p>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="roadmap" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-100} // Adjust this offset based on your layout
                className=""
              >
                <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  Road Map
                </p>
              </ScrollLink>
            </li>
            <li>
              <Link href="/trade" legacyBehavior>
                <a className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700">
                  {web3Provider == null ? (
                    <button className="" onClick={connectWallet}>
                    Connect Wallet
                    </button>
                  ) : (
                    <div>
                      <p>Connected</p>
                    </div>
                  )}
                </a>
             
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      {/* <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a
              target="_blank"
              href="https://www.material-tailwind.com/docs/html/card"
              className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            >
              Buy Your own <b>Gonzo Token</b>.
            </a>
          </div>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20 z-10 absolute">
              <h3 className="block text-3xl antialiased font-semibold leading-snug tracking-wider text-[#0079ac] font-custom2 hover:font-custom mb-14">
                YOUR AMOUNT
              </h3>
            </div>
            <Image
              src={gonzoToken}
              className="z-20 relative -mt-20 ml-32 mr-auto hover:scale-110"
              width={140}
              height={140}
              alt=""
            />
            <p className="text-center font-custom  text-[#0079ac]">
              <span>$Gonzo</span>
            </p>

            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  type="number"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  $USDT
                </label>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-7xl"> Coming Soon</h1>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
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
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
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
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lighttext-gray-400 lighthover:bg-gray-700 lightfocus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
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
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
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
                      Buy
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
  );
}

// "use client";

// import { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";
// import {
//   ConnectButton,
//   createWallet,
// } from "thirdweb/react"; // Ensure thirdweb is correctly imported

// import client from "../lib/client"; // Ensure client is configured correctly

// // Initialize the wallets
// const wallets = [
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
//   createWallet("io.rabby"),
//   createWallet("io.zerion.wallet"),
//   createWallet("com.binance"),
//   createWallet("com.trustwallet.app"),
//   createWallet("com.safepal"),
//   createWallet("com.kraken"),
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white lightbg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 drop-shadow-xl lightborder-gray-600 font-custom">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Link href="/" legacyBehavior>
//           <a className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img
//               src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
//               className="h-12"
//               alt="Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap lighttext-white tracking-wider text-[#026c9e]">
//               Great Gonzo
//             </span>
//           </a>
//         </Link>

//         {/* Wallet Connect Button */}
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <ConnectButton
//             client={client}
//             wallets={wallets}
//             theme={"light"}
//             connectButton={{ label: "Connect Wallet" }}
//             connectModal={{
//               size: "compact",
//               title: "Connect Wallet",
//               titleIcon:
//                 "https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png",
//               showThirdwebBranding: false,
//             }}
//             accountAbstraction={{
//               sponsorGas: true,
//             }}
//           />

//           {/* Mobile Menu Toggle Button */}
//           <button
//             onClick={toggleNavbar}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//             aria-controls="navbar-sticky"
//             aria-expanded={isOpen ? "true" : "false"}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navbar Links */}
//         <div
//           className={`items-center justify-between ${
//             isOpen ? "flex" : "hidden"
//           } w-full md:flex md:w-auto md:order-1`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium tracking-wider border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white lightbg-gray-800 md:lightbg-gray-900 lightborder-gray-700">
//             <li>
//               <Link href="/" legacyBehavior>
//                 <a
//                   className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 md:lighthover:text-[#0079ac] lighttext-white lighthover:bg-gray-700 lighthover:text-white md:lighthover:bg-transparent lightborder-gray-700"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <ScrollLink
//                 to="sectionTwo"
//                 smooth={true}
//                 duration={600}
//                 offset={-100}
//               >
//                 <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 lighttext-white lighthover:bg-gray-700 lighthover:text-white">
//                   About
//                 </p>
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="sectionThree"
//                 smooth={true}
//                 duration={600}
//                 offset={-100}
//               >
//                 <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 lighttext-white lighthover:bg-gray-700 lighthover:text-white">
//                   How to Buy
//                 </p>
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="Tokenomics"
//                 smooth={true}
//                 duration={600}
//                 offset={-100}
//               >
//                 <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 lighttext-white lighthover:bg-gray-700 lighthover:text-white">
//                   Tokenomics
//                 </p>
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="roadmap"
//                 smooth={true}
//                 duration={600}
//                 offset={-100}
//               >
//                 <p className="block py-2 px-3 cursor-pointer text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 lighttext-white lighthover:bg-gray-700 lighthover:text-white">
//                   Road Map
//                 </p>
//               </ScrollLink>
//             </li>
//             <li>
//               <Link href="/trade" legacyBehavior>
//                 <a className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0079ac] md:p-0 lighttext-white lighthover:bg-gray-700 lighthover:text-white">
//                   Buy
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

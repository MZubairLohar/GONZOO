// import gonzoToken from "../images/gonzoToken.png"
export default function Third() {
    return (
      <div
        id="sectionThree"
        className="grid bg-[#6c83d6] place-items-center font-custom tracking-widest -mb-52"
      >
        <div className=" mt-20 text-7xl text-center text-white tracking-wide">How to Buy!</div>
        <div className=" grid grid-rows-4 area place-content-center my-10 items-center">
          {/* Creat wallet */}
          <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://img.freepik.com/free-vector/realistic-money-template_1284-14310.jpg?t=st=1727180055~exp=1727183655~hmac=0fe73825784d66b0452aa8f28a006de2fd8022f726d268542d97926d7c05dfba&w=996"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
                  Create Wallet
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-[#919ac9] hover:underline"
                >
                  Incredible To connect with DApp
                </a>
                <p className="mt-2 font-sans text-black">
                  Download metamask or your wallet of choice from the app store or
                  google play store for free. Desktop users, download the google
                  chrome extension by going to metamask.io.
                </p>
              </div>
            </div>
          </div>
          {/* Get Some ETH */}
          <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48 bg-contain"
                  src="https://img.freepik.com/free-photo/gold-coin-tenge-kazakhstan-currency-money-icon-sign-symbol-business-financial-exchange-3d-background-illustration_56104-1983.jpg?t=st=1727180832~exp=1727184432~hmac=41def929b07bcbde32643b6e7195488849c2ce8a9b045df171bb592ee8c5f74c&w=1480"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
                  Get Some ETH
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-[#919ac9] hover:underline"
                >
                  Have some Eth to pay gas fee
                </a>
                <p className="mt-2 font-sans text-black">
                  You must have ETH & some Eth in your wallet to switch to
                  $Gonzo. If you don’t have any ETH & ETH, you can buy directly
                  on metamask, transfer from another wallet, or buy on another
                  exchange and send it to your wallet.
                </p>
              </div>
            </div>
          </div>
          {/* Go To Buy Page */}
          <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://img.freepik.com/free-vector/wallet-with-bitcoin-currency-economy-shield_24877-56127.jpg?t=st=1727180749~exp=1727184349~hmac=6acc36487cb31a438f0b34502275cc49198f149275aab80b608d9a06a8e57818&w=996"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
                  Swtich ETH to Gonzo
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-[#919ac9] hover:underline"
                >
                  Incredible Buy with ETH in Fixed Rates
                </a>
                <p className="mt-2 font-sans text-black">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
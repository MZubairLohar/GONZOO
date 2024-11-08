import React from "react";

export default function bonus() {
  return (
    <div className="grid lg:mt-20 border-t-4 bg-[#6c83d6] border-double border-black place-items-center font-custom tracking-widest">
      <div className=" mt-20 text-7xl text-white">Bonuses & Referrals</div>
      <p className="text-white" >Ready for Whales and influencers!</p>
      <div className="m-4 p-20 mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-5xl">
          <div className="md:flex">
            <div className="p-8 place-items-center">
              <div className="uppercase tracking-wider text-3xl text-black text-center font-semibold font-custom2">
                    Volume - Bonus Gonzo
              </div>
              <p className="mt-2 font-sans text-black">
                $500~$1,500 Invesment - Bonus 3% Gonzo
              </p>
              <p className="mt-2 font-sans text-black">
                $1,501~$3000 Invesment - Bonus 5% Gonzo
              </p>
              <p className="mt-2 font-sans text-black">
                $3001~$5000 Invesment - Bonus 7% Gonzo
              </p>
              <p className="mt-2 font-sans text-black">
                $5001 & more Invesment - Bonus 12% Gonzo
              </p>
            </div>
            <div className="p-8 place-items-center">
              <div className="uppercase tracking-wider text-3xl text-center text-black font-semibold font-custom2">
                    Referral - Bonus Gonzo
              </div>
              <p className="mt-2 font-sans text-black">
                Purchase via Referral $0~$5000 3% Gonzo
              </p>
              <p className="mt-2 font-sans text-black">
                Purchase via Referral $5000 & more 5% Gonzo
              </p>
            </div>
          </div>
        </div>

    </div>
  );
}
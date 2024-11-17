import React from "react";

export default function Fifth() {
  return (
    <div className="grid bg-[#6c83d6] place-items-center font-custom tracking-widest pb-8">
      <div className=" mt-20 text-7xl text-white ">Bonuses & Referrals</div>
        <p className="text-white" >Ready for Whales and influencers!</p>
      <div className="m-4 p-20 mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-5xl">
          <div className="md:flex">
            <div className="p-8 place-items-center">
              <div className="uppercase tracking-wider text-3xl text-black text-center font-semibold font-custom2 text-start">
                    Volume - Bonus 
                    <div className="text-center">
                        Gonzo
                    </div>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                $500~$1,500 Invesment 
                    <p className="text-center tracking-wider font-normal">
                        Bonus 3% Gonzo
                    </p>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                    $1,501~$3000 Invesment
                    <p className="text-center tracking-wider font-normal">
                        Bonus 5% Gonzo
                    </p>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                $3001~$5000 Invesment 
                    <p className="text-center tracking-wider font-normal">
                        Bonus 7% Gonzo
                    </p>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                $5001 & more Invesment
                    <p className="text-center tracking-wider font-normal">
                        Bonus 12% Gonzo
                    </p>
              </div>
            </div>
            <div className="p-8 place-items-center ">
              <div className="uppercase tracking-wider text-3xl text-center text-black font-semibold font-custom2">
                    Referral - Bonus 
                    <div className="text-center tracking-wider">
                        Gonzo
                    </div>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                Purchase via Referral 
                        
                <p className="text-center font-normal">
                    $0~$5000 3% Gonzo
                </p>
              </div>
              <div className="mt-2 font-sans text-black font-bold">
                Purchase via Referral $5000 & more 
                <p className="text-center font-normal">
                    5% Gonzo
                </p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
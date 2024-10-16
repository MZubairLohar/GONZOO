
export default function SectionTwo () {
  return (
    <div id="sectionTwo" class="w-full bg-white max-w-7xl px-4 mx-auto sm:px-8 mt-24 ">
        <blockquote class="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">     
            <img class="hidden object-cover w-full h-full rounded-l-xl md:block " style={{clipPath :" polygon(0 0%, 100% 0%, 86% 100%, 0% 100%"}} src="https://i.pinimg.com/564x/54/23/84/5423848a755f9ad8303485f1fbefcd40.jpg" />
            <article class="relative p-6 md:p-8 md:col-span-2">
                <svg class="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
                    height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                        stroke="currentColor" stroke-width="8"></path>
                </svg>
                <div class="space-y-8">
                    <h1 className=" text-[#0079ac] bg-clip-text text-3xl font-extrabold font-custom tracking-wider sm:text-5xl">
                        About Gonzo
                    </h1>
                    <p class="text-base sm:leading-relaxed md:text-2xl text-black">
                        Gonzo is coming off the bench to show the people how the game is really played! All of the Inus and other memes don’t stand a chance on our pitch. Gonzo Token is here at last and head to the top of the ranks. Presale coming soon with the token that has “0” taxes, The contract that renounced with all of opportunity that you can imagine. The power of Gonzo will be felt in shown though it’s up coming success.
                    </p>
                    <footer class="flex items-center space-x-4 md:space-x-0">
                        <img class="w-12 h-12 rounded-full md:hidden" src="https://i.pinimg.com/564x/54/23/84/5423848a755f9ad8303485f1fbefcd40.jpg" />
                    </footer>
                </div>
            </article>
        </blockquote>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import "tailwindcss/tailwind.css"
import Link from 'next/link'
import { MicrophoneIcon, SearchIcon, UserCircleIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  
  const router = useRouter();
  const searchQuery = useRef(null);

 const handleSubmit = (e) => {
   e.preventDefault();
   
   const searchTerm = searchQuery.current.value;
   if (!searchTerm) return;


   return router.push(`/search?q=${searchTerm}`);

  }
  return (
    <div className="min-h-screen" >
      <Head>
        <title>Google</title>
        <meta name="description" content="Google search engine." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="flex justify-end px-4 py-3 gap-x-4 items-center">
          <a  className="text-sm cursor-pointer">Gmail</a>
           <a className="text-sm cursor-pointer">Images</a> 
      
       
        <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-200"/>
        <UserCircleIcon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-200"/>
             
      
      </header>

      <form  className="flex flex-col  items-center mt-32 flex-grow" onSubmit={(e)=> handleSubmit(e)}>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          alt="google search"
          width={300}
        />
        <div className="flex w-full mt-5 max-w-md hover:shadow-md focus-within:shadow-md rounded-full border px-4 py-3 items-center sm:max-w-xl lg:max-w-2xl">

          <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" ref={searchQuery} className="flex-grow focus:outline-none "/>
        <MicrophoneIcon className="h-5 text-gray-500"/>
          
        </div>


        <div className="flex gap-4 mt-4">
          <button type="submit" className="px-3 py-2 bg-gray-100 rounded-md text-sm ring-gray-300 hover:ring-1 hover:shadow-md focus:ring-blue-600 focus:ring-1  focus:outline-none">Google Search</button>
          <button className="px-3 py-2 bg-gray-100 rounded-md text-sm ring-gray-300 hover:ring-1 hover:shadow-md focus:ring-blue-600 focus:ring-1 focus:outline-none">I'm Feeling Lucky</button>
        </div>

        <div className="flex gap-2 mt-8 flex-wrap justify-center">Google offered in:
          
          <Link href="/"><a className="text-blue-700  text-sm">தமிழ்</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">हिन्दी</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">বাংলা</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">తెలుగు</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">मराठी</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">ગુજરાતી</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">ಕನ್ನಡ</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">മലയാളം</a></Link>
          <Link href="/"><a className="text-blue-700 text-sm">ਪੰਜਾਬੀ</a></Link>
        </div>


      </form>

      <footer className="bg-gray-100 sticky top-full w-full  px-7">
        <div className="border-b border-gray-300 p-2 text-gray-500">India</div>

        
        <div className="flex justify-between py-4 flex-col sm:flex-row ">
           <div className="flex gap-2 sm:flex-wrap">
         <Link href='/'><a className="text-gray-500">About</a></Link> 
         <Link href='/'><a className="text-gray-500">Advertising</a ></Link> 
         <Link href='/'><a className="text-gray-500">Business</a ></Link> 
         <Link href='/'><a className="text-gray-500">How Search Works</a ></Link> 
          </div>
          
          <div className="flex gap-2 ">
            <a className="text-gray-500">Privacy</a>
            <a className="text-gray-500">Terms</a>
            <a className="text-gray-500">Settings</a>
          </div>
       </div>
      </footer>
    </div>
  )
}

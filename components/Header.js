import { MicrophoneIcon, SearchIcon, XIcon ,UserCircleIcon,ViewGridIcon } from "@heroicons/react/solid";
import {  CogIcon } from "@heroicons/react/outline";
import Image from "next/image"
import  { useRouter } from "next/router"
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

function Header() {
   
    const router = useRouter();
    const queryRef = useRef(null);


    const goBack = () => {
        router.push('/');
    }

    const clearInputField = () => {
        queryRef.current.value= '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();

         const searchTerm = queryRef.current.value;
         if (!searchTerm) return;


   return router.push(`/search?q=${searchTerm}`);
    }
    return (
        <header className="sticky top-0 bg-white">

            <div className="flex p-6 items-center"> 
          <Image
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                height={40}
                    width={120}
                    alt="google search"
                className="cursor-pointer"
                onClick = {() => goBack()}
            />

            <form onSubmit={ e => handleSubmit(e)} className="flex flex-grow  border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-6 mr-5 max-w-2xl text-gray-500 items-center">
                    <input ref={queryRef}
                        defaultValue={router.query.q}
                className="flex-grow w-full focus:outline-none"
                />
               {router.query.q && <XIcon className="h-7 cursor-pointer mr-4" onClick={() => clearInputField()} />}
                <MicrophoneIcon className="h-7  border-l-2 pl-4 border-gray-200 text-blue-600 cursor-pointer" />
                <SearchIcon className="h-7 text-blue-600 ml-4 cursor-pointer hidden sm:inline-block" />
                
                <button hidden type="submit"/>
                </form>

                <div className="flex ml-auto">
                    <CogIcon className="h-10 w-10 p-2 cursor-pointer rounded-full text-gray-500 hover:bg-gray-200 hidden sm:inline-block"/>
                     <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer rounded-full text-gray-500 hover:bg-gray-200"/>
                    <UserCircleIcon className="h-10 w-10 p-2  cursor-pointer rounded-full text-gray-500 hover:bg-gray-200" />
                    
                </div>
               
            </div>


            <HeaderOptions/>
            

           
            
        </header>


        
    )
}

export default Header




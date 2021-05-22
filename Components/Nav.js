import requests from "../utils/requests"
import {useRouter} from "next/router"

function Nav() {
    
    const router = useRouter();

    return (
        <nav className="relative">
          <div 
          id="container"
          className="flex px-10 sm:20 text-2xl whitespace-nowrap 
          space-x-10 sm:space-x-20 overflow-x-scroll
          scrollbar-hide
          select-none
          container
          ">
              {
                  Object.entries(requests).map(([key,{title,url}])=>{
                      return <h2  key={key} className="cursor-pointer
                      transition duration-100
                      transform hover:scale-125 hover:text-white
                      active:text-[#AA8844]
                      last:pr-24 uppercase"
                      onClick={()=>router.push(`/?genre=${key}`)}>{title}</h2>
                  })
              }
          </div>
          <div className="absolute  right-0 bottom-0 w-1/12 h-10 bg-gradient-to-l from-[#000000]"/>
        </nav>
    )
}

export default Nav

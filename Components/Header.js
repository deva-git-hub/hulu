import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
 BadgeCheckIcon,
 CollectionIcon,
 HomeIcon,
 LightningBoltIcon,
 SearchIcon,
 UserIcon
} from "@heroicons/react/outline"

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT  ' Icon={UserIcon}/>
                
            </div>
            <Image 
                className="object-contain"
                src="https://i.pinimg.com/236x/d5/e6/90/d5e690e8e27613e51aa3a2492fb613e0.jpg"
                width={200}
                height={100}
            />

        </header>
    )
}

export default Header

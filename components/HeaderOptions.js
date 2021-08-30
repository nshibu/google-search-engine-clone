import { BookmarkIcon, DotsVerticalIcon, NewspaperIcon, PhotographIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/outline"
import HeaderOption from "./HeaderOption"

function HeaderOptions() {
    return (
        <div className="flex justify-evenly lg:justify-start lg:space-x-36 lg:pl-52 text-sm text-gray-700 border-b border-gray-200">
            <div className="flex space-x-4">
                <HeaderOption Icon={SearchIcon} title="All" selected={ true}/>
                <HeaderOption Icon={PhotographIcon} title="Images" selected={ false}/>
                <HeaderOption Icon={VideoCameraIcon} title="Videos" selected={ false}/>
                <HeaderOption Icon={NewspaperIcon} title="News" selected={ false}/>
                <HeaderOption Icon={BookmarkIcon} title="Books" selected={ false}/>
                <HeaderOption Icon={DotsVerticalIcon} title="More" selected={ false}/>
               
            </div>

            <div>
                Tools
            </div>
        </div>
    )
}

export default HeaderOptions

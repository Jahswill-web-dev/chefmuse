import { House } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { Bell } from 'lucide-react';
function SideBar() {
    return ( 
        <div className="fixed left-0 top-0 border-left border-gray-300 border-r-2 h-full
        flex flex-col pt-10 bg-white z-50">
            {/* Logo */}
            <div>

            </div>
            <div className="flex items-center gap-2 p-4">
                <House className="text-gray-800" size={28} />
            </div>
            <div className="flex items-center gap-2 p-4">
                <SquarePlus className="text-gray-800" size={28} />
            </div>
            <div className="flex items-center gap-2 p-4">
                <Bell className="text-gray-800" size={28} />
            </div>
            {/* Add more sidebar items here */}
            
        </div>
     );
}

export default SideBar;
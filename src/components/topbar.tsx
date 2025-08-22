"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';


function TopBar() {
    const [query, setQuery] = useState("");
    return (
        <div className="py-4 px-4">
            <form className="bg-gray-100 rounded-xl border-0 focus:outline-none h-10 flex items-center pl-2.5 px-0">
                <Search className="text-gray-400 w-auto" size={25} />
                <Input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="shadow-none bg-gray-100 rounded-xl text-lg border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent"
                />
            </form>
        </div>
    );
}

export default TopBar;
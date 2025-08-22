"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import { TypographyH4 } from "./typography/typography";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function TopBar() {
    const [query, setQuery] = useState("");
    const [isFormActive, setIsFormActive] = useState<boolean>(true);
    const [checked, setChecked] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([])
    const handleChange = (id: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    )
  }
    return (
        <div className="py-4 px-4 sticky top-0 z-10 bg-white">
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
            {/* Filters */}
            {isFormActive &&
                (<div className="bg-white pt-10 h-[70vh]">
                    <div className="flex flex-col md:flex-row items-center justify-around">
                        <div className="flex flex-col items-start space-y-3">
                            <TypographyH4 className="font-normal font-dm-sans">
                                Region
                            </TypographyH4>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="Italian"
                                    checked={checked}
                                    onCheckedChange={(checked) => handleChange("Italian", Boolean(checked))}
                                />
                                <Label htmlFor="cheese">Italian</Label>
                            </div>
                        </div>
                        <div>
                            <TypographyH4>
                                Meal Type
                            </TypographyH4>
                        </div>
                        <div>
                            <TypographyH4>
                                Diet
                            </TypographyH4>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default TopBar;
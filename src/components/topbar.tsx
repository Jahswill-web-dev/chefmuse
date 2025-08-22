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
    const regions = [
        { id: "italian", label: "Italian" },
        { id: "", label: "Vegetarian" },
        { id: "gluten-free", label: "Gluten-Free" },
        { id: "keto", label: "Keto" },
        { id: "mexican", label: "Mexican" },
        { id: "american", label: "American" },
        { id: "chinese", label: "Chinese" },
        { id: "japanese", label: "Japanese" },
        { id: "indian", label: "Indian" },
        { id: "mediterranean", label: "Mediterranean" },
        { id: "turkish", label: "Turkish" },
        { id: "french", label: "French" },
        { id: "spanish", label: "Spanish" },
        { id: "middle-eastern", label: "Middle Eastern" },
        { id: "thai", label: "Thai" },
        { id: "korean", label: "Korean" }
    ];

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
                (<div className="bg-white pt-10 min-h-[70vh] h-auto">
                    <div className="flex flex-col md:flex-row items-center justify-around">
                        <div className="flex flex-col items-start space-y-3">
                            <TypographyH4 className="font-normal font-dm-sans">
                                Region
                            </TypographyH4>
                            {regions.map((region) => (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="Italian"
                                        checked={selected.includes(region.id)}
                                        onCheckedChange={(checked) => handleChange(region.id, Boolean(checked))}
                                    />
                                    <Label htmlFor="cheese">{region.label}</Label>
                                </div>
                            ))}
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
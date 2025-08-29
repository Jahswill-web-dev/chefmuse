"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Key, Search } from 'lucide-react';
import { TypographyH4 } from "./typography/typography";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function TopBar() {
    const [query, setQuery] = useState("");
    const [isFormActive, setIsFormActive] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([])
    const handleChange = (id: string, checked: boolean) => {
        setSelected((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        )
    }
    const regions = [
        { id: "italian", label: "Italian" },
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
    const mealTypes = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "snack", label: "Snack" },
    { id: "dessert", label: "Dessert" },
    { id: "appetizer", label: "Appetizer" },
    { id: "beverage", label: "Beverage" }
];
const dietaryPreferences = [
    { id: "vegan", label: "Vegan" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "gluten-free", label: "Gluten-Free" },
    { id: "keto", label: "Keto" },
    { id: "low-carb", label: "Low-Carb" },
    { id: "dairy-free", label: "Dairy-Free" },
    { id: "paleo", label: "Paleo" }
];

    return (
        <div className="py-4 px-4 sticky top-0 z-20 bg-white">
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
                (<div className="bg-white pt-10 min-h-[70vh] h-auto scrollbar-auto">
                    <div className="flex flex-col md:flex-row items-start justify-around">
                        <div className="flex flex-col items-start space-y-3 ">
                            <TypographyH4 className="text-mydarksecondary font-dm-sans font-semibold">
                                Region
                            </TypographyH4>
                            {regions.map((region, index) => (
                                <div className="flex items-center space-x-2 flex-row" key={index}>
                                    <Checkbox
                                        id="Italian"
                                        className="w-5 h-5 border-gray-800"
                                        checked={selected.includes(region.id)}
                                        onCheckedChange={(checked) => handleChange(region.id, Boolean(checked))}
                                    />
                                    <Label htmlFor="cheese" className="text-lg">{region.label}</Label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start space-y-3 mt-10 md:mt-0">
                            <TypographyH4 className="font-semibold font-dm-sans text-mydarksecondary">
                                Meal Type
                            </TypographyH4>
                            {mealTypes.map((region, index) => (
                                <div className="flex items-center space-x-2" key={index}>
                                    <Checkbox
                                        id="Italian"
                                        className="w-5 h-5 border-gray-800"
                                        checked={selected.includes(region.id)}
                                        onCheckedChange={(checked) => handleChange(region.id, Boolean(checked))}
                                    />
                                    <Label htmlFor="cheese" className="text-lg">{region.label}</Label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start space-y-3 mt-10 md:mt-0">
                            <TypographyH4 className="font-semibold font-dm-sans text-mydarksecondary mx-3">
                                Diet
                            </TypographyH4>
                            {dietaryPreferences.map((region, index) => (
                                <div className="flex items-center space-x-2" key={index}>
                                    <Checkbox
                                        id="Italian"
                                        className="w-5 h-5 border-gray-800"
                                        checked={selected.includes(region.id)}
                                        onCheckedChange={(checked) => handleChange(region.id, Boolean(checked))}
                                    />
                                    <Label htmlFor="cheese" className="text-lg">{region.label}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default TopBar;
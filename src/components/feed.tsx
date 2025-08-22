'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { TypographyH2 } from "./typography/typography";
import { Button } from "./ui/button";
import { truncate } from "@/lib/utils";
import TopBar from "./topbar";

export type Meal = {
    idMeal: string
    strMeal: string
    strMealAlternate: string | null
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string | null
    strYoutube: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    strIngredient14: string
    strIngredient15: string
    strIngredient16: string
    strIngredient17: string
    strIngredient18: string
    strIngredient19: string
    strIngredient20: string
    strMeasure1: string
    strMeasure2: string
    strMeasure3: string
    strMeasure4: string
    strMeasure5: string
    strMeasure6: string
    strMeasure7: string
    strMeasure8: string
    strMeasure9: string
    strMeasure10: string
    strMeasure11: string
    strMeasure12: string
    strMeasure13: string
    strMeasure14: string
    strMeasure15: string
    strMeasure16: string
    strMeasure17: string
    strMeasure18: string
    strMeasure19: string
    strMeasure20: string
    strSource: string
    strImageSource: string | null
    strCreativeCommonsConfirmed: string | null
    dateModified: string | null
}

export type mealsResponse = {
    meals: Meal[]
}

// Pexels API response type

export type photo = {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    alt: string;
}

export type pexelsResponse = {
    total_results: number;
    page: number,
    per_page: number,
    photos: photo[]
}





async function getRecipes() {
    const res = await axios.get<pexelsResponse>("/api/recipes");
    return res.data;
}
const breakpointColumnsObj = {
    default: 5,
    1289: 4,
    700: 3,
    500: 2
};

function GalleryGrid({ data }: { data: photo[] }) {
    return (
        <div className="container relative">
            <Masonry breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {data.map((object, index) => (
                    object.url && (
                        <div key={index}>
                            {object.url ? (<Image src={object.src.medium}
                                className="rounded-[6px]"
                                width={300}
                                height={200}
                                alt={object.alt} />) : (<div className="w-[300px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    No image
                                </div>)}
                            <div className=" h-8 py-1 px-2 font-dm-sans font-bold text-sm text-gray-500">
                                <p className="">{truncate(object.alt, 30)}</p>
                            </div>
                        </div>)
                ))}
            </Masonry>

        </div>
    );
}


export default function Feed() {
    const { data, isLoading, error } = useQuery<pexelsResponse>({
        queryKey: ["recipes"],
        queryFn: getRecipes,
    });

    console.log(data);

    if (isLoading) return <p>Loading recipes...</p>
    if (error || !data) return <p>Failed to load recipes</p>;
    return (
        <div>
            <TopBar/>
            <GalleryGrid data={data.photos} />
        </div>
    )

}
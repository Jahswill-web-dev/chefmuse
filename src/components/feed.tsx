'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { TypographyH2 } from "./typography/typography";
import { Button } from "./ui/button";

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




async function getRecipes() {
    const res = await axios.get<mealsResponse>("/api/recipes");
    return res.data;
}
const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2
};

function GalleryGrid({ data }: { data: Meal[] }) {
    return (
        <div className="container relative">
            <TypographyH2 className="text-mydarksecondary p-10 text-center">Access and Store Thousands of Recipes Beautifully</TypographyH2>
            <Masonry breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {data.map((object, index) => (
                    <div key={index}>
                        <Image src={object.strMealThumb}
                            className="rounded-lg"
                            width={300}
                            height={200}
                            alt={object.strMeal} />
                        {/* <p>hello</p> */}
                    </div>
                ))}
            </Masonry>

        </div>
    );
}


export default function Feed() {
    const { data, isLoading, error } = useQuery<mealsResponse>({
        queryKey: ["recipes"],
        queryFn: getRecipes,
    });

    console.log(data);

    if (isLoading) return <p>Loading recipes...</p>
    if (error || !data) return <p>Failed to load recipes</p>;
    return <GalleryGrid data={data.meals} />

}
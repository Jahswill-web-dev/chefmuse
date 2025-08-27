'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { TypographyH2 } from "./typography/typography";
import { Button } from "./ui/button";
import { truncate } from "@/lib/utils";
import TopBar from "./topbar";
import SideBar from "./sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    const [columns, setColumns] = useState(3);
    const recipes = [
        {
            id: 1,
            title: "Mediterranean Grilled Salmon",
            image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "35 min",
            servings: 4,
            difficulty: "Medium"
        },
        {
            id: 2,
            title: "Creamy Mushroom Risotto",
            image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "45 min",
            servings: 6,
            difficulty: "Hard"
        },
        {
            id: 3,
            title: "Classic Caesar Salad",
            image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "15 min",
            servings: 4,
            difficulty: "Easy"
        },
        {
            id: 4,
            title: "Chocolate Lava Cake",
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "25 min",
            servings: 2,
            difficulty: "Medium"
        },
        {
            id: 5,
            title: "Thai Green Curry",
            image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "40 min",
            servings: 4,
            difficulty: "Medium"
        },
        {
            id: 6,
            title: "Fresh Caprese Salad",
            image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "10 min",
            servings: 4,
            difficulty: "Easy"
        },
        {
            id: 7,
            title: "Beef Wellington",
            image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "2 hours",
            servings: 8,
            difficulty: "Hard"
        },
        {
            id: 8,
            title: "Homemade Pizza Margherita",
            image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "30 min",
            servings: 4,
            difficulty: "Medium"
        },
        {
            id: 9,
            title: "Blueberry Pancakes",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "20 min",
            servings: 4,
            difficulty: "Easy"
        },
        {
            id: 10,
            title: "Grilled Vegetable Skewers",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "25 min",
            servings: 6,
            difficulty: "Easy"
        },
        {
            id: 11,
            title: "Chicken Tikka Masala",
            image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "50 min",
            servings: 6,
            difficulty: "Medium"
        },
        {
            id: 12,
            title: "French Onion Soup",
            image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1 hour",
            servings: 4,
            difficulty: "Medium"
        },
        {
            id: 13,
            title: "Avocado Toast",
            image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "5 min",
            servings: 2,
            difficulty: "Easy"
        },
        {
            id: 14,
            title: "Seafood Paella",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1.5 hours",
            servings: 8,
            difficulty: "Hard"
        },
        {
            id: 15,
            title: "Banana Bread",
            image: "https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1 hour",
            servings: 8,
            difficulty: "Easy"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else if (window.innerWidth < 1280) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Distribute recipes across columns for masonry layout
    const distributeRecipes = () => {
        const columnArrays: typeof recipes[] = Array.from({ length: columns }, () => []);

        recipes.forEach((recipe, index) => {
            const columnIndex = index % columns;
            columnArrays[columnIndex].push(recipe);
        });

        return columnArrays;
    };

    const recipeColumns = distributeRecipes();

    return (
        <div className={`grid gap-4 ${
            columns === 1 ? 'grid-cols-1' :
            columns === 2 ? 'grid-cols-2' :
            columns === 3 ? 'grid-cols-3' : 'grid-cols-4'
            }`}>
            {recipeColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                    {data.map((recipe) => (
                        <Link key={recipe.id} href="/" className="block group">
                            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                                <img
                                    src={recipe.src.medium}
                                    alt={recipe.alt}
                                    className="w-full object-cover group-hover:brightness-90 transition-all duration-300"
                                    style={{
                                        height: `${Math.floor(Math.random() * 150) + 200}px`
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-semibold text-sm leading-tight">
                                        {truncate(recipe.alt, 40)}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
        </div>

    )

    // return (
    //     <div className="container relative">
    //         <Masonry breakpointCols={breakpointColumnsObj}
    //             className="my-masonry-grid"
    //             columnClassName="my-masonry-grid_column">
    //             {data.map((object, index) => (
    //                 object.url && (
    //                     <div key={index}>
    //                         {object.url ? (<Image src={object.src.medium}
    //                             className="rounded-[6px]"
    //                             width={300}
    //                             height={200}
    //                             alt={object.alt} />) : (<div className="w-[300px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
    //                                 No image
    //                             </div>)}
    //                         <div className=" h-8 py-1 px-2 font-dm-sans font-bold text-sm text-gray-500">
    //                             <p className="">{truncate(object.alt, 30)}</p>
    //                         </div>
    //                     </div>)
    //             ))}
    //         </Masonry>

    //     </div>
    // );
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
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className="ml-[62px]">
                    <TopBar />
                    <GalleryGrid data={data.photos} />
                </div>
            </div>
        </div>
    )

}
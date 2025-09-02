import BackButton from "@/components/backbutton";
import RecipeTabs from "@/components/recipetabs"
import { ClockIcon, MapPinIcon } from "lucide-react"
export default async function Page(
    { params }: { params: { slug: string } }
) {
   
    const { slug } = params;
    const recipes = [
        {
            id: 1,
            title: "Mediterranean Grilled Salmon",
            image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "35 min",
            servings: 4,
            difficulty: "Medium",
            country: "Greece",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 2,
            title: "Creamy Mushroom Risotto",
            image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "45 min",
            servings: 6,
            difficulty: "Hard",
            country: "Greece",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"], 
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 3,
            title: "Classic Caesar Salad",
            image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "15 min",
            servings: 4,
            difficulty: "Easy",
            country: "American",
            tags: ["Seafood", "Healthy"], 
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 4,
            title: "Chocolate Lava Cake",
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "25 min",
            servings: 2,
            difficulty: "Medium",
            country: "Italy",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 5,
            title: "Thai Green Curry",
            image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "40 min",
            servings: 4,
            difficulty: "Medium",
            country: "Spain",
            tags: ["Seafood", "Healthy"], 
            ingredients: ["Salmon", "Lemon", "Olive oil"], 
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 6,
            title: "Fresh Caprese Salad",
            image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "10 min",
            servings: 4,
            difficulty: "Easy",
            country: "Greece",
            tags: ["Seafood", "Healthy"], // ✅ ADD THIS
            ingredients: ["Salmon", "Lemon", "Olive oil"], // ✅ ADD THIS
            instructions: ["Season the salmon", "Grill it", "Serve hot"], // 
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 7,
            title: "Beef Wellington",
            image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "2 hours",
            servings: 8,
            difficulty: "Hard",
            country: "Greece",
            tags: ["Seafood", "Healthy"], 
            ingredients: ["Salmon", "Lemon", "Olive oil"], 
            instructions: ["Season the salmon", "Grill it", "Serve hot"], 
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 8,
            title: "Homemade Pizza Margherita",
            image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "30 min",
            servings: 4,
            difficulty: "Medium",
            country: "Greece",
            tags: ["Seafood", "Healthy"], 
            ingredients: ["Salmon", "Lemon", "Olive oil"], 
            instructions: ["Season the salmon", "Grill it", "Serve hot"], 
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 9,
            title: "Blueberry Pancakes",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "20 min",
            servings: 4,
            difficulty: "Easy",
            country: "Canada",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 10,
            title: "Grilled Vegetable Skewers",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "25 min",
            servings: 6,
            difficulty: "Easy",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 11,
            title: "Chicken Tikka Masala",
            image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "50 min",
            servings: 6,
            difficulty: "Medium",
            country: "Greece",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 12,
            title: "French Onion Soup",
            image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1 hour",
            servings: 4,
            difficulty: "Medium",
            country: "USA",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 13,
            title: "Avocado Toast",
            image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "5 min",
            servings: 2,
            difficulty: "Easy",
            country: "Greece",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 14,
            title: "Seafood Paella",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1.5 hours",
            servings: 8,
            difficulty: "Hard",
            country: "Greece",
            tags: ["Seafood", "Healthy"],
            ingredients: ["Salmon", "Lemon", "Olive oil"],
            instructions: ["Season the salmon", "Grill it", "Serve hot"],
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        },
        {
            id: 15,
            title: "Banana Bread",
            image: "https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg?auto=compress&cs=tinysrgb&w=600",
            cookTime: "1 hour",
            servings: 8,
            difficulty: "Easy",
            country: "Greece",
            tags: ["Seafood", "Healthy"], 
            ingredients: ["Salmon", "Lemon", "Olive oil"], 
            instructions: ["Season the salmon", "Grill it", "Serve hot"], 
            nutritionalValues: {
                calories: "250",
                protein: "22g",
                carbs: "5g",
                fat: "15g",
                fiber: "1g",
                sugar: "0g",
                sodium: "300mg",
            },
        }
    ];
    const recipe = recipes.find(r => r.id.toString() === slug);
    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <BackButton />
            <div className="flex flex-col lg:flex-row gap-8 mb-8 lg:items-center md:px-20 py-5">
                {/* Recipe Image */}
                <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-[500px]">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* Recipe Details */}
                <div className="lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        {recipe.title}
                    </h1>
                    <div className="flex items-center mb-4 text-gray-600">
                        <MapPinIcon className="w-5 h-5 mr-2" />
                        <span>{recipe.country}</span>
                    </div>
                    <div className="flex items-center mb-6 text-gray-600">
                        <ClockIcon className="w-5 h-5 mr-2" />
                        <span>{recipe.cookTime}</span>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {recipe.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs Section */}
            <RecipeTabs
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                nutritionalValues={recipe.nutritionalValues}
            />
        </div>
    )
}
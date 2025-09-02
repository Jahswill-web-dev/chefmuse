'use client';
import React, { useState } from 'react'

interface RecipeTabsProps {
    ingredients: string[]
    instructions: string[]
    nutritionalValues: {
        calories: string
        protein: string
        carbs: string
        fat: string
        fiber: string
        sugar: string
        sodium: string
    }
}
function RecipeTabs({ ingredients, instructions, nutritionalValues }: RecipeTabsProps) {
    const [activeTab, setActiveTab] = useState('ingredients')
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    className={`py-3 px-4 text-sm sm:text-base font-medium ${activeTab === 'ingredients' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('ingredients')}
                >
                    Ingredients
                </button>
                <button
                    className={`py-3 px-4 text-sm sm:text-base font-medium ${activeTab === 'instructions' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('instructions')}
                >
                    Instructions
                </button>
                <button
                    className={`py-3 px-4 text-sm sm:text-base font-medium ${activeTab === 'nutrition' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('nutrition')}
                >
                    Nutrition
                </button>
            </div>
            {/* Tab Content */}
            <div className="min-h-[300px]">
                {/* Ingredients Tab */}
                {activeTab === 'ingredients' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Ingredients
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Instructions Tab */}
                {activeTab === 'instructions' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Instructions
                        </h2>
                        <ol className="list-decimal pl-5 space-y-4">
                            {instructions.map((instruction, index) => (
                                <li key={index} className="text-gray-700">
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
                {/* Nutrition Tab */}
                {activeTab === 'nutrition' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Nutritional Information
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Calories</p>
                                <p className="font-medium">{nutritionalValues.calories}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Protein</p>
                                <p className="font-medium">{nutritionalValues.protein}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Carbs</p>
                                <p className="font-medium">{nutritionalValues.carbs}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Fat</p>
                                <p className="font-medium">{nutritionalValues.fat}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Fiber</p>
                                <p className="font-medium">{nutritionalValues.fiber}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Sugar</p>
                                <p className="font-medium">{nutritionalValues.sugar}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="text-sm text-gray-500">Sodium</p>
                                <p className="font-medium">{nutritionalValues.sodium}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default RecipeTabs

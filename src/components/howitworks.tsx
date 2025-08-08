import Image from "next/image";
import { TypographyH3, TypographyP } from "./typography/typography";
import { Search, Share2, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
const cardContent = [
    {
        title: "Discover Recipes",
        description: "Explore a vast collection of delicious recipes from around the world.",
        Icon: Search,
    },
    {
        title: "Cook with Ease",
        description: "Follow step-by-step instructions and cooking tips.",
        Icon: BookOpen,
    },
    {
        title: "Share Your Creations",
        description: "Upload your own recipes and connect with fellow food enthusiasts.",
        Icon: Share2,
    },

]



function HowItWorks() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {cardContent.map((card, index) => {
                const IconComponent = card.Icon;
                return (
                    <Card key={index} className="w-full max-w-sm h-[186px]">
                        <CardHeader className="flex flex-col items-center text-center gap-1">
                            {/* Icon from Lucide */}
                            <IconComponent size={40} strokeWidth={1.5} className="text-myprimary" />

                            {/* Title */}
                            <CardTitle>
                                <TypographyH3>{card.title}</TypographyH3>
                            </CardTitle>

                            {/* Description */}
                            <CardDescription>
                                <TypographyP>{card.description}</TypographyP>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                );
            })}
        </div>
    )
}

export default HowItWorks;
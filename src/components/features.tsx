import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH1, TypographyH3, TypographyP } from "./typography/typography";
import { BookText, ScanSearch, Users, MessageCircleMore } from "lucide-react";

const cardContent = [
    {
        title: "Recipe Database",
        description: "Access thousands of recipes.",
        Icon: BookText,
    },
    {
        title: "Advanced Search",
        description: "Follow step-by-step instructions and cooking tips.",
        Icon: ScanSearch,
    },
    {
        title: "Community Forum",
        description: "Upload your own recipes and connect with fellow food enthusiasts.",
        Icon: MessageCircleMore,
    },
    {
        title: "User Profiles",
        description: "Manage your recipes and preferences.",
        Icon: Users,
    },

]

function CoreFeatures() {
    return (
        <div className="bg-[#fafafb] py-10">
            <TypographyH3 className="text-center text-2xl md:text-3xl">Core Features</TypographyH3>
            <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 ">
                {cardContent.map((card, index) => {
                    const IconComponent = card.Icon;
                    return (
                        <Card key={index} className="w-full max-w-sm h-[186px]">
                            <CardHeader className="flex flex-col items-center text-center gap-1">
                                {/* Icon from Lucide */}
                                <IconComponent size={40} strokeWidth={1.5} className="text-mydarksecondary" />

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
        </div>
    );
}

export default CoreFeatures;
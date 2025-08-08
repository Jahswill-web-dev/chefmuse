'use client';
import Image from "next/image";
import mobileHeroImage from "../../public/images/mobileheroimage.jpg";
import desktopHeroImage from "../../public/images/desktopheroimage.jpg";
import { TypographyH1, TypographyP } from "./typography/typography";
import { Input } from "./ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Hero() {
    const [query, setQuery] = useState("");

    return (
        <div>
            <div className="relative flex justify-center items-start flex-col md:hidden h-[100vh]">
                <Image
                    src={mobileHeroImage}
                    alt="Hero background"
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600/80 to-gray-600/80 z-10" />
                <div className="relative z-10 p-4 sm:p-2 mb-11 max-w-[513px] mx-auto">
                    <TypographyH1 className="text-white font-quicksand sm:text-5xl">Welcome to ChefMuse</TypographyH1>
                    <TypographyP className="text-mysecondary font-medium font-dm-sans text-xl sm:text-2xl">
                        Discover delicious recipes tailored to your ingredients!
                    </TypographyP>
                    <div>
                        <Input
                            type="text"
                            placeholder="Search ingredients..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="rounded-full bg-white shadow-sm text-base h-2 mt-3 px-4 py-6"
                        />
                        <motion.button
                            whileHover="hover"
                            whileTap="tap"
                            className="btn-primary flex items-center justify-center bg-myprimary hover:bg-mylightprimary text-white font-quicksand font-bold text-xl py-3 rounded-full w-full mt-3"
                        >
                            <span>Find Recipes</span>
                            <motion.span variants={{
                                hover: { x: 8 },
                                tap: { x: 4 },
                            }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="ml-2">
                                <ArrowRight size={30} />
                            </motion.span>
                        </motion.button>
                    </div>
                </div>
            </div>
            {/* Desktop Hero */}
            <div className="hidden md:flex relative justify-center items-start flex-col h-[100vh] w-full">
                {/* Hero Image */}
                <Image
                    alt=""
                    src={desktopHeroImage}
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/90 to-transparent z-10" />
                {/* Hero text */}
                <div className="relative z-10 p-4 mb-11 max-w-[600px] 2xl:max-w-[700px] flex flex-col gap-2">
                    <TypographyH1 className="text-white font-quicksand text-5xl 2xl:text-7xl">Welcome to ChefMuse</TypographyH1>
                    <TypographyP className="text-mysecondary font-medium font-dm-sans text-2xl 2xl:text-4xl">
                        Discover delicious recipes tailored to your ingredients!
                    </TypographyP>
                    {/* Input Form */}
                    <div>
                        <Input
                            type="text"
                            placeholder="Search ingredients..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="rounded-full bg-white shadow-sm text-base md:text-xl lg:text-2xl h-2 mt-3 px-4 py-6"
                        />
                        <motion.button
                            whileHover="hover"
                            whileTap="tap"
                            className="btn-primary flex items-center justify-center bg-myprimary hover:bg-mylightprimary md:text-2xl text-white font-quicksand font-bold text-xl py-3 rounded-full w-full mt-3"
                        >
                            <span>Find Recipes</span>
                            <motion.span variants={{
                                hover: { x: 8 },
                                tap: { x: 4 },
                            }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="ml-2">
                                <ArrowRight size={30} />
                            </motion.span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
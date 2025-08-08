import Image from "next/image";
import { TypographyH2 } from "./typography/typography";


function Categories() {
    const categories = [
        { name: "Rice", image: "icons/reshot-icon-rice-bowl-2UTG4JEFMV.svg" },
        { name: "Vegetable", image: "icons/reshot-icon-vegetables-2QPA8STCXB.svg" },
        { name: "Meat", image: "icons/reshot-icon-meat-H4C6VA3YXD.svg" },
        { name: "Dessert", image: "icons/reshot-icon-pie-JY67LM8UFW.svg" },
        { name: "Fruits", image: "icons/reshot-icon-fruit-FRJTXSCZ74.svg" },
        { name: "Bread", image: "icons/reshot-icon-bread-BYCWV2S67E.svg" },
        { name: "Chocolate", image: "icons/reshot-icon-chocolate-addiction-3VLCHKY5DQ.svg" },
    ]
    return (
    <div className="p-4 mb-11">
        <TypographyH2 className="text-myprimary font-quicksand font-semibold text-2xl mb-4 md:text-3xl lg:ml-20">
            Categories
        </TypographyH2>
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-10 items-center md:justify-center md:w-full md:gap-20 lg:gap-24">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4 text-myprimary font-quicksand font-semibold text-lg cursor-pointer hover:scale-105 transition-transform duration-300
                        hover:text-mysecondary md:text-xl"
                    >
                        <Image
                            width={30}
                            height={30}
                            src={category.image}
                            alt={category.name}
                            className="w-10 h-10 md:w-12 md:h-12"
                            />

                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}

export default Categories;
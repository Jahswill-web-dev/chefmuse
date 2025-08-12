'use client';
import Image from "next/image";
import Masonry from "react-masonry-css";
import { TypographyH2 } from "./typography/typography";
import { Button } from "./ui/button";
// import image from "../../public/images/chad-montano-eeqbbemH9-c-unsplash.jpg"
type ImageItem = {
    name: string;
    image: string;
};
const images: ImageItem[] = [
    { name: 'image', image: '/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg' },
    { name: 'image', image: '/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg' },
    { name: 'image', image: '/images/chad-montano-MqT0asuoIcU-unsplash.jpg' },
    { name: 'image', image: '/images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg' },
    { name: 'image', image: '/images/pexels-chanwalrus-958545.jpg' },
    // { name: 'image', image: '/images/pexels-enginakyurt-1437267.jpg' },
    // { name: 'image', image: '/images/pexels-fotios-photos-1279330.jpg' },
    { name: 'image', image: '/images/pexels-marvin-ozz-1297854-2474658.jpg' },
    { name: 'image', image: '/images/pexels-shantanu-pal-938952-2679501.jpg' },
    { name: 'image', image: '/images/pexels-xmtnguyen-699953.jpg' },
    { name: 'image', image: '/images/pexels-xmtnguyen-2664216.jpg' },
    { name: 'image', image: '/images/pexels-valeriya-1147840.jpg' },
    { name: 'image', image: '/images/pexels-elli-559179-1854652.jpg' },
    { name: 'image', image: '/images/pexels-chokniti-khongchum-1197604-2280545.jpg' },
    { name: 'image', image: '/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg' },
    { name: 'image', image: '/images/pexels-willpicturethis-2641886.jpg' },
    { name: 'image', image: '/images/chad-montano-eeqbbemH9-c-unsplash.jpg' },
];

const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2
};

function GalleryGrid() {
    return (
        <div className="container relative overflow-clip h-[1080px]">
            <div className="absolute inset-0 bg-gradient-to-t from-myprimary/100  via-transparent  to-transparent z-10" />
                <TypographyH2 className="text-mydarksecondary p-10 text-center">Access and Store Thousands of Recipes Beautifully</TypographyH2>
                <Masonry breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {images.map((img, index) => (
                        <div key={index}>
                            <Image src={img.image}
                                className="rounded-lg"
                                width={300}
                                height={200}
                                alt={img.name} />
                            {/* <p>hello</p> */}
                        </div>
                    ))}
                </Masonry>
                <Button className="absolute left-1/2  transform -translate-x-1/2  z-20 bottom-9 mx-auto bg-mydarksecondary text-white
                px-8 py-5 text-xl hover:bg-mydarksecondary font-dm-sans font-semibold cursor-pointer hover:scale-105">Explore</Button>
        </div>
    );
}

export default GalleryGrid;
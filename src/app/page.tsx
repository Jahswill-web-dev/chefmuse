import Categories from "@/components/categories";
import CoreFeatures from "@/components/features";
import GalleryGrid from "@/components/gallerygrid";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/howitworks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*  */}
      <div>
        <Hero />
        <Categories />
        <HowItWorks />
        <CoreFeatures/>
        <GalleryGrid />
      </div>
      {/* Footer */}
      <div className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600">© 2023 ChefMuse. All rights reserved.</p>
        <p className="text-gray-500 text-sm">Made with ❤️ by ChefMuse Team</p>
      </div>
    </div>
  );
}

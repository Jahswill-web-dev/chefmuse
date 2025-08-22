import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await axios.get(
      // `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.SPOONACULAR_KEY}`
      // `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
      `https://api.pexels.com/v1/search?query=food&per_page=20&page=1`, 
      {
      headers: {
        Authorization: process.env.PEXELS_KEY || ''
      }
    }
    )


    const data = await res.data
    // console.log(data)
    return NextResponse.json(data)

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
      if (error.response) {
        console.error("Status:", error.response.status);
      }
    } else {
      console.error("Unexpected Error:", error);
    }

    return NextResponse.json({ error: "Failed to load recipes" }, { status: 500 })
  }
}
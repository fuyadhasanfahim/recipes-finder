import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGetMealsQuery } from "../features/api/apiSlice";

export default function HomePage() {
    const { data, isLoading, isError, error } = useGetMealsQuery();
    const { meals } = data || {};

    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <div className="h-full min-h-[80vh] w-full absolute flex justify-center items-center">
                <p>Loading...</p>
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-full min-h-[80vh] w-full flex justify-center items-center">
                <p>{error?.data}</p>
            </div>
        );
    } else if (!isLoading && !isError && meals.length === 0) {
        content = (
            <div className="h-full min-h-[80vh] w-full flex justify-center items-center">
                <p>No meals found</p>
            </div>
        );
    } else if (!isLoading && !isError && meals.length > 0) {
        content = meals?.map((meal) => {
            const { idMeal, strMeal, strMealThumb } = meal;

            return (
                <div key={idMeal}>
                    <div className="space-y-2 hover:scale-105 duration-300">
                        <img
                            src={strMealThumb}
                            alt={strMeal}
                            className="w-full max-w-96 rounded-md"
                        />
                        <p className="text-xl text-center mx-auto">{strMeal}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <>
            <Navbar />
            <div className="mx-20 h-full min-h-[80vh]">
                <div className="w-full max-w-7xl mx-auto my-20 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto relative">
                        {content}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

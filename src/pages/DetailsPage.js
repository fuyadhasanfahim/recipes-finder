import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGetMealQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
    const { id } = useParams();

    const { data, isLoading, isError, error } = useGetMealQuery(id);

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
        const {
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
            strTags,
            strYoutube,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
        } = meals[0];

        content = (
            <div className="mx-10">
                <div className="flex flex-col lg:flex-row gap-10 items-start font-normal">
                    <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="w-full max-w-96 rounded-md items-start"
                    />
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold">{strMeal}</h2>
                        <div>
                            <p>
                                <span className="font-semibold">Category:</span>{" "}
                                {strCategory}
                            </p>
                            <p>
                                <span className="font-semibold">Area:</span>{" "}
                                {strArea}
                            </p>
                            <p>
                                <span className="font-semibold">Tags:</span>{" "}
                                {strTags}
                            </p>
                        </div>
                        <p>
                            <span className="font-semibold">Instructions:</span>{" "}
                            {strInstructions}
                        </p>
                        <div>
                            <h3 className="text-2xl ">Ingredients:</h3>
                            <ul className="ml-6 list-disc">
                                {strIngredient1 && strMeasure1 && (
                                    <li>
                                        {strMeasure1} {strIngredient1}
                                    </li>
                                )}
                                {strIngredient2 && strMeasure2 && (
                                    <li>
                                        {strMeasure2} {strIngredient2}
                                    </li>
                                )}
                                {strIngredient3 && strMeasure3 && (
                                    <li>
                                        {strMeasure3} {strIngredient3}
                                    </li>
                                )}
                                {strIngredient4 && strMeasure4 && (
                                    <li>
                                        {strMeasure4} {strIngredient4}
                                    </li>
                                )}
                                {strIngredient5 && strMeasure5 && (
                                    <li>
                                        {strMeasure5} {strIngredient5}
                                    </li>
                                )}
                                {strIngredient6 && strMeasure6 && (
                                    <li>
                                        {strMeasure6} {strIngredient6}
                                    </li>
                                )}
                                {strIngredient7 && strMeasure7 && (
                                    <li>
                                        {strMeasure7} {strIngredient7}
                                    </li>
                                )}
                                {strIngredient8 && strMeasure8 && (
                                    <li>
                                        {strMeasure8} {strIngredient8}
                                    </li>
                                )}
                                {strIngredient9 && strMeasure9 && (
                                    <li>
                                        {strMeasure9} {strIngredient9}
                                    </li>
                                )}
                                {strIngredient10 && strMeasure10 && (
                                    <li>
                                        {strMeasure10} {strIngredient10}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="mt-2 text-xl text-center">
                    <a href={strYoutube}>
                        Making process of {strMeal} on Youtube {"<--"} click
                        Here
                    </a>
                </p>
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <div className="h-full my-20 mx-auto w-full max-w-7xl">
                <div className="h-full min-h-screen">{content}</div>
            </div>
            <Footer />
        </>
    );
}

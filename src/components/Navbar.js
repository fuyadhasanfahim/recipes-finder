import React, { useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState("");

    return (
        <section className="mx-10">
            <nav className="w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center gap-5 py-4">
                    <div className="text-xl sm:text-2xl select-none cursor-pointer uppercase border-b-2 border-transparent hover:opacity-80 hover:border-gray-200 duration-300">
                        <h1>
                            <a href="/">Home</a>
                        </h1>
                    </div>
                    <div>
                        <form className="flex justify-between gap-5">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search your meals..."
                                className="px-4 bg-transparent border-2 w-full max-w-52 text-gray-300 rounded"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <input
                                type="button"
                                value="Search"
                                className="border-2 px-4 py-2 cursor-pointer rounded-md hover:opacity-80 duration-300 active:scale-95"
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    );
}

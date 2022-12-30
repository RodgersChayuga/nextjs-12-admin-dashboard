import React from "react";

const SearchBar = () => (
    <form className="flex w-[50%] ml-[25%] tablet:ml-[16%] items-center ">
        <label htmlFor="voice-search" className="sr-only">
            Search
        </label>
        <div className="relative w-full ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="w-full bg-light dark:bg-dark  border border-gray-300 text-sm rounded-border-radius-2 focus:ring-color-purple focus:border-color-purple text-gray-light">
                <input
                    type="search"
                    id="voice-search"
                    className="w-[95%] ml-4 bg-transparent text-color-gray-light gap-4 py-padding-2 px-card-padding "
                    placeholder="Search..."
                    required
                />
                <button
                    type="button"
                    className="hidden tablet:flex absolute inset-y-0 right-0 items-center pr-3"
                >
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <button
            type="submit"
            className="hidden tablet:inline-flex items-center py-padding-2 px-card-padding ml-2 text-sm font-medium text-white bg-primary rounded-border-radius-2  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            Search
        </button>
    </form>
);

export default SearchBar;

import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative  max-w-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-12  shadow-md  rounded-2xl outline-none"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l4-4m0 0l-4-4m4 4h-13"
                />
            </svg>
        </div>
    );
};

export default SearchBar;

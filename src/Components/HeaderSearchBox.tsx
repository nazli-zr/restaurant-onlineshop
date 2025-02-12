import Image from "next/image";
import React from "react";

function HeaderSearchBox({
    searchModalActive,
}: {
    searchModalActive: boolean;
}) {
    return (
        <div
            className={`w-96 h-20 bg-witheCustom rounded-md flex flex-row items-center px-5 py-6
            relative shadow-lg search-box ${searchModalActive ? "active" : ""}`}
        >
            <div className="w-5/6 h-full bg-lightGray rounded-tl-md rounded-bl-md border border-f1f5f9">
                <input
                    type="text"
                    className="bg-lightGray w-full h-full rounded-tl-md rounded-bl-md outline-none 
                    placeholder:ml-2 placeholder:text-textColor1 *:placeholder:font-semibold"
                    placeholder="Search..."
                />
            </div>
            <div
                className="w-1/6 h-full flex flex-row justify-center items-center bg-yellowCustom 
            rounded-tr-md rounded-br-md hover:bg-redCustom"
            >
                <Image
                    src={"/images/header/search.png"}
                    alt="search"
                    width={30}
                    height={30}
                />
            </div>
            <Image
                src={"/images/header/square.png"}
                alt="square"
                width={40}
                height={10}
                className="absolute right-4 bottom-14"
            />
        </div>
    );
}

export default HeaderSearchBox;

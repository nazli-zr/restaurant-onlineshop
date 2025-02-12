import HeaderSearchBox from "@/Components/HeaderSearchBox";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
    const [searchModalActive, setSearchModalActive] = useState<boolean>(false);

    const OpenModalSearchHandler = () => {
        setSearchModalActive(!searchModalActive);
    };

    return (
        <>
            <header className="w-full h-28 bg-primeryColor flex flex-row justify-between items-center px-11 relative">
                <div className="w-1/3 h-full flex flex-row justify-center items-center gap-5 cursor-pointer text-blackCustom font-medium">
                    <p>Home</p>
                    <p>Menu</p>
                    <p>Pages</p>
                    <p>Blog</p>
                    <p>Shop</p>
                </div>
                <div className="w-1/3 h-full flex flex-row justify-center items-center">
                    <Image
                        src={"/logo/logo.png"}
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>
                <div className="w-1/3 h-full flex flex-row justify-between items-center cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-redCustom flex flex-row justify-center items-center">
                        <Image
                            src={"/icons/header/phoneCall.svg"}
                            alt="phoneCall"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="w-36 h-full flex flex-col justify-center">
                        <p className="text-textColor1 font-semibold">
                            HOT LINE:
                        </p>
                        <p className="text-blackCustom font-semibold text-xl">
                            +304-779-645
                        </p>
                    </div>
                    <div className="w-40 h-full flex flex-row justify-start items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-yellowCustom flex flex-row justify-center items-center">
                            <Image
                                src={"/icons/header/shopping.svg"}
                                alt="shopping"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Image
                            src={
                                searchModalActive
                                    ? "/icons/header/close.svg"
                                    : "/icons/header/searching.svg"
                            }
                            alt="searching"
                            width={30}
                            height={30}
                            onClick={OpenModalSearchHandler}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </header>

            <div className="absolute top-28 right-28">
                <HeaderSearchBox searchModalActive={searchModalActive} />
            </div>

            {children}

            <footer></footer>
        </>
    );
}

export default Layout;

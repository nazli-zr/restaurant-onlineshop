import HeaderItemModal from "@/Components/HeaderItemModal";
import HeaderSearchBox from "@/Components/HeaderSearchBox";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
    const [searchModalActive, setSearchModalActive] = useState<boolean>(false);
    const [cartPrice, setCartPrice] = useState<number>(0);
    const [cartItemNum, setCartItemNum] = useState<number>(0);
    const [modalMenuActive, setModalMenuActive] = useState<boolean>(false);

    const OpenModalSearchHandler = () => {
        setSearchModalActive(!searchModalActive);
    };
    const menuItemModal = () => {
        setModalMenuActive(!modalMenuActive);
    };

    return (
        <>
            <div className="w-full h-auto relative">
                <header className="w-full h-14 md:h-28 bg-witheCustom md:bg-primeryColor fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 flex flex-row justify-between items-center px-5 md:px-11">
                    <div className="hidden md:flex md:w-1/3 h-full flex-row justify-center items-center gap-5 cursor-pointer text-blackCustom font-medium">
                        <p>Home</p>
                        <p>Menu</p>
                        <p>Pages</p>
                        <p>Blog</p>
                        <p>Shop</p>
                    </div>

                    <div className="w-1/2 md:w-1/3 h-full flex flex-row justify-start md:justify-center items-center">
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={150}
                            height={50}
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 h-full flex flex-row justify-end items-center md:justify-between">
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-redCustom justify-center items-center">
                            <Image
                                src="/icons/header/phoneCall.svg"
                                alt="phoneCall"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="hidden md:flex w-36 h-full flex-col justify-center">
                            <p className="text-textColor1 font-semibold">
                                HOT LINE:
                            </p>
                            <p className="text-blackCustom font-semibold text-xl">
                                +304-779-645
                            </p>
                        </div>
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-yellowCustom justify-center items-center">
                            <Image
                                src="/icons/header/shopping.svg"
                                alt="shopping"
                                width={30}
                                height={30}
                            />
                        </div>

                        <div className="relative flex md:hidden w-20 justify-center items-center">
                            <Image
                                src="/icons/header/shopcartblack.svg"
                                alt="shopping"
                                width={30}
                                height={30}
                            />
                            <div className="absolute right-2 bottom-4 w-5 h-5 rounded-full bg-redCustom text-witheCustom flex justify-center items-center">
                                {cartItemNum}
                            </div>
                        </div>

                        <div className="md:hidden flex w-14 justify-start items-center font-semibold">
                            ${cartPrice}
                        </div>

                        <div className="cursor-pointer flex w-6 h-6 md:w-12 md:h-12 justify-center items-center mr-2">
                            <Image
                                src={
                                    searchModalActive
                                        ? "/icons/header/close.svg"
                                        : "/icons/header/searching.svg"
                                }
                                alt="searching"
                                width={24}
                                height={24}
                                onClick={OpenModalSearchHandler}
                            />
                        </div>

                        <div
                            className="md:hidden flex justify-center items-center cursor-pointer"
                            onClick={menuItemModal}
                        >
                            <Image
                                src={
                                    modalMenuActive
                                        ? "/icons/header/close.svg"
                                        : "/icons/header/menuicon.svg"
                                }
                                alt="menuicon"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </header>
            </div>

            <div className="pt-14 md:pt-28 relative">
                <div className="absolute top-14 md:top-28 right-5 md:right-28">
                    <HeaderSearchBox searchModalActive={searchModalActive} />
                </div>

                {modalMenuActive && (
                    <div className="relative">
                        <HeaderItemModal modalMenuActive={modalMenuActive} />
                    </div>
                )}

                {children}
            </div>

            <footer className="w-full h-[600px]  bg-footerbg flex flex-col md:flex-row items-center md:justify-between px-8  relative">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                    <Image
                        src="/logo/logo.png"
                        alt="logo"
                        width={250}
                        height={100}
                    />
                    <p className="w-full text-textColor2 text-center">
                        128 6th Ave, New York, NY 10015 United States, Dcca-1212
                    </p>

                    <div className="w-full flex flex-row justify-center gap-2 mt-6">
                        {[
                            "Vector1",
                            "logoinstagram",
                            "logofbsimple",
                            "logotwitter",
                        ].map((icon, index) => (
                            <div
                                key={index}
                                className="w-11 h-11 rounded-full border border-witheCustom bg-footerBg1 flex justify-center items-center hover:bg-redCustom"
                            >
                                <Image
                                    src={`/icons/footer/${icon}.svg`}
                                    alt={icon}
                                    width={12}
                                    height={12}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center mt-11 md:mt-0">
                    <p className="text-witheCustom text-3xl">Hot Menu</p>
                    <div className="mt-4">
                        {[
                            "BBQ Pizza TinTin",
                            "Burger Kingo",
                            "Chessey Pizza",
                            "Chocolate Donuts",
                            "Chicken Sandwich",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-full h-7 flex flex-row"
                            >
                                <p className="text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center mt-11 md:mt-0">
                    <p className="text-witheCustom text-3xl">Opening Hours</p>
                    <div className="p-6 font-sans">
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-witheCustom">
                                <strong className="text-textColor2">
                                    Monday:
                                </strong>{" "}
                                10:00am - 05:00pm
                            </li>
                            <li className="flex gap-2 text-witheCustom">
                                <strong className="text-textColor2">
                                    Tuesday:
                                </strong>{" "}
                                10:20am - 05:30pm
                            </li>
                            <li className="flex gap-2 text-witheCustom">
                                <strong className="text-textColor2">
                                    Wednesday:
                                </strong>{" "}
                                10:30am - 05:50pm
                            </li>
                            <li className="flex gap-2 text-witheCustom">
                                <strong className="text-textColor2">
                                    Thursday:
                                </strong>{" "}
                                11:00am - 07:10pm
                            </li>
                            <li className="flex gap-2 text-yellowCustom">
                                <strong className="text-textColor2">
                                    Friday:
                                </strong>{" "}
                                Closed
                            </li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/icons/footer/food.svg"
                    alt="shopping"
                    width={100}
                    height={100}
                    className="absolute top-60 right-7"
                />
                <Image
                    src="/icons/footer/food2.svg"
                    alt="shopping"
                    width={100}
                    height={100}
                    className="absolute top-96 left-7"
                />
            </footer>
        </>
    );
}

export default Layout;

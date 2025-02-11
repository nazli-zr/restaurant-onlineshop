import Image from "next/image";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header className="w-full h-28 bg-primeryColor flex flex-row justify-between items-center px-11">
                <div
                    className="w-1/3 h-full flex flex-row justify-center items-center 
                gap-5 text-blackCustom font-medium "
                >
                    <p>Home</p>
                    <p>menu</p>
                    <p>Pages</p>
                    <p>Blog</p>
                    <p>Shop</p>
                </div>
                <div className="w-1/3 h-full flex flex-row justify-center items-center ">
                    <Image
                        src={"/logo/logo.png"}
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>
                <div className="w-1/3 h-full flex flex-row justify-between items-center  ">
                    <div className="w-12 h-12 rounded-full bg-redCustom flex flex-row justify-center items-center">
                        <Image
                            src={"/icons/header/phoneCall.svg"}
                            alt="phoneCall"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div> </div>
                </div>
            </header>
            {children}
            <footer></footer>
        </>
    );
}

export default Layout;

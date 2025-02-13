import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeaderItemModal({ modalMenuActive }: { modalMenuActive: boolean }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (modalMenuActive) {
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
        }
    }, [modalMenuActive]);

    return (
        <div
            className={`w-full bg-modalHeaderBg absolute  z-50 overflow-hidden 
                        transition-[max-height] duration-300 ease-in-out 
                        ${
                            modalMenuActive
                                ? "max-h-[300px] opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
        >
            {["Home", "Menu", "Pages", "Blog", "Shop"].map((item, index) => (
                <div
                    key={item}
                    className={`w-full h-12 flex flex-row justify-between items-center 
                                border-b-2 border-bordergray px-4 transition-all duration-300 
                                ${
                                    isAnimating
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-4"
                                }`}
                    style={{
                        transitionDelay: `${index * 50}ms`,
                    }}
                >
                    <p>{item}</p>
                    <Image
                        src={"/icons/header/plusblack.svg"}
                        alt="plusblack"
                        width={20}
                        height={20}
                    />
                </div>
            ))}
        </div>
    );
}

export default HeaderItemModal;

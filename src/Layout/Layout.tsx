import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header></header>
            {children}
            <footer></footer>
        </>
    );
}

export default Layout;

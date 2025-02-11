"use client";
import React, { ReactNode } from "react";
import ReactQuery from "./ReactQuery";
import Layout from "@/Layout/Layout";

function Provider({ children }: { children: ReactNode }) {
    return (
        <ReactQuery>
            <Layout>{children}</Layout>
        </ReactQuery>
    );
}

export default Provider;

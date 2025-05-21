import Header from "@/components/Header";
import {ReactNode} from "react";
import Footer from "@/components/Footer";

export default function Template({children}: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <div className="relative isolate min-h-[calc(100vh-80px)] flex flex-col">
                <div className={'flex-1'}>{children}</div>
                <Footer/>
            </div>
        </>
    );
}

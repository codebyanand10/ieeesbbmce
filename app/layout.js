import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundCanvas from "./components/BackgroundCanvas";

export const metadata = {
    title: "IEEE SB BMCE | Baselios Mathews II College of Engineering",
    description: "Official website of IEEE Student Branch at Baselios Mathews II College of Engineering (BMCE), Sasthamcotta, Kollam.",
    icons: {
        icon: "/assets/favicon.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
            </head>
            <body>
                <BackgroundCanvas />
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}

import './globals.css';
import React from 'react';
import {MainHeader} from "@/uicomponents";

export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

type RootLayoutType = {
    children:  React.ReactNode
}

export default function RootLayout({children}:RootLayoutType) {
    return (
        <html lang="en">
        <body>
        <MainHeader />
        {children}
        </body>
        </html>
    );
}

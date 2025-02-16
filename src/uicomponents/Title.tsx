import React from "react";

type TitleType = {
    children:  React.ReactNode
}

export const Title = ({children}: TitleType) => {
    return (
        <h1 style={{color: 'white', textAlign: 'center'}}>
            {children}
        </h1>
    )
}

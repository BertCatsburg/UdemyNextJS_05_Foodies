export type MealsType = {
    id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}

export type MealsTypeOnScreen = {
    title: string;
    image: File;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}


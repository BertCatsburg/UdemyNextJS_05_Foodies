import {Title} from '@/uicomponents'
import * as React from 'react'

interface MealsSlugInterface  {
    params: Promise<{
        slug: string
    }>
}

const MealsSlugPage = async ({params}: MealsSlugInterface) => {
    const {slug} =  await params
    return (
        <main>
            <Title>Slug = {slug}</Title>
        </main>
    );
}

export default MealsSlugPage;

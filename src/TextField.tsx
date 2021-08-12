import React from 'react'
import { useState } from 'react'

// Setup interfaces to handle multiple types under an umbrella name (Person, Props)

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
}

export const TextField: React.FC<Props> = () => {
    // Setup types of useState with <>
    // null and undefined are different so set up whichever you need or both
    const [count, setCount] = useState<number | null | undefined>(5)

    return (
        <div>
            <input />
        </div>
    )
}
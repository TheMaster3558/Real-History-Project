'use client'

import FullLayout from "@/components/fullLayout";
import {useState} from "react";


const years = [
    1206,
    1380,
    1559,
    1589,
    1610,
    1715,
    1815,
    1870,
    1871,
    1883
]


export default function Home() {
    const [yearIndex, setYearIndex] = useState(0);

    const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYearIndex(Number(event.target.value)); // Update the state with the new value
    };

    const year = years[yearIndex];

    return (
        <div className="flex flex-col justify-center items-center">
            <FullLayout name={year.toString()} imagePath={`/layouts/${year}.png`}/>
            <input
                type="range"
                id="scale"
                name="scale"
                min={0}
                max={years.length - 1}
                value={yearIndex}
                onChange={handleScaleChange}
                className="w-64 fixed bottom-4"
            />
        </div>
    );
}

'use client';

import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

interface Props {
    id?: string;
    option: any[];
    name?: string;
    optionLabel: string;
}

export default function Select({ option, optionLabel, id = undefined, name }: Props) {

    const [selectedCity, setSelectedCity] = useState<number>();
    return (
        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={option} optionLabel={optionLabel} name={name} id={id} placeholder="Select a City" className="w-full md:w-14rem" />
    )
}

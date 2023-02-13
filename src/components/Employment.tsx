import React, { FC, useEffect, useState } from 'react';
import {
    CAccordion,
    CButton
} from "@coreui/react";
import { AccordionItem } from "./AccordionItem";
import { EmploymentItem } from "./EmploymentItem";

interface AccordionProps {
    title: string;
    btnTitle: string;
    place: string;
    appointment: string;
}

export type EmploymentInputType = {
    input1Value: string;
    input2Value: string;
    input3Value: string;
}

const Employment: FC<AccordionProps> = ({title, btnTitle, place, appointment}) => {

    const [itemsData, setItemsData] = useState<EmploymentInputType[]>([{input1Value: "", input2Value: "", input3Value: ""}]);

    useEffect(
        () => {
        }, [itemsData]
    );

    const handleUpdateItem = (index: number, itemData: EmploymentInputType) => {
        setItemsData(prevItemsData => prevItemsData.map(
            (item, itemIndex) => (index === (itemIndex + 1) ? itemData : item))
        );
    }

    const addAccordionItem = () => {
        setItemsData(prevData => [...prevData, {input1Value: "", input2Value: "", input3Value: ""}]);
    }

    const components = itemsData.map((data, index) => (
        <AccordionItem key={index} indexItem={index + 1}
                       title={data.input1Value !== '' ? data.input1Value : '(Not specified)'}>
            <EmploymentItem key={index} place={place} appointment={appointment} data={data}
                            handleUpdateItem={(newData) => handleUpdateItem(index + 1, newData)}/>
        </AccordionItem>)
    );

    return (
        <div className="mb-3">
            <h3>{title}</h3>
            <CAccordion>
                {components}
            </CAccordion>
            <CButton color="primary" variant="ghost" size="sm" onClick={addAccordionItem}>+ Add one more {btnTitle}</CButton>
        </div>
    );
}

export { Employment };
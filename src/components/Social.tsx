import React, { FC, useEffect, useState } from 'react';
import {
    CAccordion,
    CButton
} from "@coreui/react";
import { AccordionItem } from "./AccordionItem";
import { SocialItem } from "./SocialItem";

interface SocialProps {
    title: string;
    btnTitle: string;
    source: string;
    appointment: string;
}


export type SocialInputType = {
    input1Value: string;
    input2Value: string;
}

const Social: FC<SocialProps> = ({title, btnTitle, source, appointment}) => {

    const [itemsData, setItemsData] = useState<SocialInputType[]>([{input1Value: "", input2Value: ""}]);

    useEffect(
        () => {
        }, [itemsData]
    );

    const handleUpdateItem = (index: number, itemData: SocialInputType) => {
        setItemsData(prevItemsData => prevItemsData.map(
            (item, itemIndex) => (index === (itemIndex + 1) ? itemData : item))
        );
    }

    const addAccordionItem = () => {
        setItemsData(prevData => [...prevData, {input1Value: "", input2Value: ""}]);
    }

    const components = itemsData.map((data, index) => (
        <AccordionItem key={index} indexItem={index + 1}
                       title={data.input1Value !== '' ? data.input1Value : '(Not specified)'}>
            <SocialItem key={index} data={data} source={source} appointment={appointment}
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

export { Social };
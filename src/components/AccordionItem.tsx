import React, { FC } from 'react';
import {
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem
} from "@coreui/react";

interface AccordionItemProps {
    indexItem: number;
    title: string;
    children: JSX.Element;
}

const AccordionItem: FC<AccordionItemProps> = ({indexItem, title, children}) => {

    return (
        <CAccordionItem itemKey={indexItem}>
            <CAccordionHeader>{title}</CAccordionHeader>
            <CAccordionBody className="visible">
                {children}
            </CAccordionBody>
        </CAccordionItem>
    );
}

export { AccordionItem };
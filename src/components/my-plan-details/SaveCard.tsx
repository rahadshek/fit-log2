import { IPlan } from '@/types/page';
import React from 'react';



const SaveCard = ({add}:IPlan) => {
    return (
        <div>
            <h3>{add.name}</h3>
        </div>
    );
};

export default SaveCard;
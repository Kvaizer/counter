import React from 'react';

type DisplayPropsType = {
    counter: number
}

const Display = (props: DisplayPropsType) => {
    return (
        <div>
            {props.counter}
        </div>
    );
};

export default Display;
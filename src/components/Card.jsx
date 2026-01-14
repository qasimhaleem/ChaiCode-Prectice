import React from 'react';

const Cards = (props) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">

            {/* Background Image */}
            <img
                className="w-full h-48 object-cover"
                src={props.bgImage}
                alt="Background"
            />

            <div className="p-5">
                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {props.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Cards;
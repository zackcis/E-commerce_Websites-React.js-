import img4 from '../assets/item-03.jpg';
import img5 from '../assets/item-04.jpg';
import img6 from '../assets/item-10.jpg';
import img7 from '../assets/item-11.jpg';
import img8 from '../assets/item-12.jpg';
import img9 from '../assets/item-13.jpg';
import img10 from '../assets/item-14.jpg';
import img11 from '../assets/item-15.jpg';
import img12 from '../assets/item-16.jpg';
import React, { createContext, useState } from 'react'
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const [products, setProducts] = useState([
        {
            name: "Kylie Cosmetics Lip Gloss",
            image: img4,
            description: "Shine bright with Kylie's signature lip gloss.",
            price: "19.99",
            gender: "women",
            size: "One Size",
            condition: "new",
        },
        {
            name: "KKW Beauty Highlighter",
            image: img5,
            description: "Illuminate your features with Kim's top-rated highlighter.",
            price: "34.99",
            gender: "women",
            size: "One Size",
            condition: "new",
        },
        {
            name: "Kylie Skin Moisturizer",
            image: img6,
            description: "Keep your skin hydrated and glowing with Kylie's moisturizer.",
            price: "25.00",
            gender: "women",
            size: "One Size",
            condition: "old",
        },
        {
            name: "KKW Fragrance",
            image: img7,
            description: "Indulge in Kim's signature fragrance for a luxurious scent.",
            price: "49.99",
            gender: "women",
            size: "One Size",
            condition: "new",
        },
        {
            name: "Kylie Eyeliner Pen",
            image: img8,
            description: "Achieve the perfect winged eyeliner with Kylie's easy-to-use pen.",
            price: "14.99",
            gender: "women",
            size: "One Size",
            condition: "old",
        },
        {
            name: "KKW Beauty Lip Liner",
            image: img9,
            description: "Define and enhance your lips with Kim's lip liner.",
            price: "17.99",
            gender: "women",
            size: "One Size",
            condition: "sale",
        },
        {
            name: "Kylie Cosmetics Eyebrow Kit",
            image: img10,
            description: "Shape and fill your eyebrows with Kylie's eyebrow kit.",
            price: "22.99",
            gender: "women",
            size: "One Size",
            condition: "old",
        },
        {
            name: "KKW Beauty Setting Powder",
            image: img11,
            description: "Set your makeup for all-day wear with Kim's setting powder.",
            price: "28.99",
            gender: "women",
            size: "One Size",
            condition: "sale",
        },
        {
            name: "Kylie Skin Face Mask",
            image: img12,
            description: "Revitalize your skin with Kylie's luxurious face mask.",
            price: "32.00",
            gender: "women",
            size: "One Size",
            condition: "new",
        },

        // Add more products as needed
    ]);

    return (
        <>

            <MyContext.Provider value={[products, setProducts,users,setUsers]} >
                {children}
            </MyContext.Provider>
        </>
    )
}

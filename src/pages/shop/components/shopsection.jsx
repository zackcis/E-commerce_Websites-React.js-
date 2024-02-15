import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider'; // Assuming this is the correct path to your context file
import back from '../../../assets/heading-pages-02.jpg';

export const Shopsection = () => {
    const [test, setTest, products, setProducts] = useContext(MyContext);

    const [category, setCategory] = useState("");

    const [priceRange, setPriceRange] = useState("");

    const [screenArray, setScreenArray] = useState(products) 
    const filterElement = (event) => {
        console.log(products);
        let newTab = products.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setScreenArray(newTab)
    }
    const filteredProducts = screenArray.filter(product => {
        if (category && product.gender !== category) {
            return false;
        }
        if (priceRange) {
            const [min, max] = priceRange.split('-');
            const price = product.price;
            if (price < parseFloat(min) || price > parseFloat(max)) {
                return false;
            }
        }
        return true;

    });
    return (
        <>
            <div className='relative'>
                <img src={back} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%]'>CONTACT</h1>
            </div>
            <div className='w-[100%] flex justify-center p-44'>
                <div className='w-[20%] flex flex-col gap-7'>
                    <div className='w-[100%] flex flex-col gap-3'>
                        <h1 className='font-bold text-2xl '>Category</h1>
                        <p onClick={() => setCategory("")}>All</p>
                        <p onClick={() => setCategory("women")}>Women</p>
                        <p onClick={() => setCategory("men")}>Men</p>
                    </div>
                    <div className='w-[100%]  flex flex-col gap-3'>
                        <h1 className='font-bold text-2xl '>Price Range</h1>
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                            <option value="">All</option>
                            <option value="0-20">0-20</option>
                            <option value="20-40">20-40</option>
                            <option value="40-80">40-80</option>
                        </select>
                    </div>
                    <div>
                        <input onChange={(e) => filterElement(e)} type="search" placeholder='Search' />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='flex items-center w-[100%] justify-center gap-8'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    
                        <div className='w-[100%] p-10 gap-4 flex justify-center items-center flex-wrap '>
                            
                            {filteredProducts.map(product => (
                                
                                <div className='w-[20%] py-5' key={product.name}>
                                    <div className=' overflow-hidden '>
                                        <img className=' hover:scale-110 relative transition delay-75 w-[100%] ' src={product.image} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Condition: {product.condition}</p>
                                </div>
                            ))}
                        </div>
                    
                </div>
            </div>
        </>
    );
};

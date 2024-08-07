import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider'; 
import back from '../../../assets/heading-pages-02.jpg';

export const Shopsection = () => {
    const [products, setProducts,users,setUsers] = useContext(MyContext);
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
    const handleSend = (product) => {
        const productdeja = users[0].products.findIndex(p => p.name === product.name);
        if (productdeja !== -1) {
            const newUsers = [...users];
            newUsers[0].products[productdeja].quantity += 1;
            newUsers[0].products[productdeja].price += product.price;
            setUsers(newUsers);
        } else {
            const newUsers = [...users];
            product.quantity = 1; 
            newUsers[0].products.push(product); 
            setUsers(newUsers);
        }
    };
    return (
        <>
            <div className='relative'>
                <img src={back} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>SHOP</h1>
            </div>
            <div className='w-[100%] flex max-[430px]:flex-col justify-center lg:px-28 max-[430px]:pl-7 '>
                <div className='w-[20%] flex flex-col gap-7 pt-10'>
                    <div className='w-[100%] flex flex-col gap-3'>
                        <h1 className='font-bold text-2xl '>Category</h1>
                        <p className='cursor-pointer' onClick={() => setCategory("")}>All</p>
                        <p className='cursor-pointer' onClick={() => setCategory("women")}>Women</p>
                        <p className='cursor-pointer' onClick={() => setCategory("men")}>Men</p>
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
                        <div className='w-[100%] p-10 gap-4 flex justify-center items-center flex-wrap max-[430px]:flex-col'>
                            
                            {filteredProducts.map(product => (
                                <div className='lg:w-[20%]  py-5' key={product.name}>
                                    <div className=' overflow-hidden '>
                                        <img className=' hover:scale-110 relative transition delay-75 w-[100%] h-fit' src={product.image} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Condition: {product.condition}</p>
                                    <button onClick={() => handleSend(product)} className='rounded-full bg-white w-[120px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[30%] max-[430px]:translate-x-[90%]  translate-y-[-235%]'>Shop</button>
                                </div>
                            ))}
                        </div>
                    
                </div>
            </div>
        </>
    );
};

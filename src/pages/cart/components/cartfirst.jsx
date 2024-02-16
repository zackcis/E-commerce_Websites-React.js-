import React, { useContext } from 'react';
import { Table } from 'flowbite-react';
import { MyContext } from '../../../utils/contextProvider';

export const Cartfirst = () => {
    const [products, setProducts, users, setUsers] = useContext(MyContext)
    const Delete = (index) => {
        const newUsers = [...users[0].products];
        newUsers.splice(index, 1);
        setUsers([{ ...users[0], products: newUsers }]);
    };

    return (
        <>

            <div className="overflow-x-auto p-20">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Product name</Table.HeadCell>
                        <Table.HeadCell>Condition</Table.HeadCell>
                        <Table.HeadCell>Quantity</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {users[0].products.map((product, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <img src={product.image} width={50} alt="" />
                                    
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {product.name}
                                </Table.Cell>
                                <Table.Cell>{product.condition}</Table.Cell>
                                <Table.Cell>{product.quantity}</Table.Cell>
                                <Table.Cell>${product.price}</Table.Cell>
                                <Table.Cell>
                                    <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => Delete(index)}>
                                        Delete
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};


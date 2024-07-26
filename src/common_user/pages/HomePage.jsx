import React, { useEffect, useState } from 'react';
import SudaderaCard from "../components/Cards/SudaderaCard";
import { apiAuth } from "../../api/api";
import Card from '../components/Cards/Card';
import LoadingView from '../LoadingView';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [resData, setResData] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const response = await apiAuth({ method: 'get', url: '/products' });
            setResData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {
                resData.length > 0
                    ? (
                        <div className="flex justify-center mb-8">
                            <div className="p-4">
                                {resData.map((item) => <Card key={item.id} id={item.id} img={`./src/assets/testImages/pr4/1.jpg`} title={item.ProductName} description={item.productDescription} price={item.Price} />)}
                            </div>
                            <div className="p-4">
                                {resData.map((item) => <Card key={item.id} id={item.id} img={`./src/assets/testImages/pr4/1.jpg`} title={item.ProductName} description={item.productDescription} price={item.Price} />)}
                            </div>
                            <div className="p-4">
                                {resData.map((item) => <Card key={item.id} id={item.id} img={`./src/assets/testImages/pr4/1.jpg`} title={item.ProductName} description={item.productDescription} price={item.Price} />)}
                            </div>
                        </div>
                    )
                    : (
                        <LoadingView />
                    )
            }
        </>
    );
}

export default HomePage;
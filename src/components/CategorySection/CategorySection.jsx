import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard/CategoryCard';
import Loader from '../Loader/Loader';

const CategorySection = () => {
    const [toys , setToys] = useState([])
    const [rtoys, setRtoys] = useState([])
    const [mtoys, setMtoys] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://porto-server-rakib0157.vercel.app/stoys/?subCategory=racing%20car')
        // fetch(`http://localhost:5000/stoys/?subCategory=racing%20car`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setRtoys(data)
            setIsLoading(false)
        })
    },[])
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://porto-server-rakib0157.vercel.app/stoys/?subCategory=fighter%20toy')
        // fetch(`http://localhost:5000/stoys/?subCategory=fighter%20toy`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setToys(data)
            setIsLoading(false)
        })
    },[])
    
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://porto-server-rakib0157.vercel.app/stoys/?subCategory=mini%20item')
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setMtoys(data)
            setIsLoading(false)
        })
    },[])

    return (
        <div className='container'>
            <div className='my-5'>
                <h4 className='company-name text-center text-decoration-underline'>Shop By Category</h4>
            </div>
            {
                isLoading && <Loader></Loader>
            }
            <Tabs>
                <TabList className='border rounded'>
                    <Tab>
                        <span className='text-success fw-semibold'>Racing Car</span>
                    </Tab>
                    <Tab>
                        <span  className='text-success fw-semibold'>Fighter Toy</span>
                    </Tab>
                    <Tab>
                        <span className='text-success fw-semibold'>Mini Item</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='py-4'>
                        <div className="row gy-4">
                            {
                                rtoys.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='py-4'>
                        <div className="row gy-4">
                            {
                                toys.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='py-4'>
                        <div className="row gy-4">
                            {
                                mtoys.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                   </div>
                </TabPanel>                
            </Tabs>
        </div>
    );
};

export default CategorySection;
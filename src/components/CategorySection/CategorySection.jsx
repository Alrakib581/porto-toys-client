import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategorySection = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <h4 className='company-name text-center text-decoration-underline'>Shop By Category</h4>
            </div>
            <Tabs>
                <TabList className='border rounded'>
                    <Tab>
                        <span className='text-success fw-semibold'>Toy vehicle</span>
                    </Tab>
                    <Tab>
                        <span className='text-success fw-semibold'>Mini Ball</span>
                    </Tab>
                    <Tab>
                        <span className='text-success fw-semibold'>Water toy</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='border rounded bg-light py-4'>
                    <h2>Any content 1</h2>
                   </div>
                </TabPanel>
                <TabPanel>
                    <div className='border rounded bg-light py-4'>
                    <h2>Any content 2</h2>
                   </div>
                </TabPanel>
                <TabPanel>
                    <div className='border rounded bg-light py-4'>
                    <h2>Any content 3</h2>
                   </div>
                </TabPanel>                
            </Tabs>
        </div>
    );
};

export default CategorySection;
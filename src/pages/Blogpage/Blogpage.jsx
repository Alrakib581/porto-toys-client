import React from 'react';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import { Card } from 'react-bootstrap';

const Blogpage = () => {
    useDynamicTitle('Blog')
    return (
        <div className='my-5'>
            
           <div className='container'>
           <Card>
                <div className='row d-md-flex justify-content-center align-items-center'>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5>Card Title</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi accusantium dolore amet deleniti molestiae deserunt, repellat incidunt praesentium nihil? Illum quidem ullam, sapiente libero aliquid corrupti quisquam a nobis aspernatur assumenda odio autem illo cumque dolorem optio fuga amet fugit, sed atque adipisci provident recusandae omnis voluptatem! Odit quisquam non voluptates laudantium, ea dolores! Dignissimos, id optio nemo nisi voluptate culpa sed rerum laboriosam dolores eius minus, vero cumque facilis quia voluptatibus sit mollitia impedit! Cum excepturi sapiente officiis ab explicabo culpa, dignissimos nemo vitae ducimus a suscipit non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reiciendis.</p>
                    </div>
                </div>
            </Card>
            <br />
           <Card>
                <div className='row d-md-flex justify-content-center align-items-center'>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2018/11/10/02/42/cloud-3805852_640.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5>Card Title</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi accusantium dolore amet deleniti molestiae deserunt, repellat incidunt praesentium nihil? Illum quidem ullam, sapiente libero aliquid corrupti quisquam a nobis aspernatur assumenda odio autem illo cumque dolorem optio fuga amet fugit, sed atque adipisci provident recusandae omnis voluptatem! Odit quisquam non voluptates laudantium, ea dolores! Dignissimos, id optio nemo nisi voluptate culpa sed rerum laboriosam dolores eius minus, vero cumque facilis quia voluptatibus sit mollitia impedit! Cum excepturi sapiente officiis ab explicabo culpa, dignissimos nemo vitae ducimus a suscipit non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reiciendis.</p>
                    </div>
                </div>
            </Card>
        
           </div>
        </div>
    );
};

export default Blogpage;
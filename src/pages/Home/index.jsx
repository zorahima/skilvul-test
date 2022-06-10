import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/giphy-logo.svg'


const Index = () => {
    return (
        <div className='d-flex justify-content-center area-home align-items-center flex-column '>

            <div className='mb-5'>

            <h1> <b> WELCOME TO YOUR GIPHY</b> </h1>

            </div>

            <div>
                <img className="card-img-top" src={Logo} alt="Card image " width={200} height={100} />
            </div>

            <div className='row g-4 mt-4'>
                <div className='col-12'>
                    <Link className='btn btn-primary btn-block' to="/iron-man"> <h2> IRON MAN GIPHY</h2></Link>
                </div>

                <div className='col-12'>
                    <Link className='btn btn-primary btn-block' to="/search"><h2>SEARCH YOUR GIPHY</h2></Link>
                </div>




            </div>

        </div>

    );
}

export default Index;

import React from "react";
import succesImg from 'AssetsRoot/svg/success-image.svg';

const Success = () => {
    return (
        <section className="success">
            <h1 className="success__title">User successfully registered</h1>
            <img className="success__img" src={succesImg} alt='success_img'/>
        </section>
    );
}

export default Success;
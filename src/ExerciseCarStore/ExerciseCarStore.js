import React, { Component } from 'react'
import Car from './Car';
import Modal from './Modal';

export default class ExerciseCarStore extends Component {
    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];
    state = {
        carshow: { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 }
    }

    // state = {
    //     car: { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 }
    // }
    renderproduct = () => {
        return this.products.map((SP, index) => {
            return <div className="col-3" key={index}>
                <Car car={SP} showmodal={this.showmodal} />
            </div>
        }

        )
    }
    showmodal = (spClick) => {
        this.setState({
            carshow: spClick
        })
    }

    render() {
        return (

            <div className="container">
                <Modal car={this.state.carshow} />
                <h3 className='my-3'>DANH SÁCH XE</h3>
                <div className="row">
                    {this.renderproduct()}
                </div>
            </div>
        )
    }
};
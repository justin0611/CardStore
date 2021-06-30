import React, { Component } from 'react'
import Modal from './Modal';
export default class Car extends Component {
    render() {
        let { car } = this.props;

        return (
            <div className="card bg-light text-dark">
                <img src={car.img} alt="..." />
                <div className="card-body">
                    <p>{car.name}</p>
                    <p>{car.price}</p>
                    <button data-toggle="modal" data-target="#modelId" onClick={() => {
                        { this.props.showmodal(car) }

                    }} className="btn btn-success">Xem chi tiết</button>
                </div>
                {/* <Modal car={modal} /> */}
            </div>
        )
    }
}
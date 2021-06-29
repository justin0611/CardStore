import React, { Component } from 'react'
export default class RenderGlass extends Component {

    state = {
        imgSrc: "./img/glassesImage/v1.png",

    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/glassesImage/background.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <div className="text-light d-flex" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '70px', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className="d-flex my-4 " style={{ width: '60%', margin: '0 auto', justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: '300px' }} src="./img/glassesImage/model.jpg" alt="" />
                        <img style={{ position: 'absolute', width: '200px', top: '85px', left: '49px', opacity: 0.7 }} src="./img/glassesImage/v1.png" alt="" />
                        <div style={{ position: 'absolute', width: '100%', height: '120px', bottom: '0', backgroundColor: 'rgba(230, 130, 64, 0.5)' }}>
                            <h5>Người Mẫu</h5>
                            <p>Chữ đọc không ra, chịu</p>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: '300px' }} src="./img/glassesImage/model.jpg" alt="" />
                        <img style={{ position: 'absolute', width: '200px', top: '85px', left: '49px', opacity: 0.7 }} src={this.state.imgSrc} alt="" />
                    </div>
                </div>
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v1.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v1.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v2.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v2.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v3.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v3.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v4.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v4.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v5.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v5.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v6.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v6.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v7.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v7.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v8.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v8.png' alt="" className="w-100" />
                        </div>
                        <div className="col-2 p-3" onClick={() => {
                            this.setState({
                                imgSrc: "./img/glassesImage/v9.png"
                            })
                        }}>
                            <img style={{ padding: '10px', border: '1px solid black', cursor: 'pointer' }} src='./img/glassesImage/v9.png' alt="" className="w-100" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

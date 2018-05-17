import React, { Component } from 'react';
class chatWindowView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            chatEnded: false,
        }
    }
    render() {
        return (
            <div>
                <div className='ChatWindowMain'
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                        height: 400,
                        width: 320,
                        borderRadius: 3,
                        display: this.state.isOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        border: '1px solid #000'

                    }}>
                    {/* header */}
                    <div className='header'
                        style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#02854a', color: '#fff' }}>
                        <div style={{ marginLeft: 5 }}> {this.props.name} </div>
                        <div style={{ fontWeight: 'bold', color: '#fff', marginRight: 5 }}

                            onClick={() => {

                                this.setState({ isOpen: !this.state.isOpen })

                            }}>
                            {this.state.isOpen ? 'X' : '+'}</div>
                    </div>

                    {/* Message Area */}
                    <div className='content' style={{ flex: 6, display: 'flex', flexDirection: 'column' }}>
                    </div>

                    {/* Send Action */}

                    <div className='textArea' style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <div className="cannedText"
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#000',
                                backgroundColor: '#f0f5f9',
                                border: '1px solid #e5e5e5'
                            }}>
                            <p style={{ fontWeight: 'bold' }}>+</p>
                        </div>

                        <div className="textInput" style={{ flex: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input type="text" style={{ height: '42px', width: '100%', borderColor: '#e5e5e5' }} >
                            </input>
                        </div>

                        <div className='sendButton' style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f5f9' }}>
                            <button
                                type='submit'
                                disabled={this.state.chatEnded}
                                style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 5,
                                    borderColor: '#02854a',
                                    backgroundColor: '#02854a',
                                    outline: 0,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    opacity: this.state.chatEnded ? 0.4 : 1
                                }}
                                onClick={() => { }}>
                                SEND
                    </button>
                        </div>
                    </div>
                </div>


                {/* Minimised Chat Window */}
                <div className='minimisedHead' style={{
                    marginLeft: 10,
                    marginRight: 10,
                    height: 40,
                    width: 320,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#02854a',
                    color: '#fff',
                    display: this.state.isOpen ? 'none' : 'flex'
                }}>
                    <div style={{ marginLeft: 5 }}> {this.props.name} </div>
                    <div style={{ fontWeight: 'bold', color: '#fff', marginRight: 5 }}

                        onClick={() => {

                            this.setState({ isOpen: !this.state.isOpen })

                        }}>
                        {this.state.isOpen ? 'X' : '+'}</div>
                </div>
            </div >
        )
    }
}

export default chatWindowView;
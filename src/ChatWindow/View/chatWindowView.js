import React, { Component } from 'react';

class chatWindowView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            chatEnded: false,
            messageContent: [],
            textSent: ''
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

                        <div style={{ display: 'flex', flexDirection: 'row' }}>

                            <div className='endChat' style={{ fontWeight: 'bold', color: '#fff', marginRight: 5, cursor: 'pointer' }}
                                onClick={() => {
                                    this.setState({ chatEnded: true })
                                }}>
                                _
                        </div>

                            <div className='minimize' style={{ fontWeight: 'bold', color: '#fff', marginLeft: 5, marginRight: 5, cursor: 'pointer' }}

                                onClick={() => {

                                    this.setState({ isOpen: !this.state.isOpen })

                                }}>
                                {this.state.isOpen ? 'X' : '+'}</div>
                        </div>
                    </div>

                    {/* Message Area */}
                    <div className='content' style={{ flex: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        {this.state.messageContent.map((item, index) => {
                            var widthOfBar = item.text.length * 10;
                            return <div key={index} style={{ display: 'flex', height: 60, flexDirection: 'column', alignItems: item.type === 'self' ? 'flex-end' : 'flex-start', justifyContent: item.type === 'self' ? 'flex-end' : 'flex-start' }}>

                                <div style={{
                                    height: 30,
                                    width: widthOfBar,
                                    borderRadius: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: item.type === 'self' ? 'flex-end' : 'flex-start',
                                    border: "1px solid e5e5e5",
                                    backgroundColor: item.type === 'self' ? '#4EAA81' : '#E6BFA2',
                                    margin: 5,
                                    padding: 3,
                                    color: "#000"
                                }}>
                                    {item.text}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: item.type === 'self' ? 'flex-end' : 'flex-start',
                                    padding: 3,
                                    fontSize: 8,
                                    color: "#000"
                                }}>
                                    {item.time}
                                </div>
                            </div>
                        })}
                    </div>

                    {/* chat ended message */}
                    <div style={{
                        height: 32,
                        display: this.state.chatEnded ? 'flex' : 'none',
                        flexDirection: 'row',
                        color: '#fff',
                        backgroundColor: 'red',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Your chat has been ended
                    </div>


                    {/* Send Action */}
                    <div className='textArea' style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <div className="cannedText"
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#000',
                                backgroundColor: '#f0f5f9',
                                cursor: 'pointer',
                                border: '1px solid #e5e5e5',
                                opacity: this.state.chatEnded ? 0.4 : 1
                            }}
                            disabled={this.chatEnded}>
                            <p style={{ fontWeight: 'bold' }}>+</p>
                        </div>

                        <div className="textInput" style={{ flex: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', opacity: this.state.chatEnded ? 0.4 : 1 }}>
                            <input type="text"
                                value={this.state.textSent}
                                style={{ height: '42px', width: '100%', borderColor: '#e5e5e5' }}
                                onChange={(e) => {
                                    this.setState({ textSent: e.target.value })
                                }}
                                disabled={this.chatEnded}>
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
                                    cursor: 'pointer',
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    opacity: this.state.chatEnded ? 0.4 : 1
                                }}
                                onClick={() => {

                                    var d = new Date();
                                    var currTime = d.getHours() % 12 + ':' + d.getMinutes();
                                    console.log('Current TIme:::', currTime)
                                    if (this.state.textSent === '')
                                        return;

                                    this.setState({ messageContent: [] })
                                    var msgObj = {
                                        "text": this.state.textSent,
                                        "type": "self",
                                        "time": currTime

                                    }
                                    this.state.messageContent.push(msgObj);

                                    switch (this.state.textSent) {
                                        case 'Hi': {
                                            var recvObj = {
                                                "text": "Hello",
                                                "type": "other",
                                                "time": currTime
                                            }
                                            this.state.messageContent.push(recvObj);
                                            break;
                                        }
                                        default: {
                                            recvObj = {
                                                "text": "Can't understand you",
                                                "type": "other",
                                                "time": currTime
                                            }
                                            this.state.messageContent.push(recvObj);
                                        }
                                    }

                                    this.setState({ messageContent: this.state.messageContent, textSent: '' })

                                }}>
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
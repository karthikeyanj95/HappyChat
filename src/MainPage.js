import React, { Component } from 'react';
import ChatWindow from './ChatWindow/View/chatWindowView';

class mainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatWindowCount: [],
            disableAddChat: false,
        }
    }

    renderChatWindow = () => {
        return this.state.chatWindowCount.map((item, index) => {
            return (
                <ChatWindow key={index} name={item} />
            )
        })
    }
    render() {
        return (
            <div className='container' style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '100vh', width: '100vw' }}>
                <div className='mainHeader' style={{ display: 'flex', flex: 2, elevation: 4, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f5f9' }}>
                    <button
                        type='submit'
                        disabled={this.state.disableAddChat}
                        style={{
                            marginLeft: 24,
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            borderColor: '#02854a',
                            backgroundColor: '#02854a',
                            outline: 0,
                            color: "#fff",
                            opacity: this.state.disableAddChat ? 0.4 : 1
                        }}
                        onClick={() => {
                            if (this.state.chatWindowCount.length >= 4) {
                                this.setState({ disableAddChat: true });
                                alert("Cannot add more chat windows");
                                return;
                            }

                            this.state.chatWindowCount.push('User ' + Number(Number(this.state.chatWindowCount.length) + Number(1)));
                            this.setState({ chatWindowCount: this.state.chatWindowCount });
                        }}>
                        +
                    </button>
                </div>
                <div className='chatWindowArea' style={{ display: 'flex', flex: 23, flexDirection: 'row', alignItems: 'flex-end' }}>
                    {this.renderChatWindow()}
                </div>
            </div>
        )
    }
}

export default mainPage;
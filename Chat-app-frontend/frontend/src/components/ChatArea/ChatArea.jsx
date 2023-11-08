import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import withAuthentication from '../../utils/withAuthentication'

function ChatArea() {
  return (
    <>
    
    <div className="chat-area">
        <div className="chat-header"></div>
            <div className="messages">
                <Message text= " hi my name is shivam " sent />
                <Message text= " Nice to meet you " recieved />

                <MessageInput/>
            </div>
    </div>
    
    </>
  )
}

export default withAuthentication(ChatArea)
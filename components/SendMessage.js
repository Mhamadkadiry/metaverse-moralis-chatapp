import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endMessagesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          //The object was saved successfully
        },
        (error) => {
          // The save failed.
          // error is a Moralis Error with an error code and message
          console.log(error.message)
        }
      )
    endMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
    setMessage('')
  }

  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage

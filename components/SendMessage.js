import React from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const { user, Moralis } = useMoralis()
  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button className="font-bold text-pink-500">Send</button>
    </form>
  )
}

export default SendMessage

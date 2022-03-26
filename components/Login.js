import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import imgNft from '../assets/nft.webp'
function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black text-white">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4 ">
        {/* Logo + login btn  */}
        <Image
          className="rounded-full object-cover"
          src={imgNft}
          width={200}
          height={200}
        />
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold text-black"
        >
          Login with your wallet
        </button>
      </div>
      <div className="h-screen w-full">
        {/* Bg Image */}
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login

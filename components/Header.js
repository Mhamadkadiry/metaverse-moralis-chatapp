import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import imgNft from '../assets/nft.webp'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis()
  return (
    <div className="sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-5 text-pink-500 shadow-sm">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            className="rounded-full"
            objectFit="cover"
            src={imgNft}
            layout="fill"
          />
        </div>
        <div className=" col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48  rounded-full border-8 border-pink-500 lg:mx-auto">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* welcome */}
          <h1 className="text-3xl">Welcome to the metaverse</h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          {/* username */}
          {/* change username */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header

import Image from 'next/image'
const ProfileHeader = () => {
  return (
    <header className="w-full h-[100px] relative ">
      <Image
        className="rounded-lg"
        src="/cover.png"
        alt="cover image"
        sizes="100vw"
        objectFit="cover"
        fill
      />
    </header>
  )
}

export default ProfileHeader

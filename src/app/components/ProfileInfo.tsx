import Image from 'next/image'
const ProfileInfo = ({name, friends}: {name: string; friends: number}) => {
  return (
    <section className="flex items-center gap-4 mt-[-20px] ">
      <Image
        className="rounded-full z-50"
        src="/user.jpg"
        alt="image"
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <span className="text-2xl">{name}</span>
        <span className="text-sm">{friends} friends</span>
      </div>
    </section>
  )
}

export default ProfileInfo

import {PropsWithChildren} from 'react'

const ProfileContent = ({children}: PropsWithChildren) => {
  return <section className="w-full flex gap-4">{children}</section>
}

export default ProfileContent

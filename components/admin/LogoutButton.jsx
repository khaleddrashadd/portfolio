import { signOut } from 'next-auth/react'
import { Button } from '.'

const LogoutButton = () => {
  return (
    <Button variant="outline" label="Signout" onClick={()=>signOut()}/>
  )
}
export default LogoutButton
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = () => {
    const { getUser } = getKindeServerSession()  // hence this is a server component
    const user = getUser()  // this works but 
    
    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')
    return <div>{user.email}</div>
}

export default Page
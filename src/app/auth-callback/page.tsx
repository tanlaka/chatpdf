"use client"
import { useRouter, useSearchParams } from "next/navigation"

const Page = () => {
    const router = useRouter()  // so that we use this to redirect the user back to the origin
    const searchParams = useSearchParams()   // this will be used to search and get the parameters passed in the url
    const origin = searchParams.get('origin')   // whose value is 'dashboard' to redirect to

    return <></>
}

export default Page
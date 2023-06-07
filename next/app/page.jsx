import { useAuth } from "@/hooks/auth"

export default function page() {
    const { user } = useAuth({ middleware: 'guest' })
    
    return <h1>Hello, next app</h1>
}

'use client'

import { useAuth } from '@/hooks/auth'

export default function DashboardLayout({ children }) {
    const { user } = useAuth({ middleware: 'auth' })

    return <div>dashboard layout {children}</div>
}

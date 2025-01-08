import Link from 'next/link'
import { defaultLocale } from '../../../middleware'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <Link 
          href={`/${defaultLocale}`}
          className="text-blue-600 hover:underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}


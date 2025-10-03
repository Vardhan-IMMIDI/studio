import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4">
      <Frown className="w-24 h-24 text-primary mb-4" />
      <h1 className="text-4xl font-bold font-headline text-primary mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-foreground/80 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

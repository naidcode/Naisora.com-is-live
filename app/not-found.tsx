import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-6xl md:text-8xl font-display italic text-text-primary mb-6">404</h2>
      <p className="text-xl text-muted font-body mb-12">The page you're looking for doesn't exist.</p>
      <Link href="/" className="btn-modern btn-modern-primary px-8 py-4">
        Back to Home
      </Link>
    </div>
  )
}

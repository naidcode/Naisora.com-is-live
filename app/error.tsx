'use client'
 
export default function Error() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-6xl md:text-8xl font-display italic text-text-primary mb-6">Error</h2>
      <p className="text-xl text-muted font-body mb-12">Something went wrong.</p>
    </div>
  )
}

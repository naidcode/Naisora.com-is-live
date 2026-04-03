import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

// Mock data - in a real app this would be a fetch or from a CMS
const BLOG_POSTS = [
  { 
    slug: "why-your-restaurant-needs-a-website", 
    cat: "WEBSITE TIPS", 
    title: "Why Your Restaurant Needs a Website in 2025 (Not Just a Zomato Page)", 
    time: "4 min", 
    date: "Mar 20, 2025",
    author: "Naisora Team",
    image: "/projects/mockup1.png" 
  },
  { 
    slug: "how-to-rank-on-google-maps", 
    cat: "GOOGLE SEO", 
    title: "How to Rank #1 on Google Maps for 'Restaurants Near Me' in Bangalore", 
    time: "6 min", 
    date: "Mar 15, 2025",
    author: "Naisora Team",
    image: "/projects/mockup2.png" 
  },
  { 
    slug: "ai-whatsapp-automation", 
    cat: "AUTOMATION", 
    title: "How AI Can Reply to Your WhatsApp Orders While You're Cooking", 
    time: "5 min", 
    date: "Mar 10, 2025",
    author: "Naisora Team",
    image: "/projects/mockup3.png" 
  },
  { 
    slug: "restaurant-website-essentials", 
    cat: "WEBSITE TIPS", 
    title: "The 7 Things Every Restaurant Website Must Have to Convert Visitors", 
    time: "7 min", 
    date: "Mar 05, 2025",
    author: "Naisora Team",
    image: "/projects/mockup4.png" 
  },
  { 
    slug: "restaurant-logo-matters", 
    cat: "BRANDING", 
    title: "Why Your Restaurant Logo Matters More Than You Think", 
    time: "3 min", 
    date: "Feb 28, 2025",
    author: "Naisora Team",
    image: "/projects/mockup2.png"
  },
  { 
    slug: "competitor-not-on-google", 
    cat: "GOOGLE SEO", 
    title: "Competitor Not on Google? Here's How to Capture Their Customers", 
    time: "5 min", 
    date: "Feb 20, 2025",
    author: "Naisora Team",
    image: "/projects/mockup3.png"
  },
];

const RECENT_POSTS = [
  { 
    slug: "how-to-rank-on-google-maps", 
    title: "How to Rank #1 on Google Maps for 'Restaurants Near Me' in Bangalore", 
    date: "Mar 15, 2025",
    image: "/projects/mockup2.png"
  },
  { 
    slug: "ai-whatsapp-automation", 
    title: "How AI Can Reply to Your WhatsApp Orders While You're Cooking", 
    date: "Mar 10, 2025",
    image: "/projects/mockup3.png"
  }
];

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <main className="min-h-screen bg-bg pt-32 pb-24">
      <article className="container max-w-4xl px-6 mx-auto">
        {/* Back Link */}
        <AnimatedSection>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-body font-medium">Back to Blog</span>
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={100}>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-surface border border-stroke rounded-full text-[10px] text-muted tracking-widest uppercase font-bold">
                {post.cat}
              </span>
              <div className="flex items-center gap-4 text-xs text-muted/60 font-body">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.time} read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display text-text-primary leading-[1.1] italic">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-stroke">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-gradient p-[1px]">
                   <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                     <User className="w-5 h-5 text-text-primary" />
                   </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-body font-bold text-text-primary">{post.author}</span>
                  <span className="text-xs text-muted">Editorial Team</span>
                </div>
              </div>
              <button className="p-3 rounded-full border border-stroke text-muted hover:text-text-primary hover:border-text-primary transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <AnimatedSection delay={200}>
          <div className="relative aspect-[16/9] w-full rounded-[40px] overflow-hidden border border-stroke mb-16">
             <div className="absolute inset-0 bg-surface animate-pulse" />
             <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
             />
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={300}>
          <div className="prose prose-invert prose-lg max-w-none font-body text-muted leading-relaxed space-y-8">
            <p className="text-xl text-text-primary/90 font-medium leading-relaxed italic">
              In the heart of Bangalore's bustling food scene, staying ahead isn't just about the flavor anymore — it's about the digital footprint.
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-3xl font-display text-text-primary italic mt-12 mb-6">The Digital Shift in 2025</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="bg-surface/50 border border-stroke p-8 rounded-[32px] my-12">
              <h3 className="text-xl font-display text-text-primary mb-4 italic">Key Takeaways:</h3>
              <ul className="space-y-4 text-sm md:text-base list-none p-0">
                <li className="flex gap-3"><span className="text-text-primary">•</span> Direct orders bypass high commission fees from third-party apps.</li>
                <li className="flex gap-3"><span className="text-text-primary">•</span> A custom website builds stronger brand loyalty and customer data.</li>
                <li className="flex gap-3"><span className="text-text-primary">•</span> AI automation reduces the manual burden on your staff.</li>
              </ul>
            </div>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <blockquote className="border-l-2 border-text-primary pl-8 py-4 italic text-2xl font-display text-text-primary my-12">
              "A website is the only piece of digital real estate you truly own. Everything else is just rented space."
            </blockquote>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </AnimatedSection>

        {/* Recent Posts Section */}
        <div className="mt-32 pt-16 border-t border-stroke">
           <AnimatedSection>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-5xl font-display text-text-primary italic">Recent <span className="italic">*posts*</span></h2>
                <Link href="/blog" className="text-sm font-body font-bold text-muted hover:text-text-primary transition-colors underline underline-offset-8">
                  View All
                </Link>
              </div>
           </AnimatedSection>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RECENT_POSTS.map((rp, i) => (
                <AnimatedSection key={rp.slug} delay={i * 100}>
                  <Link href={`/blog/${rp.slug}`} className="group block">
                    <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-stroke mb-6">
                      <Image 
                        src={rp.image} 
                        alt={rp.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] text-muted tracking-widest uppercase font-bold mb-3 block">{rp.date}</span>
                    <h3 className="text-xl font-display text-text-primary group-hover:text-white transition-colors italic leading-snug">
                      {rp.title}
                    </h3>
                  </Link>
                </AnimatedSection>
              ))}
           </div>
        </div>
      </article>
    </main>
  );
}

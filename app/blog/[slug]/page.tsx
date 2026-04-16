import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Metadata } from 'next';

import { BLOG_POSTS } from "@/lib/blog-posts";
import BlogContent from "@/components/BlogContent";
import ShareButton from "@/components/ShareButton";
import ReadingProgressBar from "@/components/ReadingProgressBar";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Naisora Blog`,
    description: post.metaDesc,
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Safety check for post fetching
  const post = BLOG_POSTS.find((p) => p.slug === slug) || null;

  if (!post) {
    return (
      <main className="min-h-screen bg-bg pt-32 pb-24 text-center">
        <h1 className="text-4xl font-display text-text-primary">Post not found</h1>
        <Link href="/blog" className="text-muted hover:text-text-primary mt-8 inline-block">Back to blog</Link>
      </main>
    );
  }

  const recentPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-bg">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-stroke/20">
        <ReadingProgressBar />
      </div>

      <div className="pt-32 pb-24 px-4 md:px-0">
        <article className="max-w-[720px] mx-auto">
          {/* Back Link */}
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-body font-medium uppercase tracking-widest">Articles</span>
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection delay={100} className="relative z-50">
            <div className="flex flex-col gap-8 mb-12">
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-display text-text-primary leading-[1.1] font-bold tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-muted/60">
                   <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <span className="opacity-30">•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span className="opacity-30">•</span>
                  <div className="flex items-center gap-2 text-text-primary">
                    <Clock className="w-3 h-3" />
                    <span>{post.time} read</span>
                  </div>
                </div>
                
                <hr className="border-stroke/50" />
              </div>
            </div>
          </AnimatedSection>

          {/* Featured Image */}
          <AnimatedSection delay={200}>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-stroke mb-16 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Dynamic Content */}
          <AnimatedSection delay={300}>
             <div className="blog-content-wrapper">
               <BlogContent content={post.content} />
             </div>
          </AnimatedSection>

          {/* Share */}
          <AnimatedSection delay={400}>
            <div className="mt-16 pt-8 border-t border-stroke flex items-center justify-between">
               <span className="text-sm font-body text-muted">Share this article</span>
               <ShareButton 
                url={`https://naisora.com/blog/${slug}`}
                title={post.title}
              />
            </div>
          </AnimatedSection>
        </article>

        {/* Recent Posts Section - wider than main article for visual interest */}
        {recentPosts.length > 0 && (
          <div className="max-w-[1000px] mx-auto mt-32 pt-16 border-t border-stroke px-6">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-5xl font-display text-text-primary italic">
                  Read <span className="italic">*more*</span>
                </h2>
                <Link
                  href="/blog"
                  className="text-sm font-body font-bold text-muted hover:text-text-primary transition-colors underline underline-offset-8"
                >
                  View All
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((rp, i) => (
                <AnimatedSection key={rp.slug} delay={i * 100}>
                  <Link href={`/blog/${rp.slug}`} className="group block">
                    <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden border border-stroke mb-6">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] text-muted tracking-widest uppercase font-bold mb-3 block">
                      {rp.date}
                    </span>
                    <h3 className="text-xl font-display text-text-primary group-hover:text-white transition-colors italic leading-snug">
                      {rp.title}
                    </h3>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
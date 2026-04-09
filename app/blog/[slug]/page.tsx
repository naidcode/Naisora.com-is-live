import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Metadata } from 'next';

import { BLOG_POSTS } from "@/lib/blog-posts";
import BlogContent from "@/components/BlogContent";

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
  const post = BLOG_POSTS.find((p) => p.slug === slug);

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
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.time} read
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-display text-text-primary leading-[1.05] italic">
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
                  <span className="text-sm font-body font-bold text-text-primary">
                    {post.author}
                  </span>
                  <span className="text-xs text-muted">Core Development Team</span>
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
           <BlogContent content={post.content} />
        </AnimatedSection>

        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-stroke">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-5xl font-display text-text-primary italic">
                  Recent <span className="italic">*posts*</span>
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
                    <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-stroke mb-6">
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
      </article>
    </main>
  );
}
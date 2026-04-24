import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Calendar, User, Share2, Twitter, Linkedin, Link as LinkIcon, MessageSquare } from "lucide-react";
import { Metadata } from 'next';

import { BLOG_POSTS } from "@/lib/blog-posts";
import BlogContent from "@/components/BlogContent";
import ShareButton from "@/components/ShareButton";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import NewsletterCTA from "@/components/NewsletterCTA";

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
        <Link href="/blog" className="text-muted hover:text-text-primary mt-8 inline-block underline decoration-stroke underline-offset-4">Back to blog</Link>
      </main>
    );
  }

  const recentPosts = BLOG_POSTS.filter(p => p.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <main className="min-h-screen bg-bg selection:bg-accent/30 selection:text-white">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-stroke/10 overflow-hidden">
        <ReadingProgressBar />
      </div>

      <div className="pt-20 md:pt-32 pb-24 relative overflow-hidden">
        {/* Dynamic Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] md:h-[600px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none -z-10 blur-3xl opacity-50" />

        <article className="relative">
          {/* Back Nav - Hidden on mobile, Floating on desktop */}
          <div className="max-w-screen-xl mx-auto px-6 mb-8 md:mb-12 hidden md:block">
             <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-muted/40 hover:text-text-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
                <span className="text-[10px] font-body font-black uppercase tracking-[0.3em]">Back to Journal</span>
              </Link>
          </div>

          <div className="max-w-[900px] mx-auto px-5 md:px-0 mb-12 md:mb-20">
            {/* Category/Tag */}
            <AnimatedSection>
               <div className="flex justify-center mb-6 md:mb-8">
                 <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                   {post.cat || "Insight"}
                 </span>
               </div>
            </AnimatedSection>

            {/* Title Section */}
            <AnimatedSection delay={100} className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-display text-text-primary leading-[1.1] font-bold tracking-tight mb-8 md:mb-12">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted/60 px-4">
                 <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-[8px] md:text-[10px] text-bg font-black">
                       {post.author.charAt(0)}
                    </div>
                    <span><span className="hidden sm:inline">By </span><span className="text-text-primary font-black">{post.author}</span></span>
                 </div>
                 <div className="hidden sm:block w-1 h-1 rounded-full bg-stroke" />
                 <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                 </div>
                 <div className="hidden sm:block w-1 h-1 rounded-full bg-stroke" />
                 <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.time} read</span>
                 </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Featured Image - Immersive with caption */}
          <AnimatedSection delay={200} className="max-w-screen-xl mx-auto md:px-12 mb-16 md:mb-24 px-0">
            <div className="relative aspect-[16/10] md:aspect-[21/9] w-full md:rounded-[40px] overflow-hidden border-y md:border border-stroke/50 shadow-2xl group">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white/80 text-[10px] md:text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                {post.imageCaption || `Featured image for ${post.title}`}
              </div>
            </div>
          </AnimatedSection>

          {/* Content Layout with Sidebars */}
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 px-0 md:px-6 relative">
            
            {/* Left Sidebar - Sharing (Hidden on < lg) */}
            <div className="hidden lg:block w-16">
              <div className="sticky top-40 flex flex-col items-center gap-6">
                <span className="text-[10px] [writing-mode:vertical-rl] rotate-180 font-black text-muted/30 uppercase tracking-[0.2em] mb-4 whitespace-nowrap">Share Story</span>
                <button className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all hover:bg-accent/5 group">
                  <Twitter className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
                <button className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all hover:bg-accent/5 group">
                  <Linkedin className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
                <button className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all hover:bg-accent/5 group">
                  <LinkIcon className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Main Content Article - Card Style on Mobile */}
            <div className="flex-1 max-w-[850px] mx-auto lg:mx-0 w-full px-0 sm:px-6 md:px-0">
               <AnimatedSection delay={300} className="bg-surface/10 sm:bg-transparent rounded-[32px] sm:rounded-none border-t sm:border-t-0 border-stroke/30 pt-10 sm:pt-0">
                  <div className="blog-content-wrapper mb-12 md:mb-20 relative">
                    <BlogContent content={post.content} />
                  </div>
               </AnimatedSection>

               {/* Post Navigation / Footer */}
               <div className="mx-5 md:mx-0 border-y border-stroke/30 py-8 md:py-12 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                     <div className="relative w-16 h-16 rounded-2xl bg-surface border border-stroke flex items-center justify-center overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-accent to-blue-500 opacity-20" />
                        <User className="absolute w-8 h-8 text-accent/50" />
                     </div>
                     <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-accent mb-1">Written By</span>
                        <h4 className="text-xl font-display italic font-bold text-text-primary">{post.author}</h4>
                     </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <ShareButton 
                      url={`https://naisora.com/blog/${slug}`}
                      title={post.title}
                    />
                  </div>
               </div>

               {/* Newsletter Integration */}
               <div className="px-5 md:px-0">
                 <NewsletterCTA />
               </div>
            </div>

            {/* Right Sidebar - ToC (Hidden on < xl) */}
            <div className="hidden xl:block w-72">
              <div className="sticky top-40 space-y-12">
                <div className="p-8 rounded-3xl bg-surface/20 border border-stroke/40 backdrop-blur-sm">
                   <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-6 block">In this article</span>
                   <nav className="flex flex-col gap-5 text-[11px] font-medium text-muted">
                      <span className="hover:text-text-primary transition-colors cursor-pointer border-l-2 border-accent pl-4 text-white">Introduction</span>
                      <span className="hover:text-text-primary transition-colors cursor-pointer border-l-2 border-transparent pl-4">The Problem Space</span>
                      <span className="hover:text-text-primary transition-colors cursor-pointer border-l-2 border-transparent pl-4">Strategic Solutions</span>
                      <span className="hover:text-text-primary transition-colors cursor-pointer border-l-2 border-transparent pl-4">Case Studies</span>
                      <span className="hover:text-text-primary transition-colors cursor-pointer border-l-2 border-transparent pl-4">Closing Thoughts</span>
                   </nav>
                </div>
                
                <div className="p-8 rounded-3xl bg-surface/30 border border-stroke/50 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-accent/20 transition-all" />
                   <MessageSquare className="w-6 h-6 text-accent mb-6" />
                   <h4 className="text-lg font-display font-bold text-text-primary mb-3 italic">Need custom strategy?</h4>
                   <p className="text-[12px] text-muted mb-6 leading-relaxed">Book a 15-min discovery call to discuss your restaurant growth.</p>
                   <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-accent hover:gap-3 transition-all">Get in touch <ArrowLeft className="w-3 h-3 rotate-180" /></Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Improved Recommended Readings */}
        {recentPosts.length > 0 && (
          <div className="max-w-screen-xl mx-auto mt-24 md:mt-40 pt-16 md:pt-20 border-t border-stroke/40 px-6">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-12">
                <div className="max-w-xl">
                  <span className="inline-block text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">Keep Reading</span>
                  <h2 className="text-3xl md:text-6xl font-display text-text-primary italic font-bold leading-tight">
                    More <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Intelligence</span> for Your Brand
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="group flex items-center gap-3 text-sm font-bold text-muted hover:text-text-primary transition-colors"
                >
                  <span className="underline underline-offset-8">Explore Journal</span>
                  <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:border-text-primary group-hover:text-bg transition-all">
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {recentPosts.map((rp, i) => (
                <AnimatedSection key={rp.slug} delay={i * 100}>
                  <Link href={`/blog/${rp.slug}`} className="group block h-full">
                    <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-stroke/50 mb-6 md:mb-8 shadow-xl group-hover:shadow-accent/10 transition-all duration-700">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-accent tracking-widest uppercase font-black px-2 py-0.5 rounded bg-accent/5">
                        {rp.cat || "Article"}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-stroke" />
                      <span className="text-[10px] text-muted/50 tracking-widest uppercase font-bold">
                        {rp.time} read
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display text-text-primary group-hover:text-accent transition-colors italic font-bold leading-tight mb-4">
                      {rp.title}
                    </h3>
                    <p className="text-[13px] md:text-sm text-muted line-clamp-2 leading-relaxed opacity-80">
                      {rp.metaDesc}
                    </p>
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
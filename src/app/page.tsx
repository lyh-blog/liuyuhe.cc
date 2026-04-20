import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-profile">
          <Image
            className="hero-avatar"
            src="https://avatars.githubusercontent.com/u/171144077?v=4"
            alt="avatar"
            width={112}
            height={112}
            loading="eager"
            unoptimized
          />
          <div className="hero-copy">
            <p className="eyebrow">LiuYuhe Blog</p>
            <h1 className="hero-title">Tenifs</h1>
            <p className="hero-summary">
              微信公众号：爱编程的阿彬
            </p>
          </div>
        </div>
        <div className="hero-socials">
          <a className="hero-social-link" href="https://github.com/liuyuhe666" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hero-social-link" href="https://x.com/cnliuyuhe" target="_blank" rel="noreferrer">
            X
          </a>
          <a className="hero-social-link" href="https://t.me/liuyuhe666" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </section>

      <section className="post-list">
        {posts.map(post => (
          <article className="post-card" key={post.slug}>
            <p className="card-date">{post.date}</p>
            <h2 className="card-title">
              <Link className="card-link" href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="card-summary">{post.summary}</p>
            {post.tags?.length
              ? (
                  <div className="tag-row">
                    {post.tags.map(tag => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )
              : null}
          </article>
        ))}
      </section>
    </main>
  )
}

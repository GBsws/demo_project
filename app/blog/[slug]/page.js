export default function BlogPostPage({ params }){//params se namusí zapisovat manuálne, je v něm identifikátor
  return <main>
    <h1>Blog Post</h1>
    <p>{params.slug}</p>
  </main>
}

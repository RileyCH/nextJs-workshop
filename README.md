Step 1. Create nextjs-blog application
// npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/navigate-between-pages-starter"
// cd nextjs-blog
// npm run dev

Step 2. Routing with Pages

Step 3. Use <Link> component to navigate
// import Link from 'next/link'
// Replace contents in <h1> tag with 'Read <Link href="/posts/first-post">this page!</Link>'
// Modify `pages/posts/first-post.js` with the code below:

<!-- import Link from 'next/link';

export default function FirstPost() {
return (
  <>
    <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
   </>
  );
} -->

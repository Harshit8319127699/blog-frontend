import Image from "next/image";


interface BlogPostData {
  title: string;
  description: string;
  imageUrl: string;
}


export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string }
}) {

  const res = await fetch(`https://blog-app-task.onrender.com/api/posts/${slug}`);
  const postData: BlogPostData = await res.json();


  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto lg:px-8 md:px-4 px-2">
      <div className="mt-4 lg:w-1/2 mx-auto">
        <Image
          src={postData.imageUrl}
          alt="Blog Post Image"
          width={500}
          height={500}
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 lg:w-1/2 mx-auto">{postData.title}</h1>
      <div
        className="prose lg:w-1/2 mx-auto"
        dangerouslySetInnerHTML={{ __html: postData.description }}
      />
    </div>
 );
}
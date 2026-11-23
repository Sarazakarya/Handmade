import BlogItem from "@/modules/Client/Blog/Template/BlogItem";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <BlogItem slug={slug} />;
}

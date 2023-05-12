import { Card } from "antd";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
interface Props {
  posts: IPost;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostDetailPage({ posts }: Props) {
  return (
    <>
      <Card
        title={posts?.title}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>{posts?.body}</p>
      </Card>
    </>
  );
}

//  call API xong đó trả về dạng
//  {
//     params: { postId: 12 },
//   }

//  tiếp đó nhận data qua biến context trong getStaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: IPost[] = await res.json();
  const listParams = data.map((post) => ({
    params: { postId: post.id?.toString() },
  }));

  return {
    paths: listParams,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.postId}`
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

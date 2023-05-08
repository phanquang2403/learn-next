import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next/types";
interface Props {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}
export default function SSR({ posts }: Props) {
  const router = useRouter();
  console.log("router", router.query);

  return (
    <>
      <p>Server side renderingpostId</p>
      <ul>
        {posts.map((item, index) => (
          <li key={item.id} title={item.title}>
            {item.body}
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  console.log("runtime");
  // server-side
  // build-time(môi trường prod)

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { IPost } from "../posts/[postId]";
import { Card } from "antd";
import { useRouter } from "next/router";

interface Props {
  posts: IPost;
}
const ISR = ({ posts }: Props) => {
  const route = useRouter();

  // dành fallback  = true
  // fallback chưa có thì if() này = true (hiển thị loading)
  // khi nào xử lý xong dữ liệu trong fn getStaticProps thì fallback = true
  //=>  route.isFallback = false thì nó sẽ render page
  if (route.isFallback) {
    return <div>loading...</div>;
  }

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
};

export default ISR;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: IPost[] = await res.json();
  const listParams = data.map((post) => ({
    params: { postId: post.id?.toString() },
  }));
  return {
    paths: listParams,
    fallback: false, // false/blocking

    // false thì nếu params không hợp lệ nó trả về not fount 404
    // blocking thì nếu call page chưa có thì nó generate ra page mới ( nhược điểm: timing first low, tạo cảm giác đơ web)
    // true thì nếu
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { posts: data },
    revalidate: 5, // chạy mode prod. khi genatate page trong vong 5s
    //thì data trong 5s đó như nhau,
    //nếu sau 5s có request đầu tiên thì nó vẫn trả dữ liệu cũ nhưng âm thầm genarate dữ liệu mơis
  };
};

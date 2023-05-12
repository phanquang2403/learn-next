import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const ServerSideProps = () => {
  return <div>ServerSideProps</div>;
};

export default ServerSideProps;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // s-maxage = 5s (giây)
  // call getServerSideProps() và giữ kết quả trong cache in CDN trong 5 giây
  // trong 5s thì bao nhiêu request cũng trả kết quả ngay lập tức
  // hết 5s thì nó lại chạy lại vòng lặp đó
  context.res.setHeader("Cache-Control", "s-maxage=5");
  /* s-maxage = 5s (giây)
    // call getServerSideProps() và giữ kết quả trong cache in CDN
    // trong 5s thì bao nhiêu request cũng trả kết quả ngay lập tức
    // hết 5s thì request đầu tiên vẫn được trả data từ cache (value cũ)
    // và âm thầm call getServerSideProps() và cache data new trong CDN của mình
  */
  // context.res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");

  /* s-maxage = 5s (giây)
    // call getServerSideProps() và giữ kết quả trong cache in CDN
    // trong 5s thì bao nhiêu request cũng trả kết quả ngay lập tức
    // hết 5s thì request đầu tiên vẫn được trả data từ cache (value cũ)
    // sau 10s của stale-while-revalidate=10 thì getServerSideProps lại 
  */
  // context.res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate=10");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

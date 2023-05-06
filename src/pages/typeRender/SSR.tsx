import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
} from "next/types";

export default function SSR() {
  const router = useRouter();
  console.log("router", router.query);

  return <p>Server side rendering</p>;
}

export const getServerSideProps: GetStaticProps = (
  context: GetStaticPropsContext
) => {
  return {
    props: {},
  };
};

import { useRouter } from "next/router";

export default function SSG() {
  const router = useRouter();
  console.log("router", router.query);

  return <p>Server side rendering</p>;
}

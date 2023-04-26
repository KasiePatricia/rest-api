import { Inter } from "next/font/google";
import Rest from "../../components/Rest";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Rest />
    </>
  );
}

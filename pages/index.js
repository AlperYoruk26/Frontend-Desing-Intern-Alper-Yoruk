import { Inter, Manrope } from "next/font/google";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Image from "@/components/image";
import Team from "@/components/team";
import Count from "@/components/count";
import Form from "@/components/form";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className={`${manrope.className}`}>
      <Heading></Heading>
      <Text></Text>
      <Image></Image>
      <Team></Team>
      <Count></Count>
      <Form></Form>
    </main>
  );
}

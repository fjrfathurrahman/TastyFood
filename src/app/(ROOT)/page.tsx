import { Layout } from "@/components/layout";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout.Container>
      <h5>Home</h5>
      <Button variant="shadow" color="primary">Button</Button>
    </Layout.Container>
  );
}
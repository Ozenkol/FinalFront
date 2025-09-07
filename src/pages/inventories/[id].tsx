import { Container } from "@/shared/ui/Container/Container";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { id } = router.query; // Access the 'id' from the URL
  
    return (
      <Container>
        <h1 className="text-3xl font-bold text-center">Inventory products</h1>
      </Container>
    );
  };
  
  export default Post;
  
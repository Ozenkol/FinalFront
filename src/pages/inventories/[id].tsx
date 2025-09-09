import { ProductTable } from "@/features/product-table/ui/ProductTable";
import { Container } from "@/shared/ui/Container/Container";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { id } = router.query; // Access the 'id' from the URL
    const normalizedId: string = 
      Array.isArray(id) ? id[0] : id ?? "";

  
    return (
      <Container>
        <h1 className="text-3xl font-bold text-center">Inventory products</h1>
        <ProductTable id={normalizedId}>
        </ProductTable>
      </Container>
    );
  };
  
  export default Post;
  
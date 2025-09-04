import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { id } = router.query; // Access the 'id' from the URL
  
    return (
      <div>
        <h1>Ineventory ID: {id}</h1>
        {/* Fetch and display content for the post with this ID */}
      </div>
    );
  };
  
  export default Post;
  
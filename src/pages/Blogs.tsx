import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import BlogCard from "./BlogCard";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>loading ... </div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl ">
          <BlogCard
            authorName={"Harkirat Singh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affillite marketing"
            }
            content={
              "No need to create a fancy and modern websits with hundred of pages to make money online . making money online is a dream for man"
            }
            publishedDate={"2nd Fen 2024"}
          ></BlogCard>
          <BlogCard
            authorName={"Harkirat Singh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affillite marketing"
            }
            content={
              "No need to create a fancy and modern websits with hundred of pages to make money online . making money online is a dream for man"
            }
            publishedDate={"2nd Fen 2024"}
          ></BlogCard>
          <BlogCard
            authorName={"Harkirat Singh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affillite marketing"
            }
            content={
              "No need to create a fancy and modern websits with hundred of pages to make money online . making money online is a dream for man"
            }
            publishedDate={"2nd Fen 2024"}
          ></BlogCard>
        </div>
      </div>
    </div>
  );
};

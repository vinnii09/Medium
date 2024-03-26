import { Avatar } from "../pages/BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <div className="font-extrabold">Medium</div>
      <div>
        <Avatar name="Harkirat Singh" />
      </div>
    </div>
  );
};

import { Blog } from "@/types/blog";

const BASE_URL = "http://localhost:3001";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return res.json();
};

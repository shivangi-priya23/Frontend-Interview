import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/services/api";
import { Blog } from "@/types/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (blog: Omit<Blog, "id">) => createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newBlog: Omit<Blog, "id"> = {
      title: (form.title as HTMLInputElement).value,
      description: (form.description as HTMLInputElement).value,
      content: (form.content as HTMLTextAreaElement).value,
      coverImage: (form.coverImage as HTMLInputElement).value,
      date: (form.date as HTMLInputElement).value,
      category: (form.category as HTMLInputElement).value
        .split(",")
        .map(c => c.trim().toUpperCase()),
    };

    mutation.mutate(newBlog);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow"
        >
          {/* Title */}
          <Input name="title" placeholder="Blog Title" required />

          {/* Categories */}
          <Input
            name="category"
            placeholder="Categories (comma separated e.g. FINANCE, TECH)"
            required
          />

          {/* Description */}
          <Input
            name="description"
            placeholder="Short description"
            required
          />

          {/* Cover Image */}
          <Input
            name="coverImage"
            placeholder="Cover image URL"
            required
          />

          {/* Date */}
          <Input
            name="date"
            type="datetime-local"
            required
          />

          {/* Content */}
          <Textarea
            name="content"
            placeholder="Full blog content..."
            rows={6}
            required
          />

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

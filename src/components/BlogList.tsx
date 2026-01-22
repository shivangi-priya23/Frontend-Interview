import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/services/api";
import { Blog } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

export default function BlogList() {
  const { data, isLoading } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold mb-2">Latest Articles</h2>

      {data!.map(blog => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <Card className="hover:shadow-md transition">
            <CardContent className="p-4 space-y-2">
              <Badge variant="secondary">{blog.category[0]}</Badge>
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-sm text-muted-foreground">
                {blog.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

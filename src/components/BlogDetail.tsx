import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "@/services/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogDetail() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(Number(id)),
    enabled: !!id,
  });

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select an article to read
      </div>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <img
        src={data.coverImage}
        className="rounded-xl w-full h-[280px] object-cover"
      />

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge>{data.category[0]}</Badge>
          <span>• 5 min read</span>
        </div>

        <h1 className="text-3xl font-bold">{data.title}</h1>

        <Button size="sm">Share Article</Button>
      </div>

      <div className="prose max-w-none">
        <p>{data.content}</p>
      </div>
    </article>
  );
}

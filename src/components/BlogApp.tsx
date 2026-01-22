import { useState } from 'react';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import CreateBlogForm from './CreateBlogForm';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';

const BlogApp = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Blog Platform</h1>
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Create Blog
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BlogList 
            selectedBlogId={selectedBlogId}
            onSelectBlog={setSelectedBlogId}
          />
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <BlogDetail blogId={selectedBlogId} />
          </div>
        </div>
      </main>

      {showCreateForm && (
        <CreateBlogForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={(newBlog) => {
            setShowCreateForm(false);
            setSelectedBlogId(newBlog.id);
          }}
        />
      )}
    </div>
  );
};

export default BlogApp;
export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10 mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Brand */}
        <div>
          <h3 className="font-semibold mb-2">CA MONK</h3>
          <p className="text-gray-400">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-semibold mb-2">Platform</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Job Board</li>
            <li>Practice Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1 text-gray-400">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-xs text-gray-500 flex justify-between">
        <span>© 2024 CA Monk. All rights reserved.</span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

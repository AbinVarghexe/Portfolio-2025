'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { headingClass, textClass, buttonClass, cardClass } from '@/lib/design-utils';
import { Trash2, Edit, Plus, LogOut, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  demoUrl: string | null;
  githubUrl: string | null;
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    demoUrl: '',
    githubUrl: '',
    tags: '',
    featured: false,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      const data = await res.json();
      
      if (res.ok) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setProjects(projects.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete project:', error);
      alert('Failed to delete project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      content: project.content,
      imageUrl: project.imageUrl,
      demoUrl: project.demoUrl || '',
      githubUrl: project.githubUrl || '',
      tags: project.tags.join(', '),
      featured: project.featured,
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      demoUrl: formData.demoUrl || null,
      githubUrl: formData.githubUrl || null,
    };

    try {
      const url = editingProject 
        ? `/api/admin/projects/${editingProject.id}`
        : '/api/admin/projects';
      
      const method = editingProject ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        await fetchProjects();
        setShowForm(false);
        setEditingProject(null);
        setFormData({
          title: '',
          description: '',
          content: '',
          imageUrl: '',
          demoUrl: '',
          githubUrl: '',
          tags: '',
          featured: false,
        });
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save project');
      }
    } catch (error) {
      console.error('Failed to save project:', error);
      alert('Failed to save project');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className={textClass('body')}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ececec] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={headingClass('h1')}>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className={buttonClass('primary', 'flex items-center gap-2')}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Add Project Button */}
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
              setEditingProject(null);
              setFormData({
                title: '',
                description: '',
                content: '',
                imageUrl: '',
                demoUrl: '',
                githubUrl: '',
                tags: '',
                featured: false,
              });
            }}
            className={buttonClass('blue', 'mb-8 flex items-center gap-2')}
          >
            <Plus className="w-5 h-5" />
            Add New Project
          </button>
        )}

        {/* Project Form */}
        {showForm && (
          <div className={cardClass('default', 'mb-8')}>
            <h2 className={headingClass('h3', 'mb-6')}>
              {editingProject ? 'Edit Project' : 'Create New Project'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={textClass('label', 'block mb-2')}>Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px]"
                    required
                  />
                </div>

                <div>
                  <label className={textClass('label', 'block mb-2')}>Image URL *</label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px]"
                    required
                  />
                </div>

                <div>
                  <label className={textClass('label', 'block mb-2')}>Demo URL</label>
                  <input
                    type="url"
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px]"
                  />
                </div>

                <div>
                  <label className={textClass('label', 'block mb-2')}>GitHub URL</label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px]"
                  />
                </div>
              </div>

              <div>
                <label className={textClass('label', 'block mb-2')}>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px] min-h-[100px]"
                  required
                />
              </div>

              <div>
                <label className={textClass('label', 'block mb-2')}>Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px] min-h-[200px]"
                  required
                />
              </div>

              <div>
                <label className={textClass('label', 'block mb-2')}>Tags (comma separated) *</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="React, Next.js, TypeScript"
                  className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px]"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-5 h-5"
                />
                <label htmlFor="featured" className={textClass('body')}>
                  Featured Project
                </label>
              </div>

              <div className="flex gap-4">
                <button type="submit" className={buttonClass('blue')}>
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProject(null);
                  }}
                  className={buttonClass('primary')}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-4">
          <h2 className={headingClass('h3', 'mb-4')}>Projects ({projects.length})</h2>
          {projects.map((project) => (
            <div key={project.id} className={cardClass('default')}>
              <div className="flex gap-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-32 h-32 object-cover rounded-[15px]"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={headingClass('h4')}>{project.title}</h3>
                      {project.featured && (
                        <span className="inline-block px-3 py-1 bg-[#0020d7] text-white text-sm rounded-[8px] mt-2">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-[#d9d9d9] rounded-[8px] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 hover:bg-[#d9d9d9] rounded-[8px] transition-colors"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 hover:bg-red-100 rounded-[8px] transition-colors text-red-600"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <p className={textClass('subtitle', 'mb-3')}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#d9d9d9] text-sm rounded-[8px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

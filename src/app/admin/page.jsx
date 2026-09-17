'use client';
import React, { useState } from 'react';
import { authenticateAdmin, uploadProject, updateProject, deleteProject } from '../actions/admin';
import { Loader2, Plus, Edit2, Trash2, X, Image as ImageIcon, Database } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Tabs State: 'ledger' | 'editor'
  const [activeTab, setActiveTab] = useState('ledger');

  // Form State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  
  // Dashboard State
  const { projects, loading, error } = useProjects();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setLoginError('');
    const res = await authenticateAdmin(password);
    if (res.success) {
      setIsAuthenticated(true);
    } else {
      setLoginError(res.error);
    }
    setIsAuthenticating(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError('');
    setUploadSuccess(false);

    const formData = new FormData(e.target);
    
    let res;
    if (isEditMode && editingProject) {
      res = await updateProject(editingProject.id, formData);
    } else {
      res = await uploadProject(formData);
    }

    if (res.success) {
      setUploadSuccess(true);
      if (!isEditMode) e.target.reset();
      setTimeout(() => window.location.reload(), 1500);
    } else {
      setUploadError(res.error);
    }
    setIsUploading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to permanently delete this project?")) {
      const res = await deleteProject(id);
      if (res.success) {
        window.location.reload();
      } else {
        alert("Error deleting: " + res.error);
      }
    }
  };

  const openCreateMode = () => {
    setIsEditMode(false);
    setEditingProject(null);
    setUploadSuccess(false);
    setUploadError('');
    setActiveTab('editor');
  };

  const openEditMode = (project) => {
    setIsEditMode(true);
    setEditingProject(project);
    setUploadSuccess(false);
    setUploadError('');
    setActiveTab('editor');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6 text-[#24211E]">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white border-2 border-[#24211E] p-8">
          <h1 className="font-['Epilogue'] text-3xl font-bold mb-6">Admin Access</h1>
          {loginError && <p className="text-red-600 font-bold mb-4">{loginError}</p>}
          <div className="mb-6">
            <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Master Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:ring-2 focus:ring-[#C1603A] text-[#24211E] bg-white"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={isAuthenticating}
            className="w-full bg-[#24211E] text-[#FAF6F0] font-bold uppercase tracking-widest py-4 hover:bg-[#C1603A] transition-colors flex justify-center items-center"
          >
            {isAuthenticating ? <Loader2 className="animate-spin w-5 h-5" /> : 'Authenticate'}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF6F0] p-6 py-12 text-[#24211E]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Tabs */}
        <div className="mb-12 border-b-2 border-[#24211E] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-['Epilogue'] text-4xl font-bold text-[#24211E] mb-2">Portfolio CMS</h1>
            <p className="font-['Literata'] text-[#3C4A3E]">Manage your high-ticket case studies.</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('ledger')}
              className={`flex items-center gap-2 px-6 py-3 font-['Epilogue'] text-sm font-bold uppercase tracking-widest border-2 transition-colors ${activeTab === 'ledger' ? 'bg-[#24211E] text-[#FAF6F0] border-[#24211E]' : 'bg-transparent text-[#24211E] border-[#24211E] hover:bg-[#24211E]/10'}`}
            >
              <Database className="w-4 h-4" /> Ledger
            </button>
            <button 
              onClick={openCreateMode}
              className={`flex items-center gap-2 px-6 py-3 font-['Epilogue'] text-sm font-bold uppercase tracking-widest border-2 transition-colors ${activeTab === 'editor' && !isEditMode ? 'bg-[#C1603A] text-[#FAF6F0] border-[#C1603A]' : 'bg-transparent text-[#C1603A] border-[#C1603A] hover:bg-[#C1603A]/10'}`}
            >
              <Plus className="w-4 h-4" /> New Case Study
            </button>
          </div>
        </div>

        {/* TAB 1: LEDGER */}
        {activeTab === 'ledger' && (
          <div className="animate-in fade-in duration-500">
            {loading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin w-12 h-12 text-[#C1603A]" /></div>
            ) : error ? (
              <div className="bg-red-100 border-2 border-red-600 text-red-800 p-6 font-bold">{error}</div>
            ) : projects.length === 0 ? (
              <div className="text-center p-20 border-2 border-dashed border-[#24211E]/30">
                <p className="font-['Literata'] text-xl text-[#24211E]/60 mb-6">No projects found. Time to publish your first architecture.</p>
                <button onClick={openCreateMode} className="bg-[#24211E] text-[#FAF6F0] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#C1603A] transition-colors">
                  Create First Project
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => (
                  <div key={p.id} className="border-2 border-[#24211E] bg-white group hover:border-[#C1603A] transition-colors flex flex-col">
                    <div className="relative w-full h-48 border-b-2 border-[#24211E] group-hover:border-[#C1603A] transition-colors bg-[#FAF6F0] flex items-center justify-center overflow-hidden">
                      {p.image ? (
                        <>
                           <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110" />
                           <img src={p.image} alt={p.title} className="relative z-10 w-full h-full object-contain p-4" />
                        </>
                      ) : (
                        <ImageIcon className="w-12 h-12 text-[#24211E]/20" />
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-['Epilogue'] text-[10px] font-bold uppercase tracking-widest text-[#C1603A]">{p.category}</span>
                        <div className="flex gap-3 bg-[#FAF6F0] px-3 py-1 border border-[#24211E]/20">
                          <button onClick={() => openEditMode(p)} className="text-[#3C4A3E] hover:text-[#C1603A] transition-colors" title="Edit Project">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="text-red-900/40 hover:text-red-600 transition-colors" title="Delete Project">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="font-['Epilogue'] font-bold text-xl text-[#24211E] mb-2">{p.title}</h3>
                      <p className="text-sm text-[#24211E]/70 line-clamp-2 mb-4 flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tech?.slice(0,3).map(t => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-[#24211E]/5 px-2 py-1">{t}</span>
                        ))}
                        {p.tech?.length > 3 && <span className="text-[10px] font-bold uppercase tracking-widest bg-[#24211E]/5 px-2 py-1">+{p.tech.length - 3}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EDITOR */}
        {activeTab === 'editor' && (
          <div className="animate-in slide-in-from-bottom-8 duration-500 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-['Epilogue'] text-3xl font-bold text-[#24211E]">
                {isEditMode ? 'Edit Case Study' : 'Publish New Case Study'}
              </h2>
              {isEditMode && (
                <button onClick={() => setActiveTab('ledger')} className="flex items-center gap-2 font-['Epilogue'] text-sm font-bold uppercase text-[#C1603A] hover:text-[#24211E] transition-colors">
                  <X className="w-4 h-4" /> Cancel Edit
                </button>
              )}
            </div>
            
            {uploadSuccess && (
              <div className="bg-green-100 border-2 border-green-600 text-green-800 p-6 mb-8 font-bold text-lg">
                {isEditMode ? 'Project updated successfully!' : 'Project published successfully!'} Refreshing...
              </div>
            )}
            
            {uploadError && (
              <div className="bg-red-100 border-2 border-red-600 text-red-800 p-6 mb-8 font-bold text-lg">
                Error: {uploadError}
              </div>
            )}

            <form onSubmit={handleUpload} className="space-y-8 bg-white border-2 border-[#24211E] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(36,33,30,1)]" key={isEditMode ? editingProject?.id : 'new'}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Project Title</label>
                  <input name="title" type="text" defaultValue={editingProject?.title} required className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium" />
                </div>
                <div>
                  <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Category (e.g., AI, Web, Mobile)</label>
                  <input name="category" type="text" defaultValue={editingProject?.category} required className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium" />
                </div>
              </div>

              <div>
                <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Short Description</label>
                <textarea name="desc" defaultValue={editingProject?.desc} required rows="3" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium leading-relaxed"></textarea>
              </div>

              <div>
                <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Tech Stack (comma separated)</label>
                <input name="tech" type="text" defaultValue={editingProject?.tech?.join(', ')} placeholder="Python, Next.js, TensorFlow" required className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Live URL (optional)</label>
                  <input name="live" type="text" defaultValue={editingProject?.live} placeholder="https://" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium" />
                </div>
                <div>
                  <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2">Source Code URL (optional)</label>
                  <input name="code" type="text" defaultValue={editingProject?.code} placeholder="https://" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium" />
                </div>
              </div>

              <div className="border-t-2 border-[#E7DFD5] pt-8 mt-8">
                <h2 className="font-['Epilogue'] text-2xl font-bold mb-6">Case Study Details</h2>
                
                <div className="space-y-8">
                  <div>
                    <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2 text-[#C1603A]">The Challenge (Problem)</label>
                    <textarea name="problem" defaultValue={editingProject?.problem} rows="4" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium leading-relaxed"></textarea>
                  </div>
                  
                  <div>
                    <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2 text-[#3C4A3E]">The Architecture (Solution)</label>
                    <textarea name="built" defaultValue={editingProject?.built} rows="4" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium leading-relaxed"></textarea>
                  </div>
                  
                  <div>
                    <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-2 text-[#3C4A3E]">Business Impact (Results)</label>
                    <textarea name="learned" defaultValue={editingProject?.learned} rows="4" className="w-full border-2 border-[#24211E] p-3 focus:outline-none focus:border-[#C1603A] text-[#24211E] bg-white font-medium leading-relaxed"></textarea>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-[#E7DFD5] pt-8 mt-8 bg-[#FAF6F0] p-6 border-2">
                 <label className="block font-['Epilogue'] text-sm font-bold uppercase mb-4">
                   Cover Image {isEditMode && <span className="text-[#C1603A] font-normal lowercase">(Leave blank to keep existing)</span>}
                 </label>
                 
                 {isEditMode && editingProject?.image && (
                   <div className="mb-6 border-2 border-[#24211E] bg-white p-2 inline-block">
                     <p className="text-xs uppercase font-bold mb-2 text-[#24211E]/60">Current Image:</p>
                     <img src={editingProject.image} alt="Current cover" className="h-32 w-auto object-contain" />
                   </div>
                 )}
                 
                 <input name="image" type="file" accept="image/*" required={!isEditMode} className="w-full p-3 bg-white border-2 border-dashed border-[#24211E] cursor-pointer text-[#24211E]" />
              </div>

              <button 
                type="submit" 
                disabled={isUploading}
                className="w-full bg-[#24211E] text-[#FAF6F0] font-bold uppercase tracking-widest py-6 mt-8 hover:bg-[#C1603A] transition-colors flex justify-center items-center text-lg"
              >
                {isUploading ? <Loader2 className="animate-spin w-8 h-8" /> : (isEditMode ? 'Save Changes' : 'Publish Architecture')}
              </button>
            </form>
          </div>
        )}

      </div>
    </main>
  );
}

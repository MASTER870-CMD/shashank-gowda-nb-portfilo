import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

/**
 * @typedef {Object} Project
 * @property {string} [id]
 * @property {string} title
 * @property {string} desc
 * @property {string} category
 * @property {string} image
 * @property {string} live
 * @property {string} code
 * @property {string} date
 * @property {string[]} tech
 */

// Enterprise Fallback Data matching Shashank's production archive
export const FALLBACK_PROJECTS = [
  {
    id: 'voktra-os',
    title: 'Voktra OS',
    desc: 'Custom operating system built on Xubuntu with highly optimized terminal configurations, custom graphical rules, and low-level kernel integrations for systems engineering.',
    category: 'Kernel & Systems Engineering',
    image: '/images/readme.png',
    live: 'https://github.com/MASTER870-CMD',
    code: 'https://github.com/MASTER870-CMD',
    date: '2026-03-01',
    tech: ['Linux Kernel', 'Xubuntu', 'Zsh', 'Bash Scripting', 'XFCE']
  },
  {
    id: 'project-nexus-ai',
    title: 'Project Nexus AI',
    desc: 'Voice-activated personal AI assistant featuring complex API command routing, natural language processing (NLP), and low-level hardware integration.',
    category: 'AI & Distributed Systems',
    image: '/images/neuro_ai.png',
    live: 'https://github.com/MASTER870-CMD',
    code: 'https://github.com/MASTER870-CMD',
    date: '2026-02-15',
    tech: ['Python', 'FastAPI', 'NLP', 'Whisper', 'AsyncIO']
  },
  {
    id: 'emotion-detector',
    title: 'Emotion Detector (Generative Vision)',
    desc: 'Real-time facial expression analysis using TensorFlow.js. Detects micro-expressions with 95% accuracy and provides live confidence metrics at 60 FPS.',
    category: 'Computer Vision',
    image: '/images/face_mode.png',
    live: 'https://master870-cmd.github.io/face-emotion-finder/',
    code: 'https://github.com/MASTER870-CMD/face-emotion-finder',
    date: '2026-01-20',
    tech: ['TensorFlow.js', 'WebGL', 'JavaScript', 'Computer Vision']
  },
  {
    id: 'luxury-bg-remover',
    title: 'Luxury AI Background Remover',
    desc: 'Client-side neural network tool to strip complex backgrounds from high-resolution images with real-time edge refinement and instant export.',
    category: 'AI & Tooling',
    image: '/images/bg_remover.png',
    live: 'https://master870-cmd.github.io/image-background-remover/',
    code: 'https://github.com/MASTER870-CMD/image-background-remover',
    date: '2025-12-10',
    tech: ['Machine Learning', 'Canvas API', 'JavaScript', 'CSS3']
  },
  {
    id: 'text-to-img',
    title: 'Text-to-Image Generator',
    desc: 'Harnesses Stable Diffusion deep learning pipelines to generate high-fidelity artistic imagery from prompt directives with dynamic preset styles.',
    category: 'Generative AI',
    image: '/images/text-to-img.png',
    live: 'https://master870-cmd.github.io/ai-image-generator-html-css-js/',
    code: 'https://github.com/MASTER870-CMD/ai-image-generator-html-css-js',
    date: '2025-11-05',
    tech: ['Stable Diffusion', 'REST APIs', 'Generative AI', 'Python']
  },
  {
    id: 'calc-vault',
    title: 'Calculator Security Vault',
    desc: 'Stealth privacy vault masquerading as an interactive scientific calculator. Features AES encryption and hidden secondary credential storage.',
    category: 'Security & Tools',
    image: '/images/calc-vault.png',
    live: 'https://github.com/MASTER870-CMD',
    code: 'https://github.com/MASTER870-CMD',
    date: '2025-09-18',
    tech: ['Cryptography', 'AES-256', 'JavaScript', 'Security']
  }
];

/**
 * Fetch all documents from the "projects" collection, ordered by date descending.
 * @returns {Promise<Project[]>}
 */
export async function fetchProjects() {
  try {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.info('[FIRESTORE] "projects" collection is currently empty. Serving verified enterprise fallback dataset.');
      return FALLBACK_PROJECTS;
    }

    const projects = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        title: data.title || 'Untitled Project',
        desc: data.desc || '',
        category: data.category || 'Engineering',
        image: data.image || '/images/preview.png',
        live: data.live || '#',
        code: data.code || '#',
        date: data.date || new Date().toISOString(),
        tech: Array.isArray(data.tech) ? data.tech : []
      });
    });

    return projects;
  } catch (error) {
    console.warn('[FIRESTORE_FETCH_WARNING] Firestore unreachable or unconfigured on client:', error.message);
    return FALLBACK_PROJECTS;
  }
}

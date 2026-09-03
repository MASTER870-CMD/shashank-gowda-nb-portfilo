'use client';

import { useState, useEffect } from 'react';

/**
 * Custom React Hook to fetch dynamic projects from the secure backend API.
 * The frontend contains ZERO Firebase credentials or direct keys.
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/projects');
        if (!res.ok) {
          throw new Error(`API responded with status: ${res.status}`);
        }
        const json = await res.json();
        if (isMounted) {
          setProjects(json.data || []);
          setError(null);
        }
      } catch (err) {
        console.error('[USE_PROJECTS_ERROR]', err);
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}

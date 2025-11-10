import { useState, useEffect, useCallback } from 'react';
import { GitHubRepo } from '../types';
import toast from 'react-hot-toast';

const DATA_SCIENCE_KEYWORDS = [
  'ia', 'ai', 'ml', 'machine-learning', 'data-science', 'ciencia-de-dados',
  'data-analysis', 'analise-de-dados', 'analytics', 'pandas', 'numpy',
  'tensorflow', 'pytorch', 'scikit-learn', 'chatbot', 'nlp', 'dados',
  'análise', 'vision', 'gemini', 'deep-learning'
];


export const useGitHubRepos = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      const data: GitHubRepo[] = await response.json();
      
      const webDevRepos = data.filter(repo => {
        const repoContent = [
          repo.name,
          repo.description,
          ...(repo.topics || [])
        ].join(' ').toLowerCase();

        // Exclude if it matches any data science keyword
        return !DATA_SCIENCE_KEYWORDS.some(keyword => repoContent.includes(keyword));
      });

      setRepos(webDevRepos.slice(0, 9));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      toast.error('Falha ao buscar projetos do GitHub.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchRepos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRepos]);

  return { repos, loading, error };
};
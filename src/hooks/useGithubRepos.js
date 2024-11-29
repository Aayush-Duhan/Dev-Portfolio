import { useState, useEffect } from 'react';

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const headers = {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        };

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          { headers }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Get more details for each repo including languages
        const reposWithDetails = await Promise.all(
          data.map(async (repo) => {
            const [languagesRes] = await Promise.all([
              fetch(repo.languages_url, { headers })
            ]);
            
            const languages = await languagesRes.json();
            
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              topics: repo.topics,
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count,
              languages: Object.keys(languages),
              created_at: repo.created_at,
              updated_at: repo.updated_at
            };
          })
        );

        setRepos(reposWithDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, isLoading, error };
};

export default useGithubRepos;

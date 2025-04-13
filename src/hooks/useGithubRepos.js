import { useState, useEffect } from 'react';

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        
        // Create a fallback set of repositories if API fails
        const fallbackRepos = [
          {
            id: 1,
            name: 'Portfolio',
            description: 'My personal portfolio website built with React, Three.js and TailwindCSS',
            html_url: 'https://github.com/Aayush-Duhan/Portfolio',
            homepage: '',
            topics: ['react', 'threejs', 'tailwindcss'],
            stargazers_count: 5,
            forks_count: 2,
            languages: ['JavaScript', 'HTML', 'CSS'],
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-04-01T00:00:00Z'
          },
          {
            id: 2,
            name: 'AI-Chat-App',
            description: 'A chat application with AI capabilities',
            html_url: 'https://github.com/Aayush-Duhan/AI-Chat-App',
            homepage: '',
            topics: ['react', 'ai', 'nodejs'],
            stargazers_count: 3,
            forks_count: 1,
            languages: ['JavaScript', 'Python'],
            created_at: '2024-02-01T00:00:00Z',
            updated_at: '2024-03-15T00:00:00Z'
          }
        ];
        
        try {
          // Try to fetch from GitHub API without authentication first
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
          );
          
          if (!response.ok) {
            // If unauthenticated request fails, try with token if available
            if (import.meta.env.VITE_GITHUB_TOKEN) {
              const authResponse = await fetch(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
                { 
                  headers: {
                    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                  }
                }
              );
              
              if (authResponse.ok) {
                const data = await authResponse.json();
                // Use simplified data without additional API calls
                const simplifiedRepos = data.map(repo => ({
                  id: repo.id,
                  name: repo.name,
                  description: repo.description,
                  html_url: repo.html_url,
                  homepage: repo.homepage,
                  topics: repo.topics || [],
                  stargazers_count: repo.stargazers_count,
                  forks_count: repo.forks_count,
                  languages: [repo.language].filter(Boolean),  // Use primary language
                  created_at: repo.created_at,
                  updated_at: repo.updated_at
                }));
                
                setRepos(simplifiedRepos);
                return; // Exit if successful
              }
            }
            
            // If both approaches fail, use fallback data
            setRepos(fallbackRepos);
            return;
          }
          
          // Process successful response
          const data = await response.json();
          const simplifiedRepos = data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics || [],
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            languages: [repo.language].filter(Boolean),  // Use primary language
            created_at: repo.created_at,
            updated_at: repo.updated_at
          }));
          
          setRepos(simplifiedRepos);
        } catch (apiError) {
          console.error('GitHub API error:', apiError);
          // Use fallback data if API completely fails
          setRepos(fallbackRepos);
        }
      } catch (err) {
        setError(err.message);
        // Even in case of error, provide fallback data
        setRepos([
          {
            id: 1,
            name: 'Portfolio',
            description: 'My personal portfolio website',
            html_url: 'https://github.com/Aayush-Duhan',
            languages: ['JavaScript']
          }
        ]);
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

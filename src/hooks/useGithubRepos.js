import { useState, useEffect } from 'react';

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);

        // Define fallback repositories data
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

        // Set fallback data immediately to ensure UI is populated
        setRepos(fallbackRepos);

        // Try to fetch from GitHub API with proper authentication
        try {
          const token = import.meta.env.VITE_GITHUB_TOKEN;

          if (token) {
            // Make authenticated request
            const authResponse = await fetch(
              `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
              {
                headers: {
                  'Accept': 'application/vnd.github.v3+json',
                  'Authorization': `token ${token}`
                }
              }
            );

            // Check rate limit headers
            const rateLimitRemaining = authResponse.headers.get('X-RateLimit-Remaining');
            const rateLimitLimit = authResponse.headers.get('X-RateLimit-Limit');
            const rateLimitReset = authResponse.headers.get('X-RateLimit-Reset');

            if (rateLimitRemaining && rateLimitLimit && rateLimitReset) {
              setRateLimit({
                remaining: parseInt(rateLimitRemaining, 10),
                limit: parseInt(rateLimitLimit, 10),
                resetTime: new Date(parseInt(rateLimitReset, 10) * 1000)
              });

              console.log(`GitHub API Rate Limit: ${rateLimitRemaining}/${rateLimitLimit} remaining. Resets at ${new Date(parseInt(rateLimitReset, 10) * 1000).toLocaleTimeString()}`);
            }

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

              // Update repos with live data if available
              if (simplifiedRepos.length > 0) {
                setRepos(simplifiedRepos);
              }
            } else {
              // Log error response
              const errorData = await authResponse.json();
              console.error('GitHub API error response:', errorData);
              console.error(`Status: ${authResponse.status} ${authResponse.statusText}`);
            }
          } else {
            console.warn('No GitHub token found in environment variables. Using fallback data.');
          }
        } catch (apiError) {
          console.error('GitHub API error:', apiError);
          // Already using fallback data, so no need to set it again
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

  return { repos, isLoading, error, rateLimit };
};

export default useGithubRepos;

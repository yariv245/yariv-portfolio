import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "685bdd544412c9da268c01e4", 
  requiresAuth: true // Ensure authentication is required for all operations
});

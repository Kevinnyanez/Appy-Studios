import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSupabase = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Probar la conexión verificando el estado de autenticación
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError && authError.message !== 'Auth session missing!') {
          throw new Error(authError.message);
        }
        
        setIsConnected(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };

    testConnection();
  }, []);

  return {
    isConnected,
    isLoading,
    error,
    supabase
  };
};

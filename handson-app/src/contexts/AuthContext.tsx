import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User|null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string|null;
}

type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS', payload: User }
  | { type: 'LOGIN_FAILURE', payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

function authReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
  }
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState,
    (initial) => {
      try {
        const stored = localStorage.getItem('auth_user');
        if (stored) {
          const user: User = JSON.parse(stored);
          return {
            ...initial,
            user,
            isAuthenticated: true
          };
        }
      } catch {
        localStorage.removeItem('auth_user');
      }

      return initial;
    }
  );

  // monitora qualquer modificao no state.user
  // caso tenha, ele armazena no localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('auth_user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('auth_user');
    }
  }, [state.user]);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // Simular uma API
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === 'admin@example.com' && password === 'admin123') {
        const user: User = {
          id: 1,
          name: 'Administrador',
          email: 'admin@example.com',
          role: 'admin'
        };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else if (email === 'user@example.com' && password === 'user123') {
        const user: User = {
          id: 1,
          name: 'Usuário',
          email: 'user@example.com',
          role: 'user'
        };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('auth_user');
  };

  const clearError = () => {
    dispatch({ type: 'CLEAN_ERROR' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
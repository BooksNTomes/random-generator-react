import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { login, authenticate, refresh, register } from '../api/auth.api.js';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ user, setUser ] = useState(null);
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ isRefreshing, setIsRefreshing ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');
    
    const { data, isSuccess, error, isError, refetch: verifyToken } = useQuery({
        queryKey: ['authenticate', token],
        queryFn: ({ queryKey }) => verify(queryKey[1]),
        enabled: !!token && !isRefreshing,
        retry: false,
    });

    // Refresh Access Token
    const refreshTokenMutation = useMutation();

    // - Recheck
    useEffect();

    // Login Process
    const loginMutation = useMutation();

    // Register Process
    const registerMutation = useMutation();

    // Auto Log Out
    const logout = () => {};

    // Return Values
    const returnValues = {};

    return (
        <AuthContext.Provider value={ returnValues }>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

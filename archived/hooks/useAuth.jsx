import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { login, authenticate, refresh, register } from '../../frontend/src/api/auth.api.js';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ user, setUser ] = useState(null);
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');
    
    const [ isRefreshing, setIsRefreshing ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    
    const { data, isSuccess, error, isError, refetch: verifyToken } = useQuery({
        queryKey: ['authenticate', token],
        queryFn: ({ queryKey }) => verify(queryKey[1]),
        enabled: !!token && !isRefreshing,
        retry: false,
    });

    // Refresh Access Token
    const refreshTokenMutation = useMutation({
        mutationFn: refresh,
        onMutate: () => {
            setIsRefreshing(true);
            setIsLoading(true);
        },
        onSuccess: (data) => {
            setToken(data.accessToken)
            localStorage.setItem('token', data.accessToken)
            setIsRefreshing(false);
        },
        onError: (error) => {
            console.log('Refresh failed:', error);
            setIsRefreshing(false);
            setIsLoading(false);
            logout()
        },
        retry: false,
    });

    // Recheck
    useEffect(() => {
        if(isSuccess && data) {
            setUser(data.user);
            setAuthenticated(true);
            setIsLoading(false)
        }

        if(isError){
            // If access token is invalid / expired, refresh or generate token
            refreshTokenMutation.mutate()
        }
    }, [data, isError, isSuccess]);

    // Login Process
    const loginMutation = useMutation({
        mutationFn: (credentials) => login(credentials),
        onSuccess: (data) => {
            setToken(data.credentials.token);
            setUser({user_id: data.credentials.user_id, username: data.credentials.username});
            localStorage.setItem('token', data.credentials.token);
            queryClient.setQueryData(['user'], data.user);
            setAuthenticated(true);
            setIsLoading(false)
            setErrorMessage('')
            navigate('/generators-manager');
        },
        onError:(error) => {
            setIsLoading(false);
            setErrorMessage(error.message)
        }
    });

    // Register Process
    const registerMutation = useMutation({
        mutationFn: ({ username, password }) => register(username, password),
        onSuccess: (_data, credentials) => {
            setErrorMessage('');
            loginMutation.mutate(credentials);
        },
        onError: (error) => {
            setErrorMessage(error.message);
        }
    });

    // Auto Log Out
    const logout = () => {
        setUser(null);
        setToken(null);
        setAuthenticated(false)
        localStorage.removeItem('token')
    };

    // Return Values
    const returnValues = {
        token,
        authenticated,
        user,
        login: loginMutation.mutate,
        loginLoading: loginMutation.isLoading,
        isError: loginMutation.isError,
        register: registerMutation.mutate,
        registerLoading: registerMutation.isLoading,
        logout,
        isLoading,
        errorMessage,
        verifyToken,
        clearError: () => setErrorMessage('')
    };

    return (
        <AuthContext.Provider value={ returnValues }>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

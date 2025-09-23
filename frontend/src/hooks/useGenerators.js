import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGenerators, getGenerator, createGenerator, updateGenerator, deleteGenerator } from "../api/generators.api";
import { useAuth } from "./useAuth";

export default function useGenerators() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    const generatorsQuery = useQuery({
        queryClient: ['generators'],
        queryFn: () => getGenerator(token)
    });

    const createGeneratorMutation = useMutation({
        mutationFn: ({token, newGenerator}) => {
            return createGenerator(token, newGenerator);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['generators']);
        }
    });

    const updateGeneratorMutation = useMutation({
        mutationFn: ({token, id, editedGenerator}) => {
            return updateGenerator(token, id, editedGenerator);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['generators']);
        }
    });

    const deleteGeneratorMutation = useMutation({
        mutationFn: ({token, id}) => {
            return deleteGenerator(token, id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['generators'])
        }
    });

    return { generatorsQuery, createGeneratorMutation, updateGeneratorMutation, deleteGeneratorMutation };
}
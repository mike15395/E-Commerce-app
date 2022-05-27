import { AxiosInstance } from '../../util/AxiosInstance';

export const getAllCategories = async () => {
    const URL = '/categories';

    try {
        const response = await AxiosInstance.get(URL);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
        
    }
}
import { FormInputValues } from 'AddUser/types';
import { apiClient } from './apiClient';
import { USERS } from './urls';

export const userApi = {
  fetchUserList: async (): Promise<Record<string, unknown>> => {
    return await apiClient.get(USERS);
  },
  addUser: async (data: FormInputValues): Promise<Record<string, unknown>> => {
    return await apiClient.post(USERS, data);
  },
};

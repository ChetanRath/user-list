import { useEffect, useState } from 'react';
import useAsyncFn from 'hooks/useAsync';
import { userApi } from 'utils/api';
import { UserType } from './types';

const useUserListController = (newUser: UserType | null) => {
  const [userListState, setUserListState] = useState<UserType[] | []>([]);
  const { isLoading, res: userList, asyncFunc: getUsers } = useAsyncFn(userApi.fetchUserList);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (userList) setUserListState(p => [...p, ...userList]);
  }, [userList]);

  useEffect(() => {
    if (newUser) {
      setUserListState(p => [newUser, ...p]);
    }
  }, [newUser]);
  return { isLoading, userListState };
};

export default useUserListController;

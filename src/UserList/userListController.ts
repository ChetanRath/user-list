import { useEffect, useMemo, useState } from 'react';
import useAsyncFn from 'hooks/useAsync';
import { userApi } from 'utils/api';
import { UserType } from './types';
import tableData from './tableData';

const useUserListController = (newUser: UserType | null) => {
  const [userListState, setUserListState] = useState<UserType[] | []>([]);
  const { isLoading, res, asyncFunc: getUsers } = useAsyncFn(userApi.fetchUserList);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (res) setUserListState([...res]);
  }, [res]);

  useEffect(() => {
    if (newUser) {
      setUserListState(p => [newUser, ...p]);
    }
  }, [newUser]);

  const handleUserDelete = (id: number) => {
    const index = userListState.findIndex(user => user.id === id);
    if (index > -1) {
      const currUserList = userListState;
      currUserList.splice(index, 1);
      setUserListState([...currUserList]);
    }
  };

  const columns = useMemo(() => tableData(handleUserDelete), [userListState]);

  return { isLoading, userListState, columns };
};

export default useUserListController;

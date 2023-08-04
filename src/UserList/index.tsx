import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';

import useAsyncFn from 'hooks/useAsync';
import { userApi } from 'utils/api';
import tableData from './tableData';
import { UserType, ColumnType } from './types';

export const UserList = () => {
  const { isLoading, res: userList, err, asyncFunc: getUsers } = useAsyncFn(userApi.fetchUserList);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      {isLoading && (
        <CircularProgress
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          size={80}
        />
      )}
      {!isLoading && userList && (
        <Table sx={{ width: '80%', margin: 'auto' }} aria-label={'simple table'}>
          <TableHead>
            <TableRow>
              {tableData().map((columnData: ColumnType) => (
                <TableCell key={columnData.label}> {columnData.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user: UserType) => (
              <TableRow key={user.id}>
                {tableData().map(columnData => (
                  <TableCell key={columnData.id}>{user[columnData.id as keyof UserType]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

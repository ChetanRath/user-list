import { useCallback, useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { AddUserForm } from 'AddUser';
import { UserList } from './UserList';
import { UserType } from 'UserList/types';

function App() {
  const [openModal, setModalOpen] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<UserType | null>(null);

  const handleClose = useCallback(() => setModalOpen(false), []);
  const handleAddUserClick = () => setModalOpen(true);

  const addNewUser = useCallback((user: UserType) => setNewUser(user), []);

  return (
    <div>
      <Button onClick={handleAddUserClick} variant={'contained'}>
        {'Add User'}
      </Button>
      <UserList newUser={newUser} />
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby={'modal-modal-title'}
        aria-describedby={'modal-modal-description'}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '4%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}
        >
          <AddUserForm addNewUser={addNewUser} closeModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default App;

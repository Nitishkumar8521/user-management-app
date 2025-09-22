import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Button,
  useDisclosure,
  Box,
  Alert,
  AlertIcon,
  Spinner,
  Center,
  Badge,
  Text,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import UserForm from './UserForm';

const UserList = ({  
  loading, 
  error, 
  onEdit, 
  onDelete, 
  onAdd,
  currentItems 
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  const handleAdd = () => {
    setSelectedUser(null);
    onOpen();
  };

  const handleFormSubmit = (userData) => {
    if (selectedUser) {
      onEdit(selectedUser.id, userData);
    } else {
      onAdd(userData);
    }
  };

  if (loading) {
    return (
      <Center py={10}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" mb={4}>
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <Box>
      <Button colorScheme="blue" mb={4} onClick={handleAdd}>
        Add User
      </Button>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Department</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Badge colorScheme="purple">{user.company.name}</Badge>
                </Td>
                <Td>
                  <IconButton
                    icon={<EditIcon />}
                    size="sm"
                    mr={2}
                    onClick={() => handleEdit(user)}
                    aria-label="Edit user"
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => onDelete(user.id)}
                    aria-label="Delete user"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {currentItems.length === 0 && (
        <Center py={10}>
          <Box textAlign="center">
            <Text fontSize="lg">No users found</Text>
          </Box>
        </Center>
      )}

      <UserForm
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default UserList;
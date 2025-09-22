import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import { useUsers } from './hooks/useUsers';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import FilterPopup from './components/FilterPopup';
import SearchSort from './components/SearchSort';

function App() {
  const { users, loading, error, addUser, updateUser, deleteUser } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [filters, setFilters] = useState({
    name: '',
    username: '',
    email: '',
    department: ''
  });

  // Filter, search, and sort users
  const processedUsers = useMemo(() => {
    let result = [...users];
    
    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.username.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.company.name.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        const filterLower = value.toLowerCase();
        result = result.filter(user => {
          if (key === 'department') {
            return user.company.name.toLowerCase().includes(filterLower);
          }
          return user[key] && user[key].toLowerCase().includes(filterLower);
        });
      }
    });
    
    // Apply sorting
    if (sortField) {
      result.sort((a, b) => {
        let aValue, bValue;
        
        if (sortField === 'company.name') {
          aValue = a.company.name;
          bValue = b.company.name;
        } else {
          aValue = a[sortField];
          bValue = b[sortField];
        }
        
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
      });
    }
    
    return result;
  }, [users, searchTerm, filters, sortField]);

  // Get current items for pagination
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return processedUsers.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, itemsPerPage, processedUsers]);

  const handleAddUser = async (userData) => {
    await addUser(userData);
    setCurrentPage(1); // Reset to first page after adding
  };

  const handleEditUser = async (id, userData) => {
    await updateUser(id, userData);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    // Adjust current page if needed after deletion
    if (currentItems.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <Box minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl" mb={8} textAlign="center">
          User Management System
        </Heading>
        
        <Box mb={6}>
          <SearchSort
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortField={sortField}
            onSortChange={setSortField}
          />
          
          <FilterPopup onFilter={handleFilter} />
        </Box>

        <UserList
          users={users}
          loading={loading}
          error={error}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onAdd={handleAddUser}
          currentItems={currentItems}
        />
        
        <Pagination
          currentPage={currentPage}
          totalItems={processedUsers.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </Container>
    </Box>
  );
}

export default App;
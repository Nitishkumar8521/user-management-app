import React from 'react';
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchSort = ({ searchTerm, onSearchChange, sortField, onSortChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
      <HStack spacing={4}>
        <InputGroup width="300px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </InputGroup>
      </HStack>

      <HStack spacing={2}>
        <Select
          width="auto"
          value={sortField}
          onChange={(e) => onSortChange(e.target.value)}
          placeholder="Sort by"
        >
          <option value="name">First Name</option>
          <option value="username">Last Name</option>
          <option value="email">Email</option>
          <option value="company.name">Department</option>
        </Select>
      </HStack>
    </Box>
  );
};

export default SearchSort;
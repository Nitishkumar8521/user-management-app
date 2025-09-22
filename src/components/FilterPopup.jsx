import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  VStack,
  Input,
  FormLabel,
  HStack,
} from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa';

const FilterPopup = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    name: '',
    username: '',
    email: '',
    department: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      name: '',
      username: '',
      email: '',
      department: ''
    };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<FaFilter />} variant="outline">
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Filter Users</PopoverHeader>
        <PopoverBody>
          <VStack spacing={3}>
            <VStack align="start" spacing={1} w="100%">
              <FormLabel mb={0}>First Name</FormLabel>
              <Input
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Filter by first name"
                size="sm"
              />
            </VStack>

            <VStack align="start" spacing={1} w="100%">
              <FormLabel mb={0}>Last Name</FormLabel>
              <Input
                name="username"
                value={filters.username}
                onChange={handleFilterChange}
                placeholder="Filter by last name"
                size="sm"
              />
            </VStack>

            <VStack align="start" spacing={1} w="100%">
              <FormLabel mb={0}>Email</FormLabel>
              <Input
                name="email"
                value={filters.email}
                onChange={handleFilterChange}
                placeholder="Filter by email"
                size="sm"
              />
            </VStack>

            <VStack align="start" spacing={1} w="100%">
              <FormLabel mb={0}>Department</FormLabel>
              <Input
                name="department"
                value={filters.department}
                onChange={handleFilterChange}
                placeholder="Filter by department"
                size="sm"
              />
            </VStack>

            <HStack spacing={2} w="100%" justify="end">
              <Button size="sm" onClick={clearFilters} variant="outline">
                Clear
              </Button>
              <Button size="sm" colorScheme="blue" onClick={applyFilters}>
                Apply
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopup;
import React from 'react';
import {
  HStack,
  Button,
  Select,
  Text,
  Box
} from '@chakra-ui/react';

const Pagination = ({ 
  currentPage, 
  totalItems, 
  itemsPerPage, 
  onPageChange, 
  onItemsPerPageChange 
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageOptions = [10, 25, 50, 100];

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
      <HStack spacing={2}>
        <Text fontSize="sm">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
        </Text>
      </HStack>
      
      <HStack spacing={2}>
        <Select
          size="sm"
          width="auto"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {pageOptions.map(option => (
            <option key={option} value={option}>
              Show {option}
            </option>
          ))}
        </Select>
        
        <Button size="sm" onClick={handlePrevious} isDisabled={currentPage === 1}>
          Previous
        </Button>
        
        <Text fontSize="sm">
          Page {currentPage} of {totalPages}
        </Text>
        
        <Button size="sm" onClick={handleNext} isDisabled={currentPage === totalPages}>
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default Pagination;
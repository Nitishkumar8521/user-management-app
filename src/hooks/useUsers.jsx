import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (userData) => {
    try {
      await axios.post(`${API_BASE_URL}/users`, userData);
      setUsers([...users, { ...userData, id: users.length + 1 }]);
      return { success: true };
    } catch (err) {
      setError('Failed to add user');
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  const updateUser = async (id, userData) => {
    try {
      await axios.put(`${API_BASE_URL}/users/${id}`, userData);
      setUsers(users.map(user => user.id === id ? { ...userData, id } : user));
      return { success: true };
    } catch (err) {
      setError('Failed to update user');
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      return { success: true };
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  return {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
    refetch: fetchUsers,
  };
};
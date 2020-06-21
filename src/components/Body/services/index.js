import axios from 'axios';

const RESOURCE = 'https://reqres.in/api/users?page=2';

const fetchUsersData = async () => {
  const response = await axios.get(RESOURCE);
  if (response.status === 200) return response.data.data;

  throw Error(response.message);
};

export default fetchUsersData;

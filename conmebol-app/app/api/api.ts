const BASE_URL = 'http://161.35.rrr143.238/jgonzalez';

export const getTeams = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Error fetching teams');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getTeamById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Error fetching team details');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addTeam = async (team: object) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(team),
    });
    if (!response.ok) throw new Error('Error adding team');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteTeam = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error deleting team');
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

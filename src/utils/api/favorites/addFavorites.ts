import { FavoritesProps } from "@/types";

 


export const addToFavorite = async (houseId:number, userId:number): Promise<FavoritesProps> => {
  try {
    const response = await fetch('/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        house_id: houseId,
        user_id: userId
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('Added to favorites:', data);
      return data;
    } else {
      console.error('Error:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
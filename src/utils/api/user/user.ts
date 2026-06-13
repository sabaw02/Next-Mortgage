 export const getGuestUserId = (): number => {
  const key = 'guest_user_id';
  let id = localStorage.getItem(key);
  if (!id) {
     id = Date.now().toString() + Math.floor(Math.random() * 10000);
    localStorage.setItem(key, id);
  }
  return parseInt(id, 10);
};
// setter
export const setLocalResults = (token: string, object: any) =>
  localStorage.setItem(`MemoryApp_${token}`, object);

// getter
export const getLocalResults = (token: string) =>
  localStorage.getItem(`MemoryApp_${token}`);

// remove
export const removeLocalToken = (token: string) =>
  localStorage.removeItem(`MemoryApp_${token}`);

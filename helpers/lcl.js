/**
 * Save an object to localStorage
 * @param {string} key - The key under which the object should be stored.
 * @param {Object} value - The object to store.
 */
export const setLcl = (key, value) => {
  if (!key || value === undefined) {
    console.error("Invalid key or value");
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};

/**
 * Get an object from localStorage
 * @param {string} key - The key under which the object is stored.
 * @returns {Object|null} - The object retrieved from localStorage or null if not found.
 */
export const getLcl = (key) => {
  if (!key) {
    console.error("Invalid key");
    return null;
  }

  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (err) {
    console.error("Error retrieving from localStorage", err);
    return null;
  }
};

/**
 * Remove an object from localStorage
 * @param {string} key - The key under which the object is stored.
 */
export const rmLcl = (key) => {
  if (!key) {
    console.error("Invalid key");
    return;
  }

  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from localStorage", err);
  }
};

/**
 * Clear all objects from localStorage
 */
export const clrLcl = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Error clearing localStorage", err);
  }
};

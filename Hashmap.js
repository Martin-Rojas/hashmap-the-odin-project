export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor; // Determines when to resize
    this.capacity = capacity; // Size of the internal array
    this.size = 0; // How many key/value pairs are stored
    // Create the buckets (an array where data will be stored)
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  // Helper to check how full the table is
  currentLoadFactor() {
    return this.size / this.capacity;
  }

  // Resize if too full
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2; // double the capacity
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0; // reset size (we’ll re-add items)

    // Reinsert all old pairs into new table
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value); // reuse set() to place them correctly
      }
    }
  }

  // Takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // overwrite existing key
        return;
      }
    }

    bucket.push([key, value]); // add new key-value pair
    this.size++;

    // Check if too full → resize if needed
    if (this.currentLoadFactor() > 0.75) {
      this.resize();
    }
  }

  /* Takes one argument as a key and returns the value that is assigned 
  to this key. If a key is not found, return null. */
  get(key) {
    // Get index
    const index = this.hash(key);
    // Get bucket
    const bucket = this.buckets[index];

    // If bucket empty return null
    if (bucket.length === 0 || !bucket) {
      return null;
    }

    // Loop through all pairs in the bucket
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];

      // Compare stored key to search key
      if (storedKey === key) {
        return storedValue; // key found → return value
      }
    }

    // Not found after checking all
    return null;
  }

  /** Takes a key as an argument and returns true or false
   * based on whether or not the key is in the hash map. */
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket.length === 0 || !bucket) {
      return false;
    }

    // Loop through all pairs in the bucket
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];

      // Compare stored key to search key
      if (storedKey === key) {
        return true; // key found → return value
      }
    }

    return false;
  }

  /**Takes a key as an argument.
   * If the given key is in the hash map, it should remove
   * the entry with that key and return true.
   * If the key isn’t in the hash map, it should return false. */
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket || bucket.length === 0) return false;

    // Traverse the bucket to lookup the key
    // Loop through all pairs in the bucket
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];

      // Compare stored key to search key
      if (storedKey === key) {
        bucket.splice(i, 1); // remove key-value pair
        this.size--; // decrease total size
        return true; // key found → return value
      }
    }

    // Key not found
    return false;
  }

  /** Returns the number of stored keys in the hash map.*/
  length() {
    let totalKeys = 0;

    // Traverse the set table
    this.buckets.forEach((bucket) => {
      // Check if the bucket exists and has a lenght greater than o
      if (bucket && bucket.length > 0) {
        totalKeys += bucket.length;
      }
    });
    return totalKeys;
  }
  /** Removes all entries in the hash map. */
  clear() {
    // Replace the buckets with a new empty array of the same capacity
    this.buckets = new Array(this.capacity).fill(null).map(() => []);

    // Reset the number of stored pairs
    this.size = 0;
  }
}

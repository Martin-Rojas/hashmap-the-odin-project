export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor; // Determines when to resize
    this.capacity = capacity; // Size of the internal array
    this.size = 0; // How many key/value pairs are stored
    // Create the buckets (an array where data will be stored)
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }
  // Takes a key and produces a hash code with it. 
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }
}

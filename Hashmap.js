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
}

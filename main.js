import { HashMap } from "./Hashmap.js";

const hashMap = new HashMap();

hashMap.set(`martin`, `rojas`);
hashMap.set(`rojas`, `Lizeth`);
hashMap.set(`sajor`, `Julia`);
hashMap.set(`rmartinez`, `mia`);

console.log(hashMap.buckets);

// test get(key)
console.log(hashMap.get(`mendez`));
console.log(hashMap.get(`rojas`));

// test has(key)
console.log(hashMap.has(`rojas`));
console.log(hashMap.has(`martin`));
console.log(hashMap.has(`realMadrid`));

import { HashMap } from "./Hashmap.js";

const hashMap = new HashMap();

hashMap.set(`martin`, `rojas`);
hashMap.set(`rojas`, `Lizeth`);
hashMap.set(`rmartinez`, `mia`);

console.log(hashMap.buckets);

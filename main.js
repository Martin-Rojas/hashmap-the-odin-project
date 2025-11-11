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

// test remove(key)
console.log(hashMap.remove(`rojas`));
console.log("rojas key is found?" + hashMap.has(`rojas`));
console.log(hashMap.remove(`car`));

// test Length()
hashMap.set(`rojas`, `Lizeth`);
hashMap.set(`rosaj`, `car`);
console.log(hashMap.buckets);
console.log(hashMap.length());

// test clear()
hashMap.clear();
console.log(hashMap.length());
console.log(hashMap.buckets);

// test keys()
hashMap.set(`rojas`, `Lizeth`);
hashMap.set(`rosaj`, `car`);
hashMap.set(`ash`, `31`);
hashMap.set(`team`, `Real Madrid`);
console.log(hashMap.buckets);
console.log(hashMap.length());
console.log(hashMap.keys());

// test values
console.log(hashMap.values());


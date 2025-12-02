# TypeScript-এ interface এবং type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type — দুটোই কোনো অবজেক্টের গঠন (shape/structure) নির্ধারণ করতে ব্যবহৃত হয়। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

<h2>Extendable</h2>

interface সহজেই extends ব্যবহার করে অন্য interface কে প্রসারিত করতে পারে
type ও intersections (&) ব্যবহার করে অন্য টাইপের সাথে মিলিয়ে নতুন টাইপ তৈরি করা যায়, কিন্তু extends কীওয়ার্ড নেই

<h2>Union ও Intersection</h2>

type- union | এবং intersection & সাপোর্ট করে
interface - union টাইপ সাপোর্ট করে না

<h2>Declaration Merging</h2>
interace - একই নামে একাধিক interface লিখলে TypeScript সেগুলোকে একত্রে মার্জ করে
type - Declaration Merging সাপোর্ট করে না

<h2>Usecase</h2>
type- union/intersection, primitive alias, utility type তৈরিতে বেশি ব্যবহৃত হয়
intersection- object, class তৈরিতে বেশি ব্যবহৃত হয়

# TypeScript-এ keyof কীওয়ার্ডের ব্যবহার

keyof হলো TypeScript-এর একটি অপারেটর, যা কোনো object type-এর সব key (property names) নিয়ে একটি union টাইপ তৈরি করে।
এটি সাধারণত extends, typeof, এবং in এর সাথে ব্যবহার করা হয়।

```
type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};
```

আমরা যদি এখন
```
type PersonKeys = keyof Person;

```

তাহলে আমরা return হিসেবে সবগুলো key এর union গুলো পাব
```
"name" | "age" | "isMarried"
```



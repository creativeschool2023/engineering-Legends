```typescript
// data.ts
interface Topic {
  id: number;
  name: string;
  description: string;
}

interface InputTopic {
  id: number;
  name: string;
  description: string;
}

const inputTopic: InputTopic = {
  id: 1,
  name: 'Sample Topic',
  description: 'This is a sample topic',
};

const topic: Topic = {
  id: inputTopic.id,
  name: inputTopic.name,
  description: inputTopic.description,
};

export { topic };
```
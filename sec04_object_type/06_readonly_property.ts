export {}

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 12387,
    username: "catgirl"
}

// Cannot assign to 'id' because it is a read-only property.ts
// user.id = 123

console.log(user.id)
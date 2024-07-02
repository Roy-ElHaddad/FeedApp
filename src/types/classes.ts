export type User = {
    Name: string;
    LastName: string;
    avatar: string;
}

export type Post = {
    user: User;
    data: {
        timestamp: string;
        text: string;
    };
    key: number;
}
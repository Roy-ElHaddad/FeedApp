export type User = {
    name: string;
    lastName: string;
    avatar: string;
}

export type Post = {
    user: User;
    data: {
        timestamp: string;
        text: string;
        image: string | null;
    };
    id: number;
}
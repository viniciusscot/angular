export interface Photo {
    id: number;
    postDate: Date;
    url: String;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userID: number;

}
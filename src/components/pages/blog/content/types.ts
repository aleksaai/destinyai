export interface BlogContent {
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  conclusion: string;
}

export interface BlogData {
  [key: string]: BlogContent;
}
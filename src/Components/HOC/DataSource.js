export const testData = {
  getComment: () => {
    const CommentData = ["Comment 1", "Comment 2", "Comment 3", "Comment 4", "Comment 5"];
    return CommentData;
  },
  getBlog: (id) => {
    const BlogData = ["Blog 1", "Blog 2", "Blog 3", "Blog 4", "Blog 5"];
    return BlogData[id];
  }
}
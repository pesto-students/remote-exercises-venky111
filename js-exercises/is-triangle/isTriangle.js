function isTriangle(s1, s2, s3) {
  return (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1);
}
export { isTriangle };

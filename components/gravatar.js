export default function Gravatar({size}) {
  let hashedEmail = md5('topper.mitz@gmail.com');
  return (
    "https://www.gravatar.com/avatar/" + hashedEmail + "?s="+size)
}
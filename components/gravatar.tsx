import md5 from 'md5';
import { withTransaction } from '@elastic/apm-rum-react';

function Gravatar({size}) {
  let hashedEmail = md5('topper.mitz@gmail.com');
  return (
    "https://www.gravatar.com/avatar/" + hashedEmail + "?s="+size)
}
export default withTransaction("Gravatar", "component")(Gravatar);
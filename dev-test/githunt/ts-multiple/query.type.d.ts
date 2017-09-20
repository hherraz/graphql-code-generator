import { Entry } from './entry.type';
import { FeedType } from './feedtype.enum';
import { User } from './user.type';

export interface Query {
  feed?: Entry[]; /* A feed of repository submissions */
  entry?: Entry; /* A single entry */
  currentUser?: User; /* Return the currently logged in user, or null if nobody is logged in */
}

export interface FeedQueryArgs {
  type: FeedType; /* The sort order for the feed */
  offset?: number; /* The number of items to skip, for pagination */
  limit?: number; /* The number of items to fetch starting from the offset, for pagination */
}
export interface EntryQueryArgs {
  repoFullName: string; /* The full repository name from GitHub, e.g. &quot;apollostack/GitHunt-API&quot; */
}

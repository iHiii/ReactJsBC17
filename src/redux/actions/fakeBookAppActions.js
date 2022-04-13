import { COMMENT } from "./types/fakeBookAppType";

//action creator
export const commentAction = (userComment) => ({
  type: COMMENT,
  userComment,
});

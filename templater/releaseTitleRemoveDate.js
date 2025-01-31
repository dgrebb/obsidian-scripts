function releaseTitleRemoveDate(title) {
  // `title` is a string may include some, but not all, of the following
  // "25.01.29 - Big Release Wow!"
  // "25.01.28-29 Another - Massive - Release"
  // we only want to keep the release title, so we need to remove the date

  // Check if title exists and is a string
  if (!title || typeof title !== "string") {
    return "";
  }

  const datePattern = /^(?:\d{2,4}[-./]\d{2}[-./]\d{2}(?:-\d{2})?)\s*[-–—]\s*/;

  // If date pattern is found, remove it; otherwise return original title
  return title.replace(datePattern, "").trim();
}

module.exports = releaseTitleRemoveDate;

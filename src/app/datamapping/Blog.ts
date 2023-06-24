export class Blog {
  messageId?: number;
  userId?: number;
  userPost?: string;
  title?: string;
  announceContent?: string | undefined;
  announceDate?: Date | undefined;
  announceDateStr?: string | undefined;
  expiryDate?: Date | undefined;
  expiryDateStr?: string | undefined;
}

export class BlogViewList {
  messageId?: string;
  title?: string;
  announceDate?: string;
  expiryDate?: string;
}

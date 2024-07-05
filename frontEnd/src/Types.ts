type PostTypeInterface = {
  _id: number;
  image: string;
  title: string;
  createdAt: string;
};

type TagsTypeInterface = string[]
type BreadTypeInterface = {
  name: string,
  link: string
}

type commentTypeInterface = {
  _id: string,
  user: {
    _id: string,
    name: string,
    image:string
  },
  desc: string,
  post: string,
  parent: string | null | undefined,
  replyOnUser: string | null | undefined,
  createdAt: string
}

type CommentsTypeInterface = commentTypeInterface[]


interface NavTypeInterface {
  isNavbarVisible: boolean;
  setIsNavbarVisible: (isNavbarVisible: boolean) => void;
}

export type { PostTypeInterface, TagsTypeInterface, BreadTypeInterface, CommentsTypeInterface, commentTypeInterface, NavTypeInterface }  